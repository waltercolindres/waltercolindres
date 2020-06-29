import PostPreview from "./post-preview";
import SectionList from "./section-list";

export default function AllSections({ posts }) {
  console.log("==================");
  console.log(
    Object.keys(posts).forEach(function (item) {
      console.log(posts[item]);
    })
  );
  console.log("==================");

  let b;

  if (posts) {
    Object.keys(posts).forEach((item) => {
      {
        return (b = <SectionList posts={posts[item]} />);
        // (post) => (
        //   console.log(post.title + ", " + post.slug),
        // (b = (
        //   // <PostPreview
        //   //   key={post.slug}
        //   //   title={post.title}
        //   //   slug={post.slug}
        //   // />
        //   <AllSections posts={...posts} />
        // ))

        // (b = <AllSections posts={post} />)
        //   )
        // );
        // return posts[item].map(
        //   (post) => (
        //     console.log(post.title + ", " + post.slug),
        //     // (b = (
        //     //   // <PostPreview
        //     //   //   key={post.slug}
        //     //   //   title={post.title}
        //     //   //   slug={post.slug}
        //     //   // />
        //     //   <AllSections posts={...posts} />
        //     // ))

        //     (b = <AllSections posts={post} />)
        //   )
        // );
      }
    });
  }

  return <>{b}</>;
}
