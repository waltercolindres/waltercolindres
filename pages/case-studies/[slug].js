import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Breadcrumbs from "components/breadcrumbs";
import Layout from "components/layout";
import PageBodyCopy from "components/page-body-copy";
import { getAllPostsWithSlug, getPostAndMorePosts } from "utils/contentful";
import { SITE_TITLE } from "utils/configs";
import PostMeta from "components/post-meta";

export default function Post({ post, preview }) {
  console.log(post);

  const router = useRouter();
  let content;

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  if (post) {
    content = post.content[0].fields.pageBodyContent.content;
  }

  return (
    <>
      <Layout preview={preview}>
        {router.isFallback ? (
          <>Loading…</>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {SITE_TITLE}
                </title>
                <meta name="twitter:title" content={post.title} />
                <meta
                  name="twitter:description"
                  content="Walter Colindres - Product Experience Leader"
                />
                <meta
                  name="twitter:image"
                  content="http://waltercolindres.com/mio-4.png"
                />
                <meta
                  name="description"
                  content="Walter Colindres - Product Experience Leader"
                />
                <meta
                  property="og:image"
                  content="http://waltercolindres.com/mio-4.png"
                />
              </Head>

              <h1 className="mb0">{post.title}</h1>
              <PostMeta
                createdDate={post.content[0].sys.createdAt}
                updatedDate={post.content[0].sys.updatedAt}
              />

              <div className="sticky">
                <Breadcrumbs title={post.title} postType={post.postType} />
              </div>

              <PageBodyCopy content={content} />
            </article>
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/case-studies/${slug}`) ?? [],
    fallback: true,
  };
}
