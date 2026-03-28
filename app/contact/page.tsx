import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Contact
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Let’s craft your academic roadmap
          </h1>
          <p className="text-sm text-slate-600">
            Share your project details and our consultants will respond within 24 hours.
          </p>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <ContactForm />
      </section>
    </div>
  );
}
