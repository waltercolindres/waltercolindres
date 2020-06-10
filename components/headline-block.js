import PropTypes from "prop-types";
import Headline from "components/headline";
import Subhead from "components/subhead";

function HeadlineBlock(props) {
  // console.log(props);

  let bgColor;

  if (props.section.headlineBlockBackgroundColor) {
    switch (props.section.headlineBlockBackgroundColor) {
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
    <div className="container">
      <div className="headline-wrap m0a flex">
        <Subhead>{props.section.headlineBlockMiniTag}</Subhead>
        <Headline TagName="h1" size="lg" className="mt2 mb4">
          {props.section.headlineBlockHeadline}
        </Headline>
      </div>
      <style jsx>{`
        background-color: ${bgColor};

        .headline-wrap {
          max-width: 1080px;
          flex-direction: column;
        }

        @media (min-width: 960px) {
          .headline-wrap {
            max-width: 1080px;
            padding: 0 var(--space-9) 0 var(--space-9);
          }
        }
      `}</style>
    </div>
  );
}

export default HeadlineBlock;

// headlineBlock.propTypes = {
//   bgColor: PropTypes.string,
//   headline: PropTypes.string,
//   subhead: PropTypes.string,
//   body: PropTypes.string,
// };

// headlineBlock.defaultProps = {
//   bgColor: "var(--primary-bg-color)",
//   headline: "Headline for Design",
//   subhead: "SubHeadline for Design",
//   body:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et duiante. Nulla facilisi.",
// };
