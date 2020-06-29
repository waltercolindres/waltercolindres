import Link from "next/link";

export default function PostPreview({ title, slug }) {
  return (
    <li>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>{title}</a>
      </Link>

      {/* <p>{excerpt}</p> */}
    </li>
  );
}
