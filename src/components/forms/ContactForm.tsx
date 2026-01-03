"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  role: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  companySize: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please provide more detail"),
});

type FormData = z.infer<typeof schema>;

const roles = [
  { value: "", label: "Select your role..." },
  { value: "revops", label: "RevOps / Sales Ops" },
  { value: "cro", label: "CRO / VP Sales" },
  { value: "finance", label: "Finance / FP&A" },
  { value: "comp-admin", label: "Comp Admin / ICM Owner" },
  { value: "consultant", label: "Consultant / Partner" },
  { value: "other", label: "Other" },
];

const inquiryTypes = [
  { value: "", label: "What can I help with?" },
  { value: "plan-intelligence-audit", label: "Plan Intelligence Audit" },
  { value: "shadow-accounting-setup", label: "Shadow Accounting Setup" },
  { value: "comp-plan-redesign", label: "Comp Plan Redesign" },
  { value: "spm-operating-model", label: "SPM Operating Model" },
  { value: "speaking", label: "Speaking / Keynote" },
  { value: "quick-question", label: "Quick Question" },
  { value: "other", label: "Something Else" },
];

const companySizes = [
  { value: "", label: "Number of reps..." },
  { value: "<50", label: "Less than 50" },
  { value: "50-200", label: "50-200" },
  { value: "200-500", label: "200-500" },
  { value: "500-1000", label: "500-1,000" },
  { value: "1000+", label: "1,000+" },
];

const timelines = [
  { value: "", label: "When do you need this?" },
  { value: "asap", label: "ASAP" },
  { value: "this-quarter", label: "This quarter" },
  { value: "next-quarter", label: "Next quarter" },
  { value: "exploring", label: "Just exploring" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        const json = await res.json();
        setErrorMessage(json.error || "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Failed to submit. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] rounded-xl text-center">
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
          Message received.
        </h3>
        <p className="text-[var(--text-secondary)] mb-6">
          I&apos;ll respond within 2 business days. In the meantime:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/tools/plan-smell-test" variant="secondary">
            Take the Plan Smell Test
          </Button>
          <Button href="/media/podcast" variant="ghost">
            Listen to the Podcast
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            Name *
          </label>
          <input
            {...register("name")}
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-[var(--error)]">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-[var(--error)]">{errors.email.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            Company
          </label>
          <input
            {...register("company")}
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
            placeholder="Your company"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            Role
          </label>
          <select
            {...register("role")}
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
          >
            {roles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            Inquiry Type *
          </label>
          <select
            {...register("inquiryType")}
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
          >
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.inquiryType && (
            <p className="mt-1 text-sm text-[var(--error)]">{errors.inquiryType.message}</p>
          )}
        </div>

        {/* Company Size */}
        <div>
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            Company Size (# of reps)
          </label>
          <select
            {...register("companySize")}
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
          >
            {companySizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
          Timeline
        </label>
        <select
          {...register("timeline")}
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
        >
          {timelines.map((timeline) => (
            <option key={timeline.value} value={timeline.value}>
              {timeline.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
          Message *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--bg-hover)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none resize-none"
          placeholder="Tell me about your situation..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-[var(--error)]">{errors.message.message}</p>
        )}
      </div>

      {errorMessage && (
        <p className="text-sm text-[var(--error)]">{errorMessage}</p>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
