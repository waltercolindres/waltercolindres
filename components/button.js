import PropTypes from "prop-types";

function Button({ children, size, color, className }) {
  return (
    <>
      <button className={[color, size, className].join(" ")} type="button">
        {children}
      </button>
      <style jsx>
        {`
          display: inline-block;
          padding: 1rem 3rem;
          background-color: ${color};
          // background-color: rgba(${color}, 1);
          color: white;
          border-radius: 50px;
          font-size: 1rem;
          transition: 0.2s ease-in-out 0s;
          :hover {
            // background-color: rgba(${color}, .5);
            background-color: black;
          }
        `}
      </style>
    </>
  );
}

export default Button;

Button.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  color: "var(--primary-color)",
  size: "none",
  text: "button",
  className: "",
};
