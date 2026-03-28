import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

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
        <Card className="max-w-3xl">
          <form className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  type="text"
                  placeholder="Your full name"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Service Interested
              <select className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none">
                <option>Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                rows={5}
                placeholder="Tell us about your requirements"
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none"
              />
            </label>
            <Button type="submit" className="w-full sm:w-auto">
              Submit Inquiry
            </Button>
          </form>
        </Card>
      </section>
    </div>
  );
}
