import { LeadForm } from "@/components/sections/LeadForm";
import { FeatureVideo } from "@/components/ui/FeatureVideo";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title:
    "R&D Project Assistance in India | Research & Development Support | The Paper Publications",
  description:
    "End-to-end R&D project support: design, prototype, data analysis, innovation consulting & publication. 1000+ R&D clients served. 10+ years experience.",
  path: "/rd-projects",
  keywords: [
    "R&D project assistance India",
    "research and development projects",
    "prototype development",
    "data analysis service",
    "innovation consulting"
  ]
});

const services = [
  ["Project Design & Feasibility", "Our R&D experts design innovative, feasible project models from scratch and assess technical feasibility, resources, and academic alignment."],
  ["Prototype Development", "We build functional prototypes for IoT devices, software applications, mechanical systems, and research proof of concept."],
  ["Data Analysis & Modeling", "Advanced statistical analysis, machine learning modeling, simulation, and visualization using SPSS, MATLAB, Python, R, and more."],
  ["Innovation Consulting", "We help scholars and businesses transform research ideas into scalable solutions with technical expertise and commercialization guidance."],
  ["Industry Collaboration", "We connect academics with industry partners for joint R&D projects, internships, sponsored research, and practical validation."],
  ["Publication Assistance", "After your R&D project, we help publish findings in Scopus, SCI, or IEEE indexed journals."]
];

const fields = [
  { name: "name", label: "Full Name", required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel" as const },
  { name: "researchArea", label: "Research Domain / Project Area" },
  { name: "message", label: "Project Requirements", type: "textarea" as const }
];

export default function RdProjectsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-primary-800 px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold">
              End-to-End R&D Project Support - Trusted by 1000+ Clients
            </h1>
            <p className="text-white/80">
              From project design to prototype development, data analysis, and
              publication - we support every stage of your research and development journey.
            </p>
            <a href="#consultation-form" className="inline-flex rounded-[8px] bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600">
              Start Your R&D Project
            </a>
          </div>
          <FeatureVideo
            src="/videos/research-project-planning.mp4"
            label="Research project planning and data analysis"
            className="ring-1 ring-white/15"
          />
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(([title, text]) => (
            <article key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              <a href="#consultation-form" className="mt-5 inline-flex text-sm font-semibold text-primary-700">
                Fill the Form
              </a>
            </article>
          ))}
        </div>
      </section>
      <section id="consultation-form" className="px-6 pb-16 sm:px-10 lg:px-16">
        <LeadForm formType="R&D Projects" fields={fields} submitLabel="Submit" />
      </section>
    </div>
  );
}
