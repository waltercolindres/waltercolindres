import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../utils/contentful";
import { SITE_TITLE } from "../../utils/configs";

export default function Post({ post, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.title} | {SITE_TITLE}
              </title>
              {/* <meta property="og:image" content={post.coverImage.url} /> */}
            </Head>

            {post.title}
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      // morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}

// export default function Post({ post, morePosts, preview }) {
//   const router = useRouter()

//   if (!router.isFallback && !post) {
//     return <ErrorPage statusCode={404} />
//   }

//   return (
//     <Layout preview={preview}>
//       <Container>
//         <Header />
//         {router.isFallback ? (
//           <PostTitle>Loading…</PostTitle>
//         ) : (
//           <>
//             <article>
//               <Head>
//                 <title>
//                   {post.title} | Next.js Blog Example with {CMS_NAME}
//                 </title>
//                 <meta property="og:image" content={post.coverImage.url} />
//               </Head>
//               <PostHeader
//                 title={post.title}
//                 coverImage={post.coverImage}
//                 date={post.date}
//                 author={post.author}
//               />
//               <PostBody content={post.content} />
//             </article>
//             <SectionSeparator />
//             {morePosts && morePosts.length > 0 && (
//               <MoreStories posts={morePosts} />
//             )}
//           </>
//         )}
//       </Container>
//     </Layout>
//   )
// }

// export async function getStaticProps({ params, preview = false }) {
//   const data = await getPostAndMorePosts(params.slug, preview)

//   return {
//     props: {
//       preview,
//       post: data?.post ?? null,
//       morePosts: data?.morePosts ?? null,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug()
//   return {
//     paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
//     fallback: true,
//   }
// }
