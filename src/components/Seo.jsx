import { Helmet } from "react-helmet-async";
import { SITE_BASE_URL } from "../config/seo";

export function canonicalUrl(path) {
  const normalized =
    path === "/" || path === ""
      ? "/"
      : path.startsWith("/")
        ? path
        : `/${path}`;
  return `${SITE_BASE_URL}${normalized}`;
}

export default function Seo({ title, description, path = "/" }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl(path)} />
    </Helmet>
  );
}
