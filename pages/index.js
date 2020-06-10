import Layout from "components/layout";
import Page from "components/page";

import {
  fetchPage,
  getPreviewEntryBySlug,
  fetchNavLinks,
  fetchSocialMediaLinks,
} from "utils/contentful";

function Index({
  preview,
  page,
  navPatients,
  navProviders,
  navLegal,
  navSocial,
}) {
  const pageContent = page;
  return (
    <>
      <Layout
        preview={preview}
        navProviders={navProviders}
        navPatients={navPatients}
        navLegal={navLegal}
        navSocial={navSocial}
      >
        <Page page={pageContent} />
      </Layout>
    </>
  );
}
export default Index;

export async function getStaticProps({ preview = false }) {
  let pageId = "4HzimZJvQd6pSpzMatugDi";
  if (preview) {
    const page = await getPreviewEntryBySlug(preview);
    return {
      props: { preview, page },
    };
  } else {
    const page = await fetchPage(pageId);
    const navProviders = await fetchNavLinks("For Providers");
    const navPatients = await fetchNavLinks("For Patients");
    const navLegal = await fetchNavLinks("Legal");
    const navSocial = await fetchSocialMediaLinks();

    return {
      props: { preview, page, navProviders, navPatients, navLegal, navSocial },
    };
  }
}
