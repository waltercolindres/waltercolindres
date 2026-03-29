import * as dayjs from "dayjs";

export default function PostMeta({ createdDate, updatedDate }) {
  let created = dayjs(createdDate).format("MM/DD/YYYY"); // display

  let updated = dayjs(updatedDate).format("MM/DD/YYYY"); // display

  return (
    <>
      <div className="mb1">
        <small>
          <strong>Published:</strong> {created}
        </small>{" "}
        /{" "}
        <small>
          <strong>Updated:</strong> {updated}
        </small>
      </div>
    </>
  );
}
