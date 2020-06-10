import HeroBlock from "components/hero-block";
import HeadlineBlock from "components/headline-block";
import PageBodyCopy from "components/page-body-copy";
import HowItWorksContainer from "components/how-it-works-container";
import CtaBlock from "components/cta-block";
import Meta from "components/meta";

function Page({ preview, page }) {
  const pageContent = page;
  console.log("page");
  console.log(page);

  return (
    <>
      {pageContent.meta ? <Meta meta={pageContent.meta} /> : null}
      <header>
        {pageContent.sections[0]?.fields &&
        pageContent.sections[0].sys.contentType.sys.id == "heroBlock" ? (
          <HeroBlock section={pageContent.sections[0].fields} />
        ) : null}

        {pageContent.sections[0]?.fields &&
        pageContent.sections[0].sys.contentType.sys.id == "headlineBlock" ? (
          <HeadlineBlock section={pageContent.sections[0].fields} />
        ) : null}
      </header>
      <article>
        {pageContent.sections[1]?.fields &&
        pageContent.sections[1].sys.contentType.sys.id ==
          "howItWorksContainer" ? (
          <HowItWorksContainer section={pageContent.sections[1].fields} />
        ) : null}

        {pageContent.sections[1]?.fields &&
        pageContent.sections[1].sys.contentType.sys.id == "pageBodyCopy" ? (
          <PageBodyCopy section={pageContent.sections[1].fields} />
        ) : null}

        {pageContent.sections[2]?.fields &&
        pageContent.sections[2].sys.contentType.sys.id == "CtaBlock" ? (
          <CtaBlock section={pageContent.sections[2].fields} />
        ) : null}
      </article>
    </>
  );
}
export default Page;
