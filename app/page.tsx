import { Hero } from "@/components/sections/Hero";
import { ImageCarousel } from "@/components/sections/ImageCarousel";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Card } from "@/components/ui/Card";

const reasons = [
  {
    title: "Expert Researchers",
    description: "PhD-level writers and editors across 60+ disciplines."
  },
  {
    title: "High Acceptance Rate",
    description: "Submission-ready manuscripts with journal-aligned formatting."
  },
  {
    title: "Plagiarism-Free Content",
    description: "Multi-layer originality checks and ethical paraphrasing."
  },
  {
    title: "Fast Delivery",
    description: "Dedicated project managers and guaranteed turnaround timelines."
  }
];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ImageCarousel />
      <ServicesPreview />
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Academic outcomes you can trust
          </h2>
          <p className="max-w-2xl text-sm text-slate-600">
            We combine domain expertise, research integrity, and publishing insight
            to help you deliver confident academic results.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <Card key={reason.title} className="h-full">
              <h3 className="text-lg font-semibold text-slate-900">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{reason.description}</p>
            </Card>
          ))}
        </div>
      </section>
      <Testimonials />
      <BlogPreview />
      <CTA />
    </div>
  );
}
