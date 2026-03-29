import Link from "next/link";

function Breadcrumbs({ title, postType }) {
  let transformPostType;

  if (postType) {
    transformPostType = postType.replace(/-/g, " ");
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
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            &nbsp;
            <Link as={`/${postType}`} href={`/[postType]`}>
              <a>{transformPostType}</a>
            </Link>
          </li>
          <li>&nbsp;{title}</li>
        </ul>
      </nav>
      <div id="_progress"></div>
    </>
  );
}

export default Breadcrumbs;
