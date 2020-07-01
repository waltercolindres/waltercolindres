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

export async function getAllPostsTypesForHome(preview) {
  const thoughts = await client.getEntries({
    content_type: "post",
    order: "sys.createdAt",
    "fields.postType": "Thoughts",
  });

  const uxPatterns = await client.getEntries({
    content_type: "post",
    order: "sys.createdAt",
    "fields.postType": "UX Patterns",
  });

  const caseStudies = await client.getEntries({
    content_type: "post",
    order: "sys.createdAt",
    "fields.postType": "Case Studies",
  });

  const reviews = await client.getEntries({
    content_type: "post",
    order: "sys.createdAt",
    "fields.postType": "Reviews",
  });
  return {
    Thoughts: parsePostEntries(thoughts),
    "Case Studies": parsePostEntries(caseStudies),
    "UX Patterns": parsePostEntries(uxPatterns),
    Reviews: parsePostEntries(reviews),
  };
}

export async function getAllPostsForHome(preview) {
  const entries = await client.getEntries({
    content_type: "post",
    order: "sys.createdAt",
  });
  return parsePostEntries(entries);
}

function parsePost({ fields }) {
  return {
    title: fields.title,
    slug: fields.slug,
    // date: fields.date,
    content: fields.content || null,
    // excerpt: fields.excerpt,
    // coverImage: fields.coverImage.fields.file,
    // author: parseAuthor(fields.author),
  };
}

export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: "post",
    select: "fields.slug",
  });
  return parsePostEntries(entries, (post) => post.fields);
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await client.getEntries({
    content_type: "post",
    limit: 1,
    "fields.slug[in]": slug,
  });
  // const entries = await getClient(preview).getEntries({
  //   content_type: "post",
  //   limit: 2,
  //   order: "-fields.date",
  //   "fields.slug[nin]": slug,
  // });

  return {
    post: parsePostEntries(entry)[0],
    // morePosts: parsePostEntries(entries),
  };
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb);
}
