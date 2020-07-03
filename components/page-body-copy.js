import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Breadcrumbs from "components/breadcrumbs";
import { getRichTextEntityLinks } from "@contentful/rich-text-links";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

function PageBodyCopy({ content }) {
  console.log("content");
  console.log(content);
  console.log("content");
  // debugger;

  // const sectionRendererOptions = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       const { file } = node.data.target.fields;
  //       const { url } = file["en-US"];
  //       return <img href={url} />;
  //     },
  //   },
  // };

  // https://github.com/contentful/rich-text/issues/61
  // https://github.com/contentful/rich-text/issues/88

  const renderImages = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const file = node.data.target.fields.file.url;
        const title = node.data.target.fields.title;
        const alt = node.data.target.fields.alt;
        return (
          <img className="reviews-image" src={file} alt={file} title={title} />
        );
      },
      [INLINES.HYPERLINK]: (node) => {
        if (node.data.uri.includes("player.vimeo.com/video")) {
          return (
            <div className="videoWrapper">
              <iframe
                title="Unique Title 001"
                src={node.data.uri}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          );
        }
      },
      // [BLOCKS.PARAGRAPH]: (node, children) =>
      //   node.content.some((childNode) => childNode.nodeType === `p`) ? (
      //     children
      //   ) : (
      //     <div className="blogpost-text">{children}</div>
      //   ),
    },
  };

  let x;

  if (content) {
    return (x = documentToReactComponents({ content }, renderImages));
  }

  return (
    <>
      <Breadcrumbs />
      <div className="text">{x}</div>;
    </>
  );
}

export default PageBodyCopy;
