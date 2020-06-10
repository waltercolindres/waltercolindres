import PropTypes from "prop-types";

function Subhead({ children, size, color, className }) {
  return (
    <>
      <div className={[color, size, className].join(" ")}>{children}</div>
      <style jsx>
        {`
          font-size: var(--fontSize-0);
          letter-spacing: 0.125rem;
          text-transform: uppercase;
          font-weight: bold;
          color: ${color};
        `}
      </style>
    </>
  );
}

export default Subhead;

Subhead.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
};

Subhead.defaultProps = {
  color: "var(--secondary-color)",
  size: "",
  text: "button",
  className: "",
};
