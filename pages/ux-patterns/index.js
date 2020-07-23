import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllUXPatterns } from "utils/contentful";
import Head from "next/head";
import { SITE_TITLE } from "utils/configs";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <>
      <Head>
        <title>UX Patterns | {SITE_TITLE}</title>
        <meta name="description" content="Collection of UX Patterns" />
        <meta name="twitter:title" content="UX Patterns" />
        <meta name="twitter:description" content="Collection of UX Patterns" />
        <meta property="og:url" content="waltercolindres.com/ux-patterns/" />
      </Head>
      <Layout preview={preview}>
        <AllSections posts={posts} />
      </Layout>
    </>
  );
}
export default Index;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllUXPatterns(preview);
  return {
    props: { preview, allPosts },
  };
}
