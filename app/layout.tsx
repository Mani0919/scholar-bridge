import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
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
  verification: {
    other: {
      "facebook-domain-verification": "4i80zpopcanx9qh6jx810lepye9neo"
    }
  },
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6PSN829');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6PSN829"
            height="0"
            width="0"
            className="hidden invisible"
            title="Google Tag Manager"
          />
        </noscript>
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
