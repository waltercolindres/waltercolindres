import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function PageBodyCopy({ content }) {
  console.log("conten");
  console.log(content);
  console.log("conten");
  // debugger;

  let x;

  if (content) {
    return (x = documentToReactComponents(content.content));
  }

  return <div className="text">{x}</div>;
}

export default PageBodyCopy;
