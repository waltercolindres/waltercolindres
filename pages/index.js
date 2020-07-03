import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllPostsTypesForHome } from "utils/contentful";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <>
      <Layout preview={preview}>
        <div className="intro">
          <h1>
            Currently the Product &amp; Experience Practice for the rbi
            portfolio (Burger King, Popeyes, Tim Hortons).
          </h1>

          <p>
            Formerly Sonic Drive-In - Digital Team, Old Hat Creative, QuiBids,
            Archer Education.
          </p>
        </div>
        <AllSections posts={posts} />
      </Layout>
    </>
  );
}
export default Index;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsTypesForHome(preview);
  return {
    props: { preview, allPosts },
  };
}
