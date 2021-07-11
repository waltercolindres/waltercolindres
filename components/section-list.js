import PostPreview from "./post-preview";

export default function SectionList({ posts, title }) {
  return (
    <div className="projects-list">
      <h2 className="mb0">{title}</h2>
      <ul>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            postType={post.postType}
            excerpt={post.excerpt}
            keywords={post.keywords}
          />
        ))}
      </ul>
    </div>
  );
}
