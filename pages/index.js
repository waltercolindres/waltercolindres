import Layout from "components/layout";
import AllPosts from "components/all-posts";
import { getAllPostsForHome } from "utils/contentful";

function Index({ preview, allPosts }) {
  const posts = allPosts;
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
        <AllPosts posts={posts} />
      </Layout>
    </>
  );
}
export default Index;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { preview, allPosts },
  };
}
