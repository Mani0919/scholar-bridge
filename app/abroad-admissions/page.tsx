import { LeadForm } from "@/components/sections/LeadForm";
import { FeatureVideo } from "@/components/ui/FeatureVideo";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title:
    "Abroad PhD Admissions - USA, UK, Canada, Australia & More | The Paper Publications",
  description:
    "Expert guidance for PhD admissions in USA, UK, Canada, Australia, Germany & 50+ countries. SOP, LOR, university shortlisting, scholarship guidance, and visa support. Apply today!",
  path: "/abroad-admissions",
  keywords: [
    "PhD abroad admission",
    "PhD in USA from India",
    "PhD in UK for Indian students",
    "PhD scholarships abroad",
    "SOP writing for abroad PhD",
    "PhD admission Germany"
  ]
});

const fields = [
  { name: "name", label: "Full Name", required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel" as const },
  { name: "country", label: "Preferred Country for PhD" },
  { name: "university", label: "Preferred University (if any)" },
  { name: "researchArea", label: "Research Domain / Subject" },
  { name: "qualification", label: "Current Qualification & CGPA" },
  { name: "ielts", label: "IELTS / TOEFL Score" },
  { name: "gre", label: "GRE Score" },
  { name: "budget", label: "Budget Range for Abroad PhD" },
  { name: "message", label: "Message / Query", type: "textarea" as const }
];

const included = [
  "University shortlisting - top 10 matched universities per profile",
  "SOP writing - compelling and personalized",
  "LOR draft writing support",
  "Research proposal for admission",
  "Scholarship identification and application guidance",
  "Visa documentation checklist and support",
  "Pre-departure counselling and orientation"
];

export default function AbroadAdmissionsPage() {
  return (
    <div>
      <section className="bg-slate-50 px-6 py-10 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
              Abroad PhD Admissions
            </p>
            <h1 className="text-4xl font-semibold text-slate-900">
              Abroad PhD Admissions - Complete Guidance for International PhD Programs
            </h1>
            <p className="text-sm leading-6 text-slate-600">
              We help Indian scholars apply for PhD programs in the USA, UK,
              Canada, Australia, Germany, France, Singapore, and 50+ countries.
            </p>
            <FeatureVideo
              src="/videos/campus-sunrise.mp4"
              label="International university campus"
            />
          </div>
          <div id="application-form">
            <LeadForm
              formType="Abroad PhD Admissions"
              fields={fields}
              submitLabel="Apply for Abroad PhD Admissions"
            />
          </div>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Services Included</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {included.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Countries Covered</h2>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              USA | UK | Canada | Australia | Germany | France | Netherlands |
              Sweden | Switzerland | Singapore | Japan | South Korea | New
              Zealand | Ireland | Norway | Denmark | Finland | Belgium | Austria
              | Italy | Spain | UAE | and 30+ more.
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Getting a PhD abroad is a dream for thousands of Indian scholars.
              The Paper Publications is your end-to-end abroad PhD admission partner.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
