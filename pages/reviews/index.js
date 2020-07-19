import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllReviews } from "utils/contentful";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <>
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
