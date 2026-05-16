import { AdmissionsSelector } from "./selector";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title:
    "PhD Admissions in India & Abroad - State-wise & Country-wise Guidance | The Paper Publications",
  description:
    "Get expert PhD admission guidance for all Indian states and 50+ countries abroad. SOP writing, LOR, university shortlisting, visa support. Apply now!",
  path: "/phd-admissions",
  keywords: [
    "PhD admission India",
    "PhD abroad admission",
    "PhD admission Telangana",
    "PhD admission UK",
    "PhD admission USA",
    "SOP writing for PhD"
  ]
});

export default function PhdAdmissionsPage() {
  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-4xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            PhD Admissions
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            PhD Admissions - India (All States) & Abroad (All Countries)
          </h1>
          <p className="text-sm leading-6 text-slate-600">
            Getting into a PhD program requires careful planning, a strong
            research proposal, compelling SOP, and the right university fit. We
            guide scholars across all Indian states and 50+ countries worldwide.
          </p>
        </div>
      </section>
      <AdmissionsSelector />
    </div>
  );
}
