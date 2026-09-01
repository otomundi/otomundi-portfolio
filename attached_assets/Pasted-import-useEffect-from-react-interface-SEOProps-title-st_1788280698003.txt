import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title,
  description,
  image = "/og-image.jpg",
  url = "",
}: SEOProps) {

  useEffect(() => {

    const fullTitle =
      title === "ótomundi"
        ? "ótomundi"
        : `${title} | ótomundi`;

    document.title = fullTitle;

    // Description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    // Open Graph Title
    let ogTitle = document.querySelector(
      'meta[property="og:title"]'
    );

    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }

    ogTitle.setAttribute("content", fullTitle);

    // Open Graph Description
    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }

    ogDescription.setAttribute("content", description);

    // Open Graph Image
    let ogImage = document.querySelector(
      'meta[property="og:image"]'
    );

    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }

    ogImage.setAttribute("content", image);

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `https://www.otomundi.com${url}`
    );

  }, [title, description, image, url]);

  return null;

}