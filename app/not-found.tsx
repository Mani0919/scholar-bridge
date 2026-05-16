import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="max-w-2xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
          404
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          We couldn't find that page
        </h1>
        <p className="text-sm text-slate-600">
          The page you are looking for may have moved. Browse our services or
          return to the homepage.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Go Home</ButtonLink>
          <ButtonLink href="/phd-services" variant="outline">
            View Services
          </ButtonLink>
        </div>
        <Link href="/contact" className="text-sm font-semibold text-primary-600">
          Contact support
        </Link>
      </div>
    </section>
  );
}
