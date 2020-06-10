import PropTypes from "prop-types";

function Headline({ children, size, color, TagName, className }) {
  let headingSize;
  if (size) {
    // console.log(size);
    switch (size) {
      case "xl":
        headingSize = "xlarge";
        break;
      case "lg":
        headingSize = "large";
        break;
      case "md":
        headingSize = "medium";
        break;
      case "sm":
        headingSize = "small";
        break;
      default:
        // console.log("Empty action received.");
        break;
    }
  }
  return (
    <>
      <TagName className={[color, className, headingSize].join(" ")}>
        {children}
      </TagName>
      <style jsx>
        {`
          color: ${color};
        `}
      </style>
    </>
  );
}

export default Headline;

Headline.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  tagName: PropTypes.string,
  headingSize: PropTypes.string,
};

Headline.defaultProps = {
  color: "var(--primary-color)",
  size: "",
  text: "This is a headline",
  className: "",
  tagName: "",
  headingSize: "dmklsajdkljsak",
};
