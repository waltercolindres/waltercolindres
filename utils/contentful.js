//todo make one api to get all pages and build staticlly

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  resolveLinks: true,
});

const previewClient = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

const getClient = (preview) => (preview ? previewClient : client);

export async function fetchPage(pageId, preview) {
  const entries = await client.getEntries({
    include: 3,
    "sys.id": pageId,
  });
  return parseMainEntries(entries)[0];
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function fetchNavLinks(audienceType) {
  const entriesProviders = await client.getEntries({
    include: 1,
    content_type: "landingPage",
    order: "fields.landingPageSortOrder",
    "fields.landingPageAudience": audienceType,
  });

  return parseNavLinks(entriesProviders);
  console.log(`Error getting Entries for ${entries}.`);
}

export async function fetchSocialMediaLinks() {
  const entriesSocialMedia = await client.getEntries({
    include: 1,
    content_type: "socialMediaLinks",
  });

  return parseSocialLinks(entriesSocialMedia);
  console.log(`Error getting Entries for ${entries}.`);
}

function parseEntry({ fields }) {
  // console.log(parseSections(fields.sections));
  return {
    title: fields.title,
    slug: fields.slug,
    meta: parseMeta(fields.metadata) || null,
    sections: fields.sections || null,
  };
}

function parseMeta({ fields }) {
  return {
    siteDescription: fields.siteDescription,
    siteKeywords: fields.siteKeywords,
    siteOgImageUrl: fields.siteOgImage?.fields?.file?.url || null,
    siteOgImageWidth:
      fields.siteOgImage?.fields?.file?.details?.image?.width || null,
    siteOgImageHeight:
      fields.siteOgImage?.fields?.file?.details?.image?.height || null,
    siteTitle: fields.siteTitle,
    siteTwitterDescription: fields.siteTwitterDescription || null,
    siteTwitterImageUrl: fields.siteTwitterImage?.fields?.file?.url || null,
    siteTwitterImageAltTag: fields.siteTwitterImageAltTag || null,
    siteTwitterTitle: fields.siteTwitterTitle || null,
  };
}

function parseSocialMediaLink({ fields }) {
  return {
    name: fields.socialMediaPlatformName,
    url: fields.socialMediaPlatformLink,
    image: fields.socialMediaPlatformIcon?.fields?.file?.url || null,
  };
}

function parseNavLink({ fields }) {
  return {
    title: fields.title,
    slug: fields.slug,
    sortOrder: fields.landingPageSortOrder,
    audience: fields.landingPageAudience,
  };
}

//WIP
function parseSectionEntry({ fields }) {
  console.log("puta");
  console.log({ fields });
  console.log("puta");
  // return {
  //   ctaBlockTitle: ctaBlockTitle,
  //   ctaBlockHeadline: ctaBlockHeadline,
  //   ctaBlockMiniTag: ctaBlockMiniTag,
  // };
}

//WIP
function parseSection(sections, cb = parseSectionEntry) {
  return sections?.sys?.fields?.map(cb);
}

function parseSections(sections, cb = parseSection) {
  return sections?.map(cb);
}

function parseMainEntries(entries, cb = parseEntry) {
  return entries?.items?.map(cb);
}

function parseNavLinks(entries, cb = parseNavLink) {
  return entries?.items?.map(cb);
}

function parseSocialLinks(entries, cb = parseSocialMediaLink) {
  return entries?.items?.map(cb);
}

//not passing the id, need to pass the id to get the single page and then forget about limit
export async function getPreviewEntryBySlug(preview, slug) {
  const entries = await getClient(preview).getEntries({
    content_type: "landingPage",
    limit: 3,
    "fields.slug[in]": slug,
  });
  return parseMainEntries(entries)[0];
}
