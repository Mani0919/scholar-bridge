import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { ButtonLink } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/site";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = blogs.find((item) => item.slug === params.slug);
  if (!blog) {
    return { title: "Blog Not Found" };
  }
  return pageMetadata({
    title: blog.title,
    description: blog.description,
    path: `/blogs/${blog.slug}`
  });
}

export default function BlogDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((item) => item.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            {blog.date}
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">{blog.title}</h1>
          <p className="text-sm text-slate-600">{blog.description}</p>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-6 text-sm text-slate-600">
          {blog.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="flex flex-wrap gap-3">
            {blog.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[8px] bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  "How do I start?",
                  "Can The Paper Publications help?",
                  "How fast do you respond?",
                  "Do you support Indian scholars?",
                  "Can I get a free consultation?"
                ].map((name) => ({
                  "@type": "Question",
                  name,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Contact The Paper Publications for a free consultation and a service-specific roadmap."
                  }
                }))
              })
            }}
          />
          <div className="rounded-[8px] border border-slate-100 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">
              Ready for publication support?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Speak with our academic consultants for a custom publication plan.
            </p>
            <div className="mt-4">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
