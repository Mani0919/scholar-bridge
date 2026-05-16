import { ContactForm } from "@/components/sections/ContactForm";
import { site, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact The Paper Publications | PhD & Research Services India",
  description:
    "Contact The Paper Publications for PhD thesis writing, paper publication, R&D projects, EB-1A visa services, and PhD admissions. Call +91 85198 54871 or WhatsApp now!",
  path: "/contact"
});

const faqs = [
  ["How quickly do you respond?", "We typically respond within 2-4 hours during business hours. WhatsApp queries are answered within 1 hour."],
  ["Do you work with all universities?", "Yes, we support PhD scholars from UGC-approved Indian universities and 50+ international universities."],
  ["Is your content plagiarism-free?", "Yes. We use multi-layer plagiarism checks and focus on original, properly cited academic writing."],
  ["Can you help with urgent deadlines?", "Yes, express delivery is available for thesis chapters, paper revisions, and synopsis writing."],
  ["Do you offer free consultation?", "Yes. Fill the contact form or WhatsApp us for a free initial consultation."],
  ["What is your payment process?", "We offer milestone-based payment plans through bank transfer or UPI."],
  ["Do you support EB-1A visa applicants?", "Yes, dedicated EB-1A case specialists support profile building and petition documentation."],
  ["Do you handle international PhD admissions?", "Yes, including university shortlisting, SOP, LOR, proposal, and visa guidance."]
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Contact
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Contact Us - Get Free Consultation for PhD & Research Services
          </h1>
          <p className="text-sm text-slate-600">
            Call or WhatsApp {site.phone}, email {site.email}, or submit your
            requirements below for a free consultation.
          </p>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <ContactForm />
      </section>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <h2 className="text-3xl font-semibold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <article key={question} className="rounded-[8px] bg-white p-5 shadow-soft">
              <h3 className="font-semibold text-slate-900">{question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
