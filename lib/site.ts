export const site = {
  name: "The Paper Publications",
  url: "https://www.thepaperpublications.com",
  phone: "+91 85198 54871",
  phoneHref: "tel:+918519854871",
  email: "researchpublication381@gmail.com",
  whatsapp: "https://wa.me/918519854871"
};

export const stats = [
  { value: "500+", label: "PhD Students Guided" },
  { value: "15+", label: "Academic Domains" },
  { value: "95%", label: "Success Rate" },
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "R&D Clients" }
];

export function pageMetadata({
  title,
  description,
  path,
  keywords = []
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: site.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"]
    }
  };
}
