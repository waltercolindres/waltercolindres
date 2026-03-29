import PostPreview from "./post-preview";

export default function SectionList({ posts, title }) {
  return (
    <div className="projects-list">
      <section>
        <h1 className="mb0">{title}</h1>
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
      </section>
    </div>
  );
}
