import { CheckCircle } from "lucide-react";
import { LeadForm } from "@/components/sections/LeadForm";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { FeatureVideo } from "@/components/ui/FeatureVideo";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title:
    "PhD Services in India - Thesis, Publication & Research Support | The Paper Publications",
  description:
    "Complete PhD services: thesis writing, Scopus paper publication, synopsis, proofreading & more. 500+ PhD scholars guided. Expert team. Get started today!",
  path: "/phd-services",
  keywords: [
    "PhD thesis writing India",
    "Scopus paper publication",
    "research paper writing service",
    "PhD synopsis writing",
    "PhD editing proofreading"
  ]
});

const services = [
  {
    title: "Expert Guidance on Topic Selection",
    text: "Choosing the right PhD research topic is the foundation of your doctoral journey. Our advisors help identify an original, feasible research gap aligned with your academic goals.",
    cta: "Choose Your Research Topic - Get Expert Guidance"
  },
  {
    title: "Problem Statement / Proposal Writing",
    text: "We craft proposals that define your problem statement, research objectives, methodology, and expected outcomes for university approval.",
    cta: "Get Your Research Proposal Written by Experts"
  },
  {
    title: "Review of Literature (RoL)",
    text: "Our literature review service covers Google Scholar, Scopus, Web of Science, and IEEE Xplore, synthesizing papers into a structured review.",
    cta: "Get a Comprehensive Literature Review"
  },
  {
    title: "Code / Implementation",
    text: "From MATLAB simulations to Python ML models and VLSI designs, our technical team supports algorithm development and prototype testing.",
    cta: "Get Technical Implementation Support"
  },
  {
    title: "Paper Publication - Scopus / SCI / IEEE",
    text: "We handle manuscript writing, formatting, journal selection, submission, and revision responses for indexed journals.",
    cta: "Publish in Scopus / SCI / IEEE - Get Started Today",
    id: "publication"
  },
  {
    title: "PhD Thesis Writing",
    text: "End-to-end thesis writing across Introduction, Literature Review, Methodology, Results, Discussion, Conclusion, and References.",
    cta: "Get Your Complete PhD Thesis Written"
  },
  {
    title: "Synopsis Writing",
    text: "We create comprehensive, university-format synopses that outline your research and justify its significance.",
    cta: "Get Expert Synopsis Writing"
  },
  {
    title: "Editing, Formatting & Proofreading",
    text: "Academic editing for language, citations, manuscript structure, plagiarism reduction, and journal or university formatting.",
    cta: "Get Expert Editing & Proofreading"
  }
];

const fields = [
  { name: "name", label: "Full Name", required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone Number", type: "tel" as const },
  { name: "researchArea", label: "Research Domain / Subject" },
  { name: "stage", label: "Current Stage (New / Ongoing)" },
  { name: "message", label: "Message / Query", type: "textarea" as const }
];

export default function PhdServicesPage() {
  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
              PhD Services
            </p>
            <h1 className="text-4xl font-semibold text-slate-900">
              Expert PhD Services - Thesis Writing, Publication & Research Support
            </h1>
            <p className="text-sm leading-6 text-slate-600">
              Complete PhD support from topic selection and proposal writing to
              Scopus publication, thesis writing, editing, formatting, and proofreading.
            </p>
            <a
              href="#consultation-form"
              className="inline-flex rounded-[8px] bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600"
            >
              Get Free Consultation
            </a>
          </div>
          <FeatureVideo
            src="/videos/expert-paper-writing.mp4"
            label="Expert academic paper writing support"
          />
        </div>
      </section>
      <StatsBanner />
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              id={service.id}
              className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              <a
                href="#consultation-form"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700"
              >
                <CheckCircle size={16} />
                {service.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
      <section id="consultation-form" className="px-6 pb-16 sm:px-10 lg:px-16">
        <LeadForm formType="PhD Services" fields={fields} submitLabel="Submit" />
      </section>
    </div>
  );
}
