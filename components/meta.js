import PropTypes from "prop-types";
import Head from "next/head";
import { TWITTER_CREATOR, TWITTER_SITE } from "utils/configs";

function Meta(props) {
  let meta = props.meta;
  return (
    <>
      <Head>
        <title>{meta.siteTitle || "test title inline"}</title>
        <meta
          name="description"
          content={meta.siteDescription || "test title inline"}
        />
        <meta
          name="keywords"
          content={meta.siteKeywords || "test title inline"}
        />

        {/* https://ogp.me/ */}
        <meta
          property="og:site_name"
          content={meta.siteTitle || "test title inline"}
        />
        <meta
          property="og:title"
          content={meta.siteOgTitle || "test title inline"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.siteUrl || "test title inline"} />
        <meta
          property="og:image"
          content={meta.siteOgImageUrl || "test title inline"}
        />
        <meta
          property="og:image:width"
          content={meta.siteOgImageWidth || "200"}
        />
        <meta
          property="og:image:height"
          content={meta.siteOgImageHeight || "300"}
        />

        {/* https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_SITE} />
        <meta
          name="twitter:site"
          content={meta.siteUrl || "test title inline"}
        />
        <meta name="twitter:creator" content={TWITTER_CREATOR} />
        <meta
          name="twitter:title"
          content={meta.siteTwitterTitle || "test title inline"}
        />
        <meta
          name="twitter:description"
          content={meta.siteTwitterDescription || "test title inline"}
        />
        <meta
          name="twitter:image"
          content={meta.siteTwitterImageUrl || "test title inline"}
        />
        <meta
          name="twitter:image:alt"
          content={meta.siteTwitterImageAltTag || "test title inline"}
        />
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
