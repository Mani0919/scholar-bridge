import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return { title: service.title, description: service.description };
}

export default function ServiceDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Service Detail
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">{service.title}</h1>
          <p className="text-sm text-slate-600">{service.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request Consultation</ButtonLink>
            <ButtonLink href="/services" variant="outline">
              View All Services
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <h2 className="text-2xl font-semibold text-slate-900">Process</h2>
            <ol className="mt-6 space-y-3 text-sm text-slate-600">
              {service.process.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className=" h-6 w-6 pt-1 rounded-full bg-primary-100 text-center text-xs font-semibold text-primary-700">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-slate-900">Benefits</h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
      <section className="px-6 pb-16 sm:px-10 lg:px-16">
        <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Ready to begin your {service.title.toLowerCase()} project?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Share your requirements and receive a tailored plan within 24 hours.
            </p>
          </div>
          <ButtonLink href="/contact">Get a Proposal</ButtonLink>
        </Card>
      </section>
    </div>
  );
}
