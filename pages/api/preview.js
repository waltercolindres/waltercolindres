import { getPreviewEntryBySlug } from "utils/contentful";

export default async function preview(req, res) {
  const { secret, slug } = req.query;
  // console.log(secret);
  // console.log("req.query");
  // console.log(req.query);
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  // console.log(slug);
  const entry = await getPreviewEntryBySlug(true, slug);
  // console.log(entry);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!entry) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: entry.slug });
  const url = `/`;
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  );
  res.end();
}
