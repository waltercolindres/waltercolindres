import PropTypes from "prop-types";
import Button from "components/button";
import Subhead from "components/subhead";
import Headline from "components/headline";
import CustomLink from "components/custom-link";

function CtaBlock(props) {
  let button, bgColor;
  // let buttonText = "21w2w1";
  if (props.section.ctaBlockActions) {
    button = <CustomLink {...props.section.ctaBlockActions} />;
  } else {
    <></>;
  }

  if (props.section.ctaBlockBackgroundColor) {
    switch (props.section.ctaBlockBackgroundColor) {
      case "Purple":
        bgColor = "var(--secondary-bg-color)";
        break;
      case "Coral":
        bgColor = "var(--primary-bg-color)";
        break;
      default:
        // console.log("Empty action received.");
        break;
    }
  }

  return (
    <div className="container text-center py4">
      <Subhead className="my2">{props.section.ctaBlockMiniTag}</Subhead>
      <Headline TagName="h2" className="my2">
        {props.section.ctaBlockTitle}
      </Headline>
      <div className="cta-body-copy m0a">
        <p className="mb6">{props.section.ctaBlockBodyCopy}</p>
      </div>
      {button}
      <style jsx>{`
        background-color: ${bgColor};

        .cta-body-copy {
          max-width: 800px;
        }
      `}</style>
    </div>
  );
}

export default CtaBlock;

// CtaBlock.propTypes = {
//   bgColor: PropTypes.string,
//   headline: PropTypes.string,
//   body: PropTypes.string,
//   buttonText: PropTypes.string,
// };

// CtaBlock.defaultProps = {
//   bgColor: "var(--primary-bg-color)",
//   headline: "Headline for Design",
//   subhead: "SubHeadline for Design",
//   body:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et duiante. Nulla facilisi.",
// };
