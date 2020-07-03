import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Header from "components/header";
import Layout from "../../components/layout";
import PageBodyCopy from "components/page-body-copy";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../utils/contentful";
import { SITE_TITLE } from "../../utils/configs";
import Breadcrumbs from "components/breadcrumbs";

export default function Post({ post, preview }) {
  console.log("post");
  console.log(post);
  console.log("post");
  console.log(post.content[0].fields.pageBodyContent.content);
  const router = useRouter();

  const content = post.content[0].fields.pageBodyContent.content;

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    function readingPosition() {
      var scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];
      var scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) -
        document.documentElement.clientHeight;
      var scrollPercent = (scrollTop / scrollBottom) * 100 + "%";
      document
        .getElementById("_progress")
        .style.setProperty("--scroll", scrollPercent);
    }

    // https://medium.com/@nilayvishwakarma/build-a-scroll-progress-bar-with-vanilla-js-in-10-minutes-or-less-4ba07e2554f3
    document.addEventListener("scroll", debounce(readingPosition, 10), {
      passive: true,
    });
  }
  return (
    <>
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

              <div className="sticky">
                <h1>{post.title}</h1>
                <Breadcrumbs title={post.title} />
              </div>

              <div className="mY2">META</div>

              <PageBodyCopy content={content} />
            </article>
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  console.log("data");
  console.log(data);
  console.log("data");

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
