import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllPostsTypesForHome } from "utils/contentful";
import Meta from "components/meta";
import { SITE_TITLE, SITE_DESC, SITE_URL, SITE_IMG } from "utils/configs";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  console.log(posts);
  return (
    <>
      <Meta
        description={SITE_DESC}
        url={SITE_URL}
        image={SITE_IMG}
        title={SITE_TITLE}
      />
      <Layout preview={preview}>
        <div className="intro">
          <h1>
            Currently leading Growth and Retention for Vistaprint Product.
          </h1>

          <p>
            Formerly Digtial Product Experience Lead for rbi (Burger King, Popeyes, Tim Hortons), Sonic Drive-In - Digital Team, Old Hat Creative, QuiBids,
            Archer Education. <a href="/about">Read more about me.</a>
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
