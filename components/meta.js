// import PropTypes from "prop-types";
import Head from "next/head";
import { TWITTER_CREATOR, TWITTER_SITE } from "utils/configs";

function Meta({ description, url, image, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="product, experience, design, website, product management"
        />
        {/* https://ogp.me/ */}
        <meta property="og:site_name" content="Walter Colindres" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        {/* https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_SITE} />
        <meta name="twitter:creator" content={TWITTER_CREATOR} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
    </>
  );
}
export default Meta;
