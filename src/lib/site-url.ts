/** Resolves the public site URL for metadata (Open Graph, canonical, etc.). */
export function getSiteUrl(): URL {
  const raw = process.env.APP_URL ?? "localhost:3000";

  if (raw.startsWith("http://") || raw.startsWith("https://")) {
    return new URL(raw);
  }

  const protocol = raw.includes("localhost") ? "http" : "https";
  return new URL(`${protocol}://${raw}`);
}
