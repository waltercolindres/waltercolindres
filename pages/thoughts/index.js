import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllThoughts } from "utils/contentful";
import Head from "next/head";
import { SITE_TITLE } from "utils/configs";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <>
      <Head>
        <title>Thoughts | {SITE_TITLE}</title>
        <meta name="description" content="Collection of Thoughts" />
        <meta name="twitter:title" content="Thoughts" />
        <meta name="twitter:description" content="Collection of Thoughts" />
        <meta property="og:url" content="waltercolindres.com/thoughts/" />
      </Head>
      <Layout preview={preview}>
        <AllSections posts={posts} />
      </Layout>
    </>
  );
}
export default Index;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllThoughts(preview);
  return {
    props: { preview, allPosts },
  };
}
