import { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { events } from "@/lib/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/apply",
    "/mentor",
    "/team",
    "/events",
    "/partners",
    "/donate",
    "/contact",
    "/faq",
    "/privacy",
    "/terms"
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date()
  }));

  const eventRoutes = events.map((e) => ({
    url: `${base}/events/${e.slug}`,
    lastModified: new Date(e.date)
  }));

  return [...staticRoutes, ...eventRoutes];
}
