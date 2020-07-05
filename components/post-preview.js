// import Link from "next/link";

// export default function PostPreview({ title, slug, postType }) {
//   let transformPostType;

//   if (postType) {
//     transformPostType = postType.toLowerCase().replace(/\s/g, "");
//     console.log(transformPostType);
//   }

//   return (
//     <li>
//       <Link
//         as={`/${transformPostType}/${slug}`}
//         href={`/${transformPostType}/[slug]`}
//       >
//         <a>{title}</a>
//       </Link>

//       {/* <p>{excerpt}</p> */}
//     </li>
//   );
// }

import Link from "next/link";

export default function PostPreview({ title, slug, postType }) {
  let transformPostType;

  if (postType) {
    transformPostType = postType.toLowerCase().replace(/\s/g, "");
    console.log(transformPostType);
  }

  return (
    <li>
      <Link as={`/posts/${slug}`} href={`/posts/[slug]`}>
        <a>{title}</a>
      </Link>

      {/* <p>{excerpt}</p> */}
    </li>
  );
}
