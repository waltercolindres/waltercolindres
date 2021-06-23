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

//GET ALL POSTS
export async function getAllPostsTypesForHome(preview) {
  const thoughts = await client.getEntries({
    content_type: "post",
    order: "-sys.createdAt",
    "fields.postType": "thoughts",
  });

  const uxPatterns = await client.getEntries({
    content_type: "post",
    order: "sys.id",
    "fields.postType": "ux-patterns",
  });

  const caseStudies = await client.getEntries({
    content_type: "post",
    order: "sys.id",
    "fields.postType": "case-studies",
  });

  const reviews = await client.getEntries({
    content_type: "post",
    order: "sys.createdAt",
    "fields.postType": "reviews",
  });
  return {
    Thoughts: parsePostEntries(thoughts),
    "Case Studies": parsePostEntries(caseStudies),
    Reviews: parsePostEntries(reviews),
    "UX Patterns": parsePostEntries(uxPatterns),
  };
}

export async function getAllThoughts(preview) {
  const thoughts = await client.getEntries({
    content_type: "post",
    order: "-sys.createdAt",
    "fields.postType": "thoughts",
  });

  return {
    Thoughts: parsePostEntries(thoughts),
  };
}

export async function getAllReviews(preview) {
  const reviews = await client.getEntries({
    content_type: "post",
    order: "sys.createdAt",
    "fields.postType": "reviews",
  });
  return {
    Reviews: parsePostEntries(reviews),
  };
}

export async function getAllCaseStudies(preview) {
  const caseStudies = await client.getEntries({
    content_type: "post",
    order: "sys.id",
    "fields.postType": "case-studies",
  });

  return {
    "Case Studies": parsePostEntries(caseStudies),
  };
}

export async function getAllUXPatterns(preview) {
  const uxPatterns = await client.getEntries({
    content_type: "post",
    order: "sys.id",
    "fields.postType": "ux-patterns",
  });

  return {
    "UX Patterns": parsePostEntries(uxPatterns),
  };
}

function parsePost({ fields }) {
  console.log("sdsdssdsdsdsdssd");
  console.log(fields);
  console.log("sdsdssdsdsdsdssd");
  return {
    title: fields.title,
    slug: fields.slug,
    postType: fields.postType,
    // date: fields.date,
    content: fields.content || null,
    excerpt: fields.excerpt || null,
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
  //   // order: "-fields.date",
  //   "fields.slug[nin]": slug,
  // });

  console.log("[]][[[[[[[[[[[[[");
  console.log(parsePostEntries(entry)[0]);
  console.log("[]][[[[[[[[[[[[[");

  return {
    post: parsePostEntries(entry)[0],
    // morePosts: parsePostEntries(entries),
  };
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb);
}
