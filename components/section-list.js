import PostPreview from "./post-preview";

export default function SectionList({ posts }) {
  console.log("LLLLLLLLLLL");
  console.log(posts);
  console.log("LLLLLLLLLLL");
  return (
    <ul>
      {posts.map((post) => (
        <PostPreview key={post.slug} title={post.title} slug={post.slug} />
      ))}
    </ul>
  );
}
