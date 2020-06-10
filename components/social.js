import PropTypes from "prop-types";
import Icon from "components/icons";

function Social({ name, url, image }) {
  return (
    <>
      <a
        href={url}
        className="p1"
        aria-label={["Connect with us on " + name]}
        title={["We are on " + name]}
      >
        <Icon name={name} color="white" size="30" />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }

        a:hover {
          opacity: 0.5;
        }

        a:first-of-type {
          padding-left: 0;
        }
      `}</style>
    </>
  );
}

export default Social;

// Headline.propTypes = {
//   className: PropTypes.node,
//   children: PropTypes.node,
//   color: PropTypes.string,
//   size: PropTypes.string,
//   text: PropTypes.string,
//   tagName: PropTypes.string,
//   headingSize: PropTypes.string,
// };

// Headline.defaultProps = {
//   color: "var(--primary-color)",
//   size: "",
//   text: "This is a headline",
//   className: "",
//   tagName: "",
//   headingSize: "dmklsajdkljsak",
// };
