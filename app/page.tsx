import Link from "next/link";
import { Award, BookOpen, CheckCircle, FileText, Globe2, Lightbulb, Plane, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { FeatureVideo } from "@/components/ui/FeatureVideo";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title:
    "The Paper Publications | PhD Research, Publication & EB-1A Visa Services in India",
  description:
    "Expert PhD thesis writing, Scopus paper publication, R&D projects, PhD admissions (India & Abroad), and EB-1A visa services. 1000+ R&D clients. 10+ years' experience. Get free consultation today!",
  path: "/",
  keywords: [
    "PhD thesis writing services",
    "paper publication support",
    "EB-1A visa India",
    "PhD admissions abroad",
    "R&D project assistance"
  ]
});

const services = [
  {
    title: "PhD Thesis Writing",
    href: "/phd-services",
    icon: BookOpen,
    description: "Chapter-wise thesis, synopsis, proposal, and editing support."
  },
  {
    title: "Paper Publication - Scopus / SCI / IEEE",
    href: "/phd-services#publication",
    icon: FileText,
    description: "Journal selection, manuscript preparation, submission, and revisions."
  },
  {
    title: "R&D Projects",
    href: "/rd-projects",
    icon: Lightbulb,
    description: "Project design, prototype development, data analysis, and publication."
  },
  {
    title: "PhD Admissions India & Abroad",
    href: "/phd-admissions",
    icon: Globe2,
    description: "State-wise and country-wise PhD admission guidance."
  },
  {
    title: "EB-1A Visa Services",
    href: "/eb1a",
    icon: Award,
    badge: "New",
    description: "Research profile audit, evidence planning, and petition support."
  },
  {
    title: "Abroad PhD Admissions",
    href: "/abroad-admissions#application-form",
    icon: Plane,
    badge: "Highlighted",
    description: "SOP, LOR, university shortlisting, scholarships, and visa support."
  }
];

const reasons = [
  "1000+ R&D Clients served across India",
  "500+ PhD scholars guided to completion",
  "95% success rate across all services",
  "Expert team of PhD holders from top universities",
  "End-to-end support from topic selection to publication",
  "EB-1A visa consultation with proven track record"
];

export default function HomePage() {
  return (
    <div>
      <section className="home-hero-gradient relative overflow-hidden px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16">
        <div className="home-sheen pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
        <div className="relative grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-5xl space-y-6">
            <p className="home-reveal text-xs font-semibold uppercase tracking-[0.25em] text-primary-200">
              PhD Research Support, Publication & EB-1A Visa Services - 10+ Years Experience
            </p>
            <h1 className="home-reveal home-reveal-delay-1 text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Your Trusted Partner for PhD Research, Publications & Global Academic Success
            </h1>
            <p className="home-reveal home-reveal-delay-2 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
              Expert guidance for 1000+ R&D clients and 500+ PhD scholars. 10+
              years of excellence.
            </p>
            <div className="home-reveal home-reveal-delay-3 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-[8px] bg-primary-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary-950/30 transition-all hover:-translate-y-0.5 hover:bg-primary-600"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/phd-services"
                className="rounded-[8px] border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="home-reveal home-reveal-delay-2 rounded-[8px] border border-white/12 bg-white/8 p-5 shadow-2xl backdrop-blur-md sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["1000+", "R&D Clients"],
                ["500+", "PhD Scholars"],
                ["95%", "Success Rate"],
                ["10+", "Years Experience"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-[8px] border border-white/10 bg-slate-950/34 p-5">
                  <p className="text-3xl font-bold text-primary-300">{value}</p>
                  <p className="mt-2 text-sm font-medium text-white/78">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-[8px] bg-primary-500 p-4 text-white">
              <ShieldCheck className="mt-0.5 shrink-0" size={20} />
              <p className="text-sm font-semibold leading-6">
                End-to-end support from topic selection to publication, admissions, and EB-1A profile building.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StatsBanner />

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[8px] border border-slate-200 bg-slate-50 p-5 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
          <FeatureVideo
            src="/videos/paper-publications.mp4"
            label="The Paper Publications research and writing overview"
          />
          <div className="space-y-4 lg:pl-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
              Research to Publication
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Turn your research into publication-ready work
            </h2>
            <p className="text-sm leading-7 text-slate-600">
              Work with experienced academic specialists through planning,
              writing, analysis, journal selection, submission, and revisions.
            </p>
            <Link
              href="/phd-services"
              className="inline-flex rounded-[8px] bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              See How We Support You
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Services
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Comprehensive Academic Services
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.href}>
                <Card className="h-full border border-slate-200 transition-transform hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-primary-50 text-primary-700">
                      <Icon size={20} />
                    </span>
                    {service.badge && (
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Why Choose The Paper Publications
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-3 rounded-[8px] bg-white p-4">
                <CheckCircle className="mt-0.5 shrink-0 text-primary-600" size={18} />
                <p className="text-sm text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </div>
  );
}
