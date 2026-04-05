import Link from "next/link";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Services
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Complete academic services for every milestone
          </h1>
          <p className="text-sm text-slate-600">
            Explore our premium academic services designed for research success,
            publication impact, and global admissions outcomes.
          </p>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-2xl bg-gradient-to-br from-primary-200/50 via-accent-200/30 to-primary-100/40 p-[1px] transition-transform duration-300 hover:-translate-y-1"
            >
              <Card className="h-full border border-slate-100/80 bg-white">
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-primary-600">
                  View details
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}
