import PostPreview from "./post-preview";

export default function AllPosts({ posts }) {
  return (
    <section className="projects-list">
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            // coverImage={post.coverImage}
            // date={post.date}
            // author={post.author}
            slug={post.slug}
            // excerpt={post.excerpt}
          />
        ))}
      </ul>
    </section>
  );
}
