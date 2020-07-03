import PostPreview from "./post-preview";

export default function SectionList({ posts, title }) {
  return (
    <div className="projects-list">
      <h2>{title}</h2>
      <ul>
        {posts.map((post) => (
          <PostPreview key={post.slug} title={post.title} slug={post.slug} />
        ))}
      </ul>
    </div>
  );
}
