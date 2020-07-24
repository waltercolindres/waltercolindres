import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllUXPatterns } from "utils/contentful";
import { SITE_TITLE, SITE_IMG } from "utils/configs";
import Meta from "components/meta";

function Index({ preview, allPosts }) {
  const posts = allPosts;

  return (
    <>
      <Meta
        description="Collection of UX Patterns"
        image={SITE_IMG}
        title={"UX Patterns | " + SITE_TITLE}
        url="waltercolindres.com/ux-patterns/"
      />

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
