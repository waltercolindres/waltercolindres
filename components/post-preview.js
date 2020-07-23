import Link from "next/link";

export default function PostPreview({ title, slug, postType, excerpt }) {
  return (
    <li>
      <Link as={`/${postType}/${slug}`} href={`/[postType]/[slug]`}>
        <a>{title}</a>
      </Link>
      <div className="indent">{excerpt}</div>
    </li>
  );
}
