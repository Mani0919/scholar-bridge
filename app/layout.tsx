import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: {
    default:
      "The Paper Publications | PhD Research, Publication & EB-1A Visa Services in India",
    template: "%s | The Paper Publications"
  },
  description:
    "Expert PhD thesis writing, Scopus paper publication, R&D projects, PhD admissions, and EB-1A visa services. Get free consultation today!",
  keywords: [
    "research journals",
    "academic papers",
    "scholarly articles",
    "publish research paper",
    "peer-reviewed journals",
    "international journal publication",
    "research paper publication platform",
    "The Paper Publications"
  ],
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    title:
      "The Paper Publications | PhD Research, Publication & EB-1A Visa Services in India",
    description:
      "Publish and explore peer-reviewed research journals, academic papers, and scholarly articles.",
    url: site.url,
    siteName: "The Paper Publications",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Paper Publications | PhD Research, Publication & EB-1A Visa Services in India",
    description:
      "Publish and explore peer-reviewed research journals, academic papers, and scholarly articles."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen bg-white text-slate-900">
          <Navbar />
          <main>{children}</main>
          <WhatsAppFloat />
          <Footer />
        </div>
      </body>
    </html>
  );
}
