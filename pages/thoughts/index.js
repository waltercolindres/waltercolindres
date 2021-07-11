import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllThoughts } from "utils/contentful";
import Meta from "components/meta";
import { SITE_TITLE, SITE_IMG } from "utils/configs";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <>
      <Meta
        description="Collection of Thoughts"
        image={SITE_IMG}
        title={"Thoughts | " + SITE_TITLE}
        url="https://waltercolindres.com/thoughts"
        keywords="thoughts, design, product management"
      />

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
