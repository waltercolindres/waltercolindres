import Subhead from "components/subhead";
import Headline from "components/headline";

function HowItWorksBlock({ section }) {
  console.log(section);
  return (
    <div>
      {section.map((section) => (
        <div
          className="how-it-works-block text-center m0a"
          key={section.fields.howItWorksStepTitle}
        >
          <Subhead>{section.fields.howItWorksStepMiniTag}</Subhead>
          <Headline TagName="h2" className="mt2 mb6">
            {section.fields.howItWorksStepTitle}
          </Headline>
          <img
            title={section.fields.howItWorksStepImage.fields.title}
            alt={section.fields.howItWorksStepImage.fields.title}
            src={section.fields.howItWorksStepImage.fields.file.url}
          />
          <p className="my4">{section.fields.howItWorksStepCopy}</p>
        </div>
      ))}
      <style jsx>{`
        .how-it-works-block {
          max-width: 600px;
          margin-bottom: var(--space-9);
        }

        .how-it-works-block:last-of-type {
          margin-bottom: 0;
        }

        img {
          width: 100%;
          max-width: 450px;
          max-height: 300px;
        }
      `}</style>
    </div>
  );
}

export default HowItWorksBlock;
