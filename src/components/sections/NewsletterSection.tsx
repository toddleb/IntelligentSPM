"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section background="secondary">
      <Container className="max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Get the weekly SPM reality check.
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Short. Sharp. Useful. No vendor fluff.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-[var(--bg-primary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
          />
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-[var(--accent)]">
            You&apos;re in! Check your inbox.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-[var(--error)]">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="mt-4 text-xs text-[var(--text-muted)]">
          You&apos;ll get frameworks, comp plan anti-patterns, and operating tips. Unsubscribe anytime.
        </p>
      </Container>
    </Section>
  );
}
