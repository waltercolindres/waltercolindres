import Layout from "components/layout";
import AllSections from "components/all-sections";
import { getAllCaseStudies } from "utils/contentful";
import Meta from "components/meta";
import { SITE_TITLE, SITE_IMG } from "utils/configs";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  
  return (
    <>
      <Meta
        description="Collection of Case Studies"
        image={SITE_IMG}
        title={"Case Studies | " + SITE_TITLE}
        url="http://waltercolindres.com/case-studies"
        keywords="case studies, design, product management"
      />
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
