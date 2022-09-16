import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllPostsTypesForHome } from "utils/contentful";
import Meta from "components/meta";
import { SITE_TITLE, SITE_DESC, SITE_URL, SITE_IMG, SITE_KEYWORDS } from "utils/configs";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  return (
    <>
      <Meta
        description={SITE_DESC}
        url={SITE_URL}
        image={SITE_IMG}
        title={SITE_TITLE}
        keywords={SITE_KEYWORDS}
      />
      <Layout preview={preview}>
        <div className="intro">
          <h1>
            Customer-centric Problem Solver for E-Commerce.
          </h1>

          <p>
            Formerly VistaPrint (Vista), Digtial Product Experience Lead for rbi (Burger King, Popeyes, Tim Hortons), Sonic Drive-In - Digital Team, Old Hat Creative, QuiBids,
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
