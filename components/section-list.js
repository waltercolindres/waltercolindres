import PostPreview from "./post-preview";

export default function SectionList({ posts, title, postType, excerpt }) {
  return (
    <div className="projects-list">
      <h2>{title}</h2>
      <ul>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            postType={post.postType}
            excerpt={post.excerpt}
          />
        ))}
      </ul>
    </div>
  );
}
