import { SITE_TITLE } from "utils/configs";

function Footer() {
  let date = new Date().getFullYear();

  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // if (typeof window !== "undefined" && typeof document !== "undefined") {
  //   function debounce(func, wait, immediate) {
  //     var timeout;
  //     return function () {
  //       var context = this,
  //         args = arguments;
  //       var later = function () {
  //         timeout = null;
  //         if (!immediate) func.apply(context, args);
  //       };
  //       var callNow = immediate && !timeout;
  //       clearTimeout(timeout);
  //       timeout = setTimeout(later, wait);
  //       if (callNow) func.apply(context, args);
  //     };
  //   }

  //   window.addEventListener("scroll", debounce(showScrollTopButton, 10), false);

  //   var scrollButton = document.getElementById("arrow");
  //   const offSet = 200;

  //   function showScrollTopButton() {
  //     if (window.scrollY > offSet) {
  //       scrollButton.classList.add("visible");
  //     } else if (window.scrollY < offSet) {
  //       scrollButton.classList.remove("visible");
  //     }
  //   }
  // }

  return (
    <footer className="footer" role="contentinfo">
      {/* <button className="scroll-arrow" id="arrow" onClick={scrollTop}>
        <span>&lt;</span>
      </button> */}
      <hr />

      <div role="navigation">
        <h3 className="mt2">Site Navigation</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/case-studies">Case Studies</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
          <li>
            <a href="/ux-patterns">UX Patterns</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="mailto:halo13design@gmail.com?subject=Hello!">Contact</a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <div>{SITE_TITLE}</div>
        <div>MGA / OKC / MIA</div>
        <div> © 1981 - {date}</div>
        <img src="/mio.svg" alt={SITE_TITLE} className="mt2" />
      </div>
    </footer>
  );
}

export default Footer;
