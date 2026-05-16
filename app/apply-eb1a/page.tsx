import { VisaApplication } from "./visa-application";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Apply for EB-1A, EB-2 NIW, O-1 & H-1B Visa Services | The Paper Publications",
  description:
    "Apply for US immigration visa services: EB-1A Extraordinary Ability, EB-2 NIW, O-1 Visa, H-1B Visa. Expert petition support for Indian researchers & PhD scholars.",
  path: "/apply-eb1a",
  keywords: [
    "EB-1A visa application India",
    "EB-2 NIW India",
    "O-1 visa for researchers",
    "H-1B visa petition",
    "US visa for Indian PhD scholars"
  ]
});

export default function ApplyEb1aPage() {
  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-4xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            US Visa Services
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Apply for US Visa Services - EB-1A, EB-2 NIW, O-1 & H-1B for Researchers
          </h1>
          <p className="text-sm leading-6 text-slate-600">
            Select a visa type to see the relevant service details and submit a
            dedicated consultation request.
          </p>
        </div>
      </section>
      <VisaApplication />
    </div>
  );
}
