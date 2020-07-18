import Link from "next/link";

export default function PostPreview({ title, slug, postType }) {
  return (
    <li>
      <Link as={`/${postType}/${slug}`} href={`/${postType}/[slug]`}>
        <a>{title}</a>
      </Link>

      {/* <p>{excerpt}</p> */}
    </li>
  );
}
