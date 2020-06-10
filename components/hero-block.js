import PropTypes from "prop-types";
import Headline from "components/headline";
import Subhead from "components/subhead";
import CustomLink from "components/custom-link";

function HeroBlock(props) {
  // console.log(props);

  let button, bgColor;

  if (props.section.heroBlockAction) {
    button = <CustomLink {...props.section.heroBlockAction} />;
  } else {
    <></>;
  }

  if (props.section.heroBlockBackgroundColor) {
    switch (props.section.heroBlockBackgroundColor) {
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
      <div className="hero-wrap m0a flex">
        <div className="column">
          <Subhead>{props.section.heroBlockMiniTag}</Subhead>
          <Headline TagName="h1" size="lg" className="mt2 mb4">
            {props.section.heroBlockHeadline}
          </Headline>
          <div>{button}</div>
        </div>
        <div className="column">
          <img
            className="hero-image"
            title={props.section.heroBlockImage.fields.title}
            alt={props.section.heroBlockImage.fields.title}
            src={props.section.heroBlockImage.fields.file.url}
          />
        </div>
      </div>
      <style jsx>{`
        background-color: ${bgColor};

        .hero-wrap {
          max-width: 1080px;
          flex-direction: column;
        }

        .column {
          width: 100%;
          padding: var(--space-2);
          padding-left: 0;
          padding-right: 0;
        }

        .hero-image {
          width: 100%;
        }

        @media (min-width: 960px) {
          .hero-wrap {
            max-width: 1080px;
            flex-direction: row;
          }

          .column {
            width: 50%;
            padding: var(--space-4);
          }
        }
      `}</style>
    </div>
  );
}

export default HeroBlock;

// HeroBlock.propTypes = {
//   bgColor: PropTypes.string,
//   headline: PropTypes.string,
//   subhead: PropTypes.string,
//   body: PropTypes.string,
// };

// HeroBlock.defaultProps = {
//   bgColor: "var(--primary-bg-color)",
//   headline: "Headline for Design",
//   subhead: "SubHeadline for Design",
//   body:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et duiante. Nulla facilisi.",
// };
