// import PropTypes from "prop-types";
import Head from "next/head";
import { TWITTER_CREATOR, TWITTER_SITE } from "utils/configs";

function Meta(props) {
  let meta = props.meta || "null";

  return (
    <>
      <Head>
        <title>Walter Colindres - Product Experience Leader</title>
        <meta
          name="description"
          content="Walter Colindres - Product Experience Leader"
        />
        <meta
          name="keywords"
          content="product, experience, design, website, product management"
        />
        {/* https://ogp.me/ */}
        <meta property="og:site_name" content="Walter Colindres" />
        <meta
          property="og:title"
          content="Walter Colindres - Product Experience Leader"
        />
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="waltercolindres.com" />
        <meta property="og:image" content="waltercolindres.com/mio-4.png" />
        <meta
          property="og:image:width"
          content={meta.siteOgImageWidth || "200"}
        />
        <meta
          property="og:image:height"
          content={meta.siteOgImageHeight || "200"}
        />
        {/* https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_SITE} />
        <meta name="twitter:site" content="waltercolindres.com" />
        <meta name="twitter:creator" content={TWITTER_CREATOR} />
        <meta
          name="twitter:title"
          content="Walter Colindres - Product Experience Leader"
        />
        <meta
          name="twitter:description"
          content="Walter Colindres - Product Experience Leader"
        />
        <meta name="twitter:image" content="waltercolindres.com/mio-4.png" />
      </Head>
    </>
  );
}
export default Meta;

// Meta.propTypes = {
//   // siteDescription: PropTypes.string,
//   // siteKeywords: PropTypes.string,
//   // "siteOgImage.fields.file.url": PropTypes.string,
//   // "meta.siteOgTitle": PropTypes.string,
//   // "meta.siteTitle": PropTypes.string,
//   // "meta.siteTwitterDescription": PropTypes.string,
//   "siteTwitterImage.fields.file.url": PropTypes.string,
//   siteTwitterImageAltTag: PropTypes.string,
//   // "meta.siteTwitterTitle": PropTypes.string,
//   // "meta.siteUrl": PropTypes.string,
// };

// Meta.defaultProps = {
//   // siteDescription:
//   //   "This is the about page meta this is a test and we need to hit a min amount",
//   // siteKeywords: "test",
//   "siteOgImage.fields.file.url": "Link jkjlkj",
//   // siteOgTitle: "test",
//   // siteTitle: "test",
//   // "meta.siteTwitterDescription": "Petra's List About",
//   "siteTwitterImage.fields.file.url": "Link",
//   siteTwitterImageAltTag: "Petra's List About",
//   // "meta.siteTwitterTitle": "Petra's List About Twitter Title",
//   // "meta.siteUrl": "petraslist.com",
// };
