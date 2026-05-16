import Link from "next/link";
import { site, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Thank You | The Paper Publications",
  description:
    "Thank you for contacting The Paper Publications. Our team will contact you within 2-4 hours.",
  path: "/thank-you"
});

export default function ThankYouPage() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl rounded-[8px] border border-slate-200 bg-white p-8 text-center shadow-soft">
        <h1 className="text-4xl font-semibold text-slate-900">Thank you!</h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          We have received your inquiry. Our team will contact you within 2-4
          hours. WhatsApp us at {site.phone} for faster response.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="rounded-[8px] bg-primary-600 px-5 py-3 text-sm font-semibold text-white">
            Back to Home
          </Link>
          <a href={site.whatsapp} className="rounded-[8px] bg-[#25D366] px-5 py-3 text-sm font-semibold text-white">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
