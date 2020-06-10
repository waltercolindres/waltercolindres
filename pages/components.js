import Head from "next/head";
import Headline from "components/headline";
import ProviderCard from "components/provider-card";

function ComponentPage() {
  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
      </Head>
      <main>
        <Headline TagName="h1" className="my2">
          Subhead for CTA Design
        </Headline>
        <Headline TagName="h2" className="my2">
          Subhead for CTA Design
        </Headline>
        <Headline TagName="h3" className="my2">
          Subhead for CTA Design
        </Headline>
        <Headline TagName="h4" className="my2">
          Subhead for CTA Design
        </Headline>
        <Headline TagName="h5" className="my2">
          Subhead for CTA Design
        </Headline>
        <Headline TagName="h6" className="my2">
          Subhead for CTA Design
        </Headline>
        <div className="provider-card-column flex flex-direction-column flex-wrap">
          <ProviderCard />
        </div>
      </main>
      <style jsx>{`
        .provider-card-column {
          max-width: 600px;
        }
      `}</style>
    </>
  );
}

export default ComponentPage;
