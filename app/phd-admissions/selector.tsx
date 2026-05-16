"use client";

import { useRef, useState } from "react";
import { LeadForm } from "@/components/sections/LeadForm";

const states = [
  "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra",
  "Delhi", "Gujarat", "Rajasthan", "Uttar Pradesh", "Bihar", "West Bengal",
  "Madhya Pradesh", "Punjab", "Haryana", "Kerala", "Odisha", "Assam",
  "Jharkhand", "Chhattisgarh", "Uttarakhand", "Himachal Pradesh", "Goa",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura",
  "Arunachal Pradesh", "J&K", "Ladakh", "Puducherry", "Chandigarh",
  "Andaman & Nicobar", "Lakshadweep", "Dadra & Nagar Haveli", "Daman & Diu"
];

const countries = [
  "USA", "UK", "Canada", "Australia", "Germany", "France", "Netherlands",
  "Sweden", "Switzerland", "Singapore", "Japan", "South Korea", "New Zealand",
  "Ireland", "Norway", "Denmark", "Finland", "Belgium", "Austria", "Italy",
  "Spain", "Portugal", "UAE", "Qatar", "Saudi Arabia", "Malaysia", "Hong Kong",
  "China", "Russia", "South Africa", "Brazil", "Mexico"
];

export function AdmissionsSelector() {
  const [selection, setSelection] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  function choose(value: string) {
    setSelection(value);
    window.setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }

  const fields = [
    { name: "name", label: "Full Name", required: true },
    { name: "email", label: "Email Address", type: "email" as const, required: true },
    { name: "phone", label: "Phone / WhatsApp", type: "tel" as const },
    { name: "selectedLocation", label: "Selected State / Country", defaultValue: selection },
    { name: "university", label: "Preferred University (if any)" },
    { name: "researchArea", label: "Research Domain / Subject" },
    { name: "qualification", label: "Current Qualification" },
    { name: "message", label: "Message / Query", type: "textarea" as const }
  ];

  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900">India - All States</h2>
          <div className="mt-4 max-h-80 overflow-y-auto rounded-[8px] border border-slate-100">
            {states.map((state) => (
              <button key={state} type="button" onClick={() => choose(state)} className="block w-full border-b border-slate-100 px-4 py-3 text-left text-sm text-slate-700 hover:bg-primary-50">
                {state}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900">Abroad Countries</h2>
          <div className="mt-4 max-h-80 overflow-y-auto rounded-[8px] border border-slate-100">
            {countries.map((country) => (
              <button key={country} type="button" onClick={() => choose(country)} className="block w-full border-b border-slate-100 px-4 py-3 text-left text-sm text-slate-700 hover:bg-primary-50">
                {country}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div ref={formRef} id="consultation-form" className="mt-10">
        <LeadForm
          key={selection}
          formType="PhD Admissions"
          fields={fields}
          submitLabel="Submit"
        />
      </div>
    </section>
  );
}
