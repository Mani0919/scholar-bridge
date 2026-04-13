import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { services } from "@/data/services";

const baseUrl = "https://thepaperpublications.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/blogs", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date()
    })
  );

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date()
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date)
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
