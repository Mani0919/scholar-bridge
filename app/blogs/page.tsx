import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Blog | The Paper Publications",
  description:
    "SEO guides for PhD thesis writing, Scopus paper publication, EB-1A visa, R&D projects, and abroad PhD admissions.",
  path: "/blogs"
});

export default function BlogsPage() {
  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Blogs
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Academic insights and publishing guidance
          </h1>
          <p className="text-sm text-slate-600">
            Stay updated with tips on academic writing, publication strategies, and
            global admission trends.
          </p>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
              <Card className="h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                  {blog.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {blog.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {blog.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-primary-600">
                  Read more
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
