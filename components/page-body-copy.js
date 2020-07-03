import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function PageBodyCopy({ content }) {
  console.log("content");
  console.log(content);
  console.log("content");
  // debugger;

  let x;

  if (content) {
    return (x = documentToReactComponents({ content }));
  }

  return <div className="text">{x}</div>;
}

export default PageBodyCopy;
