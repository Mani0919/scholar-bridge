import { LeadForm } from "@/components/sections/LeadForm";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "EB-1A Visa Services India - Extraordinary Ability Green Card | The Paper Publications",
  description:
    "Expert EB-1A visa (Extraordinary Ability) filing support from India. Research profile building, citation analysis, award documentation, USCIS petition writing. Proven track record. Apply now!",
  path: "/eb1a",
  keywords: [
    "EB-1A visa India",
    "extraordinary ability green card",
    "EB-1A petition writing",
    "EB-1A for researchers",
    "O-1 visa India",
    "US green card for academics"
  ]
});

const criteria = [
  "Major awards or prizes in your field",
  "Membership in associations requiring outstanding achievement",
  "Published material about you and your work",
  "Judge of others' work in your field",
  "Original scholarly or business contributions of major significance",
  "Authorship of scholarly articles in professional journals",
  "Artistic or commercial exhibitions / showcases",
  "Critical or essential role in distinguished organizations",
  "High salary relative to others in your field",
  "Commercial success in performing arts"
];

const fields = [
  { name: "name", label: "Full Name", required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel" as const },
  { name: "designation", label: "Current Designation / Institution" },
  { name: "researchArea", label: "Research Domain" },
  { name: "publications", label: "Number of Publications" },
  { name: "citations", label: "h-index / Citation Count" },
  { name: "awards", label: "Awards or Recognition" },
  { name: "message", label: "Message / Query", type: "textarea" as const }
];

export default function Eb1aPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-primary-800 px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="max-w-4xl space-y-5">
          <h1 className="text-4xl font-semibold">
            EB-1A Visa Services - Extraordinary Ability Green Card for Researchers & PhD Scholars
          </h1>
          <p className="text-white/80">
            The EB-1A is a US green card category for individuals with extraordinary
            ability in sciences, arts, education, business, or athletics. We help
            researchers build evidence, analyze citations, document awards, and
            coordinate USCIS-ready narratives with immigration counsel.
          </p>
          <a href="#consultation-form" className="inline-flex rounded-[8px] bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600">
            Get Free Profile Evaluation
          </a>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Why The Paper Publications for EB-1A?
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>Research profile audit - citation analysis, h-index, i10-index, publication impact</li>
              <li>Documentation support - award letters, invitation letters, peer review evidence</li>
              <li>USCIS petition writing - professional immigration-aligned narratives</li>
              <li>Full coordination with your US immigration attorney</li>
              <li>Track record of successful EB-1A approvals from India</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              EB-1A Eligibility Criteria We Help Build
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {criteria.map((item, index) => (
                <div key={item} className="rounded-[8px] border border-slate-200 p-4 text-sm text-slate-700">
                  <span className="font-semibold text-primary-700">Criterion {index + 1}: </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <h2 className="text-2xl font-semibold text-slate-900">EB-1A for Indian Researchers</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
          The EB-1A visa is a fast route to a US green card for researchers, PhD
          scholars, scientists, and academics from India. Unlike the EB-2 NIW,
          EB-1A requires no PERM labor certification and can offer priority date advantages.
        </p>
      </section>
      <section id="consultation-form" className="px-6 py-16 sm:px-10 lg:px-16">
        <LeadForm formType="EB-1A Visa Services" fields={fields} submitLabel="Submit" />
      </section>
    </div>
  );
}
