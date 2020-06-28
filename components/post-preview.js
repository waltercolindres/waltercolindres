import Link from "next/link";

export default function PostPreview({ title, excerpt, slug }) {
  return (
    <div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      {/* <p>{excerpt}</p> */}
    </div>
  );
}
