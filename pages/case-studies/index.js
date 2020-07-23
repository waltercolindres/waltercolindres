import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllCaseStudies } from "utils/contentful";
import Head from "next/head";
import { SITE_TITLE } from "utils/configs";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <>
      <Head>
        <title>Case Studies | {SITE_TITLE}</title>
        <meta name="description" content="Collection of Case Studies" />
        <meta name="twitter:title" content="Case Studies" />
        <meta name="twitter:description" content="Collection of Case Studies" />
        <meta property="og:url" content="waltercolindres.com/case-studies/" />
      </Head>
      <Layout preview={preview}>
        <AllSections posts={posts} />
      </Layout>
    </>
  );
}
export default Index;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllCaseStudies(preview);
  return {
    props: { preview, allPosts },
  };
}
