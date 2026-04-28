import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portofolio-midwfie.vercel.app";

  const routes = [
    "",
    "/tarif",
    "/sertifikat",
    "/#services",
    "/#contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}