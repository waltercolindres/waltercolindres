import HowItWorksBlock from "./how-it-works-block";
import Subhead from "components/subhead";
import Headline from "components/headline";

function HowItWorksContainer(props) {
  // console.log("props.title");
  // console.log(props);
  return (
    <>
      <section className="container">
        <div className="how-it-works-copy text-center m0a mb9">
          <Subhead>{props.section.howItWorksMiniTag}</Subhead>
          <Headline TagName="h3" className="mt2 mb4">
            {props.section.howItWorksContainerName}
          </Headline>
          <p className="mb4">{props.section.howItWorksDescription}</p>
        </div>
        <HowItWorksBlock section={props.section.howItWorksSteps} />
      </section>
      <style jsx>{`
        .how-it-works-copy {
          max-width: 680px;
        }
      `}</style>
    </>
  );
}

export default HowItWorksContainer;
