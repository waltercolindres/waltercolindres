import Layout from "components/layout";
import AllPosts from "components/all-posts";
import { getAllPostsForHome } from "utils/contentful";

function Index({ preview, allPosts }) {
  const posts = allPosts;
  return (
    <>
      <Layout preview={preview}>
        <AllPosts posts={posts} />
      </Layout>
    </>
  );
}
export default Index;

export async function getStaticProps({ preview = false }) {
  // if (preview) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { preview, allPosts },
  };
  // } else {
  //   const page = await getAllPostsForHome(preview);
  //   return {
  //     props: { preview, page },
  //     // props: { preview, page, navProviders, navPatients, navLegal, navSocial },
  //   };
  // }
}
