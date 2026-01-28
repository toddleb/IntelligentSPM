/**
 * Embedding Service for IntelligentSPM
 * Supports OpenAI (ada-002), Ollama (nomic-embed-text), and AICR Gateway
 */

import OpenAI from 'openai';

// Embedding dimensions by model
const EMBEDDING_DIMENSIONS = {
  'text-embedding-ada-002': 1536,
  'text-embedding-3-small': 1536,
  'nomic-embed-text': 768,
  'mxbai-embed-large': 1024,
};

export type EmbeddingModel = keyof typeof EMBEDDING_DIMENSIONS;
export type EmbeddingProvider = 'openai' | 'ollama' | 'gateway';

interface EmbeddingConfig {
  provider: EmbeddingProvider;
  model: EmbeddingModel;
  ollamaBaseUrl?: string;
  openaiApiKey?: string;
  gatewayUrl?: string;
  gatewayApiKey?: string;
}

interface EmbeddingResult {
  embeddings: number[][];
  model: string;
  dimensions: number;
  tokenCount?: number;
}

/**
 * Get default embedding configuration
 * Priority: Gateway > Ollama (free, local) > OpenAI
 */
export function getEmbeddingConfig(): EmbeddingConfig {
  const gatewayUrl = process.env.AICR_GATEWAY_URL;
  const gatewayApiKey = process.env.AICR_API_KEY;
  const ollamaUrl = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
  const openaiKey = process.env.OPENAI_API_KEY;

  // Use AICR Gateway if configured
  if (gatewayUrl && gatewayApiKey) {
    return {
      provider: 'gateway',
      model: 'nomic-embed-text', // Gateway will route to appropriate provider
      gatewayUrl,
      gatewayApiKey,
    };
  }

  // Use OpenAI if explicitly configured
  if (process.env.USE_OPENAI_EMBEDDINGS === 'true' && openaiKey) {
    return {
      provider: 'openai',
      model: 'text-embedding-ada-002',
      openaiApiKey: openaiKey,
    };
  }

  // Default to Ollama (free, local)
  return {
    provider: 'ollama',
    model: 'nomic-embed-text',
    ollamaBaseUrl: ollamaUrl,
  };
}

/**
 * Generate embeddings for an array of texts
 */
export async function generateEmbeddings(
  texts: string[],
  config?: Partial<EmbeddingConfig>
): Promise<EmbeddingResult> {
  const finalConfig = { ...getEmbeddingConfig(), ...config };

  if (finalConfig.provider === 'gateway') {
    return generateGatewayEmbeddings(texts, finalConfig);
  }

  if (finalConfig.provider === 'openai') {
    return generateOpenAIEmbeddings(texts, finalConfig);
  }

  return generateOllamaEmbeddings(texts, finalConfig);
}

/**
 * Generate embeddings via AICR Gateway
 */
async function generateGatewayEmbeddings(
  texts: string[],
  config: EmbeddingConfig
): Promise<EmbeddingResult> {
  if (!config.gatewayUrl || !config.gatewayApiKey) {
    throw new Error('Gateway URL and API key required for gateway embeddings');
  }

  const response = await fetch(`${config.gatewayUrl}/api/v1/embeddings`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.gatewayApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: config.model,
      input: texts,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({})) as { error?: { message?: string } };
    throw new Error(error.error?.message || `Gateway embedding failed: ${response.status}`);
  }

  const data = await response.json() as {
    model: string;
    data: Array<{ embedding: number[]; dimensions: number }>;
    usage: { total_tokens: number };
  };

  return {
    embeddings: data.data.map(d => d.embedding),
    model: data.model,
    dimensions: data.data[0]?.dimensions || EMBEDDING_DIMENSIONS[config.model] || 768,
    tokenCount: data.usage?.total_tokens,
  };
}

/**
 * Generate embeddings via OpenAI
 */
async function generateOpenAIEmbeddings(
  texts: string[],
  config: EmbeddingConfig
): Promise<EmbeddingResult> {
  if (!config.openaiApiKey) {
    throw new Error('OpenAI API key required for OpenAI embeddings');
  }

  const client = new OpenAI({ apiKey: config.openaiApiKey });

  const response = await client.embeddings.create({
    model: config.model,
    input: texts,
  });

  const embeddings = response.data.map((item) => item.embedding);

  return {
    embeddings,
    model: config.model,
    dimensions: EMBEDDING_DIMENSIONS[config.model] || 1536,
    tokenCount: response.usage?.total_tokens,
  };
}

/**
 * Generate embeddings via Ollama
 */
async function generateOllamaEmbeddings(
  texts: string[],
  config: EmbeddingConfig
): Promise<EmbeddingResult> {
  const baseUrl = config.ollamaBaseUrl || 'http://localhost:11434';
  const embeddings: number[][] = [];

  // Ollama doesn't support batch embedding, so we process one at a time
  for (const text of texts) {
    const response = await fetch(`${baseUrl}/api/embeddings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: config.model,
        prompt: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama embedding failed: ${response.status}`);
    }

    const data = (await response.json()) as { embedding: number[] };
    embeddings.push(data.embedding);
  }

  return {
    embeddings,
    model: config.model,
    dimensions: EMBEDDING_DIMENSIONS[config.model] || 768,
  };
}

/**
 * Check if Ollama is available
 */
export async function isOllamaAvailable(baseUrl?: string): Promise<boolean> {
  const url = baseUrl || process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

  try {
    const response = await fetch(`${url}/api/tags`, {
      method: 'GET',
      signal: AbortSignal.timeout(2000),
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Format embedding as pgvector-compatible string
 */
export function embeddingToVector(embedding: number[]): string {
  return `[${embedding.join(',')}]`;
}

/**
 * Pad or truncate embedding to target dimensions (for model compatibility)
 */
export function normalizeEmbedding(embedding: number[], targetDims: number): number[] {
  if (embedding.length === targetDims) {
    return embedding;
  }

  if (embedding.length > targetDims) {
    return embedding.slice(0, targetDims);
  }

  // Pad with zeros
  const padded = [...embedding];
  while (padded.length < targetDims) {
    padded.push(0);
  }
  return padded;
}
