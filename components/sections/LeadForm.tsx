"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "textarea";
  required?: boolean;
  defaultValue?: string;
};

export function LeadForm({
  formType,
  fields,
  submitLabel = "Submit"
}: {
  formType: string;
  fields: Field[];
  submitLabel?: string;
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setLoading(true);
    setError(null);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, ...payload })
      });
      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit form.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[8px] border border-slate-200 bg-white p-5 shadow-soft"
    >
      <h2 className="text-xl font-semibold text-slate-900">
        Fill the Form - Get Free Consultation
      </h2>
      <input type="hidden" name="service" value={formType} />
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => {
          const commonClasses =
            "w-full rounded-[8px] border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none";
          return (
            <label
              key={field.name}
              className={
                field.type === "textarea"
                  ? "grid gap-2 text-sm font-medium text-slate-700 md:col-span-2"
                  : "grid gap-2 text-sm font-medium text-slate-700"
              }
            >
              {field.label}
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  rows={4}
                  required={field.required}
                  defaultValue={field.defaultValue}
                  className={commonClasses}
                />
              ) : (
                <input
                  name={field.name}
                  type={field.type || "text"}
                  required={field.required}
                  defaultValue={field.defaultValue}
                  className={commonClasses}
                />
              )}
            </label>
          );
        })}
      </div>
      {error && <p className="text-sm font-medium text-red-600">{error}</p>}
      <Button type="submit" disabled={loading} className="w-full sm:w-fit">
        {loading ? "Submitting..." : submitLabel}
      </Button>
    </form>
  );
}
