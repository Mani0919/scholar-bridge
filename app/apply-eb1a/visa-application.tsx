"use client";

import { useState } from "react";
import { LeadForm } from "@/components/sections/LeadForm";

const visaServices = [
  {
    type: "EB-2 NIW",
    title: "EB-2 NIW (National Interest Waiver)",
    description:
      "The EB-2 NIW allows individuals with advanced degrees or exceptional ability to self-petition for a US green card if their work is in the national interest of the United States.",
    services:
      "NIW petition writing, research impact proofreading, employer letter drafting, USCIS filing checklist"
  },
  {
    type: "O-1",
    title: "O-1 Visa (Extraordinary Ability / Achievement)",
    description:
      "The O-1 visa is a temporary US work visa for individuals with extraordinary ability in sciences, education, business, arts, or athletics.",
    services:
      "O-1 petition building, evidence compilation, employer/agent letter support, RFE responses"
  },
  {
    type: "H-1B",
    title: "H-1B Visa",
    description:
      "The H-1B visa is a US work visa for specialty occupations requiring a bachelor's degree or higher.",
    services:
      "H-1B petition preparation, LCA guidance, cap registration strategy, employer letter drafting"
  },
  {
    type: "EB-1A",
    title: "EB-1A (Extraordinary Ability Green Card)",
    description:
      "The EB-1A green card requires no job offer and no employer sponsorship. It is a fast path to US permanent residency for extraordinary researchers and academics.",
    services:
      "Full EB-1A petition package, research profile audit, citation/award analysis, USCIS-ready narrative writing"
  }
];

export function VisaApplication() {
  const [selected, setSelected] = useState(visaServices[0]);
  const fields = [
    { name: "name", label: "Full Name", required: true },
    { name: "email", label: "Email Address", type: "email" as const, required: true },
    { name: "phone", label: "Phone / WhatsApp", type: "tel" as const },
    { name: "visaType", label: "Visa Type Required", defaultValue: selected.type },
    { name: "residence", label: "Current Country of Residence" },
    { name: "designation", label: "Current Designation / Institution" },
    { name: "researchArea", label: "Research Domain" },
    { name: "publications", label: "Number of Publications" },
    { name: "citations", label: "h-index / Citation Count" },
    { name: "awards", label: "Major Awards or Recognition" },
    { name: "currentStatus", label: "Current Visa / Immigration Status in US" },
    { name: "message", label: "Message / Additional Details", type: "textarea" as const }
  ];

  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-3">
          {visaServices.map((service) => (
            <button
              key={service.type}
              type="button"
              onClick={() => setSelected(service)}
              className={`block w-full rounded-[8px] border p-4 text-left transition-colors ${
                selected.type === service.type
                  ? "border-primary-500 bg-primary-50"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <span className="font-semibold text-slate-900">{service.title}</span>
            </button>
          ))}
        </div>
        <div className="space-y-6">
          <article className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-900">{selected.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{selected.description}</p>
            <p className="mt-4 text-sm text-slate-700">
              <span className="font-semibold">Services: </span>
              {selected.services}
            </p>
          </article>
          <LeadForm
            key={selected.type}
            formType={`Visa Services - ${selected.type}`}
            fields={fields}
            submitLabel={`Apply for ${selected.type} Services`}
          />
        </div>
      </div>
    </section>
  );
}
