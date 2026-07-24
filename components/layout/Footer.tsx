import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/phd-services", label: "PhD Services" },
  { href: "/rd-projects", label: "R&D Projects" },
  { href: "/phd-admissions", label: "PhD Admissions" },
  { href: "/eb1a", label: "EB-1A" },
  { href: "/contact", label: "Contact" },
  { href: "/blogs", label: "Blogs" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50 px-6 py-12 sm:px-10 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Link
            href="/"
            aria-label="The Paper Publications home"
            className="inline-block"
          >
            <Image
              src="/brand/the-paper-publications-logo.png"
              alt="The Paper Publications"
              width={1000}
              height={632}
              className="h-auto w-44"
            />
          </Link>
          <p className="text-sm text-slate-600">
            PhD research, publication, R&D project, admission, and EB-1A visa
            support for scholars and researchers across India and abroad.
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
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-primary-600">
                {site.email}
              </a>
            </p>
            <p>
              <a href={site.phoneHref} className="hover:text-primary-600">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={site.whatsapp} className="hover:text-primary-600">
                WhatsApp consultation
              </a>
            </p>
            <div className="flex gap-3 pt-2 text-slate-500">
              <a href="#" aria-label="LinkedIn" className="hover:text-primary-600">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-primary-600">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary-600">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-xs text-slate-500">
        © {new Date().getFullYear()} The Paper Publications Services. All rights reserved.
      </div>
    </footer>
  );
}
