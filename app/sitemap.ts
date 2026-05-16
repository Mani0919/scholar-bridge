import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

const baseUrl = "https://www.thepaperpublications.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/phd-services",
    "/rd-projects",
    "/phd-admissions",
    "/eb1a",
    "/contact",
    "/abroad-admissions",
    "/apply-eb1a",
    "/thank-you",
    "/blogs"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date)
  }));

  return [...staticRoutes, ...blogRoutes];
}
