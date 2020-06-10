import Headline from "components/headline";
import Subhead from "components/subhead";

function ProviderDetails({}) {
  return (
    <>
      <div>
        <Headline TagName="h2" size="sm" className="mb1">
          Dr. Satish Gaddam, MD
        </Headline>
        <Subhead TagName="h3" size="sm" className="mb3">
          Neurologist
        </Subhead>
        <address className="mb2">
          4325 N Josey Ln, Trinity Plaza 3, Suite 203 Carrollton,TX 75010
        </address>
      </div>
      <style jsx>{`
        address {
          font-style: normal;
        }
      `}</style>
    </>
  );
}

export default ProviderDetails;
