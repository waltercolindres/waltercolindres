function Rating({}) {
  return (
    <>
      <div>
        <span className="label">Rating: 5.0</span>
        <span className="mx0">★</span>
        <span className="mx0">★</span>
        <span className="mx0">★</span>
        <span className="mx0">☆</span>
        <span className="mx0">☆</span>
      </div>
      <style jsx>{`
        .label {
          margin-right: var(--space-1);
        }
      `}</style>
    </>
  );
}

export default Rating;
