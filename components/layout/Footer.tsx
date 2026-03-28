import Link from "next/link";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50 px-6 py-12 sm:px-10 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-lg font-semibold text-slate-900">ScholarBridge</div>
          <p className="text-sm text-slate-600">
            Premium academic services for researchers, scholars, and institutions.
            We combine human expertise with rigorous quality checks for global
            publication success.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Quick Links</p>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>support@scholarbridge.com</p>
            <p>+1 (315) 555-0182</p>
            <p>Global delivery with 24/7 academic coordination.</p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-xs text-slate-500">
        © {new Date().getFullYear()} ScholarBridge Academic Services. All rights reserved.
      </div>
    </footer>
  );
}
