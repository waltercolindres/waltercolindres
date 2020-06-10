import Image from "components/image";
import Rating from "components/rating";
import ProviderDetails from "./provider-details";

function ProviderCard({}) {
  return (
    <>
      <a href="#" className="block">
        <div className="provider-card flex flex-direction-row p2 py4">
          <div className="mr2 flex-one flex items-center ">
            <div className="provider-image">
              <Image />
            </div>
          </div>
          <div className="flex flex-direction-column mx2">
            <div className="">
              <ProviderDetails />
            </div>
            <div className="">
              <Rating />
            </div>
          </div>
          <div className="flex flex-direction-column mx2 text-center">
            11 <br /> mi
          </div>
        </div>
      </a>
      <a href="#" className="block">
        <div className="provider-card flex flex-direction-row p2 py4">
          <div className="mr2 flex-one flex items-center ">
            <div className="provider-image">
              <Image />
            </div>
          </div>
          <div className="flex flex-direction-column mx2">
            <div className="">
              <ProviderDetails />
            </div>
            <div className="">
              <Rating />
            </div>
          </div>
          <div className="flex flex-direction-column mx2 text-center">
            11 <br /> mi
          </div>
        </div>
      </a>
      <a href="#" className="block">
        <div className="provider-card flex flex-direction-row p2 py4">
          <div className="mr2 flex-one flex items-center ">
            <div className="provider-image">
              <Image />
            </div>
          </div>
          <div className="flex flex-direction-column mx2">
            <div className="">
              <ProviderDetails />
            </div>
            <div className="">
              <Rating />
            </div>
          </div>
          <div className="flex flex-direction-column mx2 text-center">
            11 <br /> mi
          </div>
        </div>
      </a>
      <style jsx>{`
        .block {
          display: inline-block;
        }
        .provider-card {
          border-bottom: 1px solid var(--gray-4);
          justify-content: space-between;
          max-width: 600px;
        }

        .provider-image {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          border: 4px solid var(--secondary-color);
          overflow: hidden;
          margin-right: var(--space-2);
        }

        a,
        a p,
        a h1,
        a h2,
        a h3,
        a h4,
        a h5,
        a h6 {
          text-decoration: none;
          color: inherit;
        }

        a:hover {
          background-color: var(--primary-bg-color);
        }
      `}</style>
    </>
  );
}

export default ProviderCard;
