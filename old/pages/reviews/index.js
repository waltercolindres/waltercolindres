import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllReviews } from "utils/contentful";
import Meta from "components/meta";
import { SITE_TITLE, SITE_IMG } from "utils/configs";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <>
      <Meta
        description="Collection of Reviews"
        image={SITE_IMG}
        title={"Reviews | " + SITE_TITLE}
        url="https://waltercolindres.com/reviews"
        keywords="reviews, product management, product reviews"
      />

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
