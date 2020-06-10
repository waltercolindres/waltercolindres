import Link from "next/link";

function CustomLink(props, { className }) {
  let actionButtonStyleVariant, actionButtonColor;

  if (props) {
    switch (props.fields.actionButtonStyleVariant) {
      case "Positive":
        actionButtonStyleVariant = "positive";
        break;
      case "Negative":
        actionButtonStyleVariant = "negative";
        break;
      default:
        // console.log("Empty action received.");
        break;
    }

    switch (props.fields.actionButtonColor) {
      case "Purple":
        actionButtonColor = "var(--primary-color)";
        break;
      case "Coral":
        actionButtonColor = "var(--secondary-color)";
        break;
      default:
        // console.log("Empty action received.");
        break;
    }
  }

  return (
    <>
      <Link href={props.fields.actionButtonLink}>
        <a className={[actionButtonStyleVariant, actionButtonColor].join(" ")}>
          {props.fields.actionButton}
        </a>
      </Link>

      <style jsx>{`
        .positive {
          display: inline-block;
          padding: 1rem 3rem;
          background-color: ${actionButtonColor};
          color: white;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 500;
          transition: 0.2s ease-in-out 0s;
          text-decoration: none;
        }

        .negative {
          display: inline-block;
          padding: 1rem 3rem;
          background-color: transparent !important;
          color: ${actionButtonColor};
          border-radius: 50px;
          border: 2px solid ${actionButtonColor};
          font-size: 1rem;
          font-weight: 500;
          transition: 0.2s ease-in-out 0s;
          text-decoration: none;
        }

        :hover {
          background-color: black;
        }

        .coral {
          background-color: var(--secondary-color);
        }

        .purple {
          background-color: var(--primary-color);
        }
      `}</style>
    </>
  );
}

export default CustomLink;

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
