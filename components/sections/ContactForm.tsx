"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");
    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "Contact / Service Inquiry", name, email, phone, service, message })
      });

      if (!response.ok) {
        console.warn("Contact email failed, redirecting inquiry flow anyway.");
      }
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send message.");
    }
  }

  return (
    <Card className="mx-auto max-w-3xl w-full">
      <form className="grid gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Full Name
            <input
              type="text"
              placeholder="Your full name"
              name="name"
              required
              className="w-full rounded-[8px] border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Phone / WhatsApp Number
            <input
              type="tel"
              placeholder="+91 555 123 4567"
              name="phone"
              className="w-full rounded-[8px] border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              name="email"
              required
              className="w-full rounded-[8px] border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none"
            />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
            Service Required
          <select
            name="service"
            className="w-full rounded-[8px] border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none"
          >
            <option>Select a service</option>
            <option>PhD</option>
            <option>Publication</option>
            <option>R&D</option>
            <option>EB-1A</option>
            <option>Admissions</option>
            <option>Other</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Message
          <textarea
            rows={5}
            placeholder="Tell us about your requirements"
            name="message"
            required
            className="w-full rounded-[8px] border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none"
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" className="w-full sm:w-auto" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit Inquiry"}
          </Button>
          <AnimatePresence>
            {status === "success" && (
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="text-sm font-medium text-primary-600"
              >
                Thanks! Your inquiry has been sent.
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="text-sm font-medium text-red-600"
            >
              {error || "Unable to send message. Please try again."}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </Card>
  );
}
