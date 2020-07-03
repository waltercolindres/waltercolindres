import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import PageBodyCopy from "components/page-body-copy";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../utils/contentful";
import { SITE_TITLE } from "../../utils/configs";

export default function Post({ post, preview }) {
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
                {/* <meta property="og:image" content={post.coverImage.url} /> */}
              </Head>

              <div className="sticky">
                <h1>{post.title}</h1>
                {/* <Breadcrumbs title={post.title} /> */}
              </div>

              <div className="mY2">META</div>

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
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
