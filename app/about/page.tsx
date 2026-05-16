import { Card } from "@/components/ui/Card";

const highlights = [
  {
    icon: "/svgs/2.svg",
    title: "Academic Integrity",
    description:
      "Every project is reviewed for originality, citation accuracy, and ethical compliance."
  },
  {
    icon: "/svgs/3.svg",
    title: "Specialist Teams",
    description:
      "Subject-matter experts, editors, and publication strategists collaborate on each milestone."
  },
  {
    icon: "/svgs/4.svg",
    title: "Global Coverage",
    description:
      "We support researchers across the US, UK, EU, and APAC with regional compliance."
  }
];

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
              About Us
            </p>
            <h1 className="text-4xl font-semibold text-slate-900">
              Academic excellence with a premium service model
            </h1>
            <p className="text-sm text-slate-600">
              The Paper Publications partners with universities, labs, and individual researchers
              to elevate academic output. Our process blends strategic planning, deep
              subject expertise, and meticulous editing.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-[8px] bg-gradient-to-br from-primary-100 via-white to-slate-100" />
            <img
              src="/svgs/1.svg"
              alt="Abstract academic illustration"
              className="h-auto w-full rounded-[8px] p-6"
              style={{
                borderRadius:10
              }}
            />
          </div>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="h-full">
        
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
