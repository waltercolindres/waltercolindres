import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllReviews } from "utils/contentful";
import Head from "next/head";
import { SITE_TITLE } from "utils/configs";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <>
      <Head>
        <title>Reviews | {SITE_TITLE}</title>
        <meta name="description" content="Collection of Reviews" />
        <meta name="twitter:title" content="Reviews" />
        <meta name="twitter:description" content="Collection of Reviews" />
        <meta property="og:url" content="waltercolindres.com/reviews/" />
      </Head>
      <Layout preview={preview}>
        <AllSections posts={posts} />
      </Layout>
    </>
  );
}
export default Index;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllReviews(preview);
  return {
    props: { preview, allPosts },
  };
}
