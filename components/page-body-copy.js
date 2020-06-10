function PageBodyCopy({ section }) {
  console.log(section);
  return (
    <div className="container m0a">
      <p className="my4">{section.pageBodyCopy}</p>
      <style jsx>{`
        max-width: 1080px;
      `}</style>
    </div>
  );
}

export default PageBodyCopy;
