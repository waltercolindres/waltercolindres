import Link from "next/link";

export default function PostPreview({ title, slug, postType, excerpt }) {
  return (
    <li>
      <Link as={`/${postType}/${slug}`} href={`/[postType]/[slug]`}>
        <a>{title}</a>
      </Link>
      <div className="indent">
      <Link as={`/${postType}/${slug}`} href={`/[postType]/[slug]`}>
        <a className="unbold">{excerpt}</a>
      </Link>
      </div>
    </li>
  );
}
