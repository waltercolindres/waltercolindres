import SectionList from "./section-list";

export default function AllSections({ posts }) {
  // console.log(posts);

  const Sections = Object.keys(posts).map(function (key) {
    return <SectionList key={key} posts={posts[key]} title={key} />;
  });

  return <>{Sections}</>;
}
