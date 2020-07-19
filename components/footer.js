import { SITE_TITLE } from "utils/configs";

function Footer() {
  let date = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

    window.addEventListener("scroll", debounce(showScrollTopButton, 10), false);

    var scrollButton = document.getElementById("arrow");
    const offSet = 200;

    function showScrollTopButton() {
      if (window.scrollY > offSet) {
        scrollButton.classList.add("visible");
      } else if (window.scrollY < offSet) {
        scrollButton.classList.remove("visible");
      }
    }
  }

  return (
    <footer className="footer" role="contentinfo">
      <button className="scroll-arrow" id="arrow" onClick={scrollTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
        </svg>
      </button>
      <hr />

      <div role="navigation">
        <h3 className="mt2">Site Navigation</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/thoughts">Thoughts</a>
          </li>
          <li>
            <a href="/case-studies">Case Studies</a>
          </li>
          <li>
            <a href="/reviews">Reviews</a>
          </li>
          <li>
            <a href="/ux-patterns">UX Patterns</a>
          </li>
        </ul>

        <ul>
          {/* <li>
            <a href="/about">About</a>
          </li> */}
          <li>
            <a href="mailto:halo13design@gmail.com?subject=Hello!">Contact</a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <div>{SITE_TITLE}</div>
        <div>MGA / OKC / MIA</div>
        <div> © 1981 - {date}</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 75 31"
          className="mt2 mr1"
        >
          <path
            d="M48.9 24.9s27.5-9.1 11.5-22.7c12.6 8.4 7.2 14.9 7.2 14.9s3.3-1.6 3.3-2.6c0 0 .7 3.9-3.1 6.2l3.2.1c-2.9 3-16.2 5.6-16.2 5.6s11.8-2.9 12.7-4.5c0 0-2.1-.7-2.4-.9 0 0 4.3-1.8 4.2-3.6 0 0-2.9 1.1-3.6 1.1 0 0 1.4-2.4 1-2.9 0 0-.8.9-6.1 4.3-5.3 3.3-11.7 5-11.7 5m-10.3-.5c-8.2 0-14.8 1.2-14.8 2.6 0 1.5 6.7 2.6 14.8 2.6 8.2 0 14.8-1.2 14.8-2.6 0-1.4-6.6-2.6-14.8-2.6zm.1 4.7c-6.6 0-11.9-.9-11.9-2.1s5.3-2.1 11.9-2.1 11.9.9 11.9 2.1-5.3 2.1-11.9 2.1zm-11-4.2S.2 15.8 16.2 2.2C3.6 10.5 9 17 9 17l-5.1-1.3 4.9 4.9-3.2.8c0-.2 16.2 4.9 16.2 4.9L9.1 21.7s2.1-.7 2.4-.9l-4.2-3.6s2.9 1.1 3.6 1.1l-1-2.9s.8.9 6.1 4.3c5.4 3.5 11.7 5.2 11.7 5.2z"
            fill="#010101"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 34"
          className="mt2"
        >
          <path
            d="M29.1 10.3c-.6-1.4-3.6-1.9-3.8-2.9-.1-.4-.9-.8-1-1.1 0 0-.5-.1-.6-.4-.3-.7.6-2.2.4-2.7-.3-.9-4.6-1.6-7.1-2.5-1.1-.4-1.4-.5-2-.5-.5 0-1.9-.2-2.6.5-.2.2-6.9 1.9-7.4 2.7-.4.6 0 1.8.1 2.3.1.9-.4 1.8-.6 1.9 0 .1-.8.3-.8.3l-.7.6c0 .2-2.6.9-2.8 2.2-.2.8 1 .8 1.1 2 .6.2 1.3 2.2 1.3 2.3.2.1 1.6 1.8 1.7 2.2 0 0 .2 1.9.1 2.1.2.2 3 2.7 2.8 3.3.1.1.3 2.1.2 2.3.2 0 1.7 2.5 1.7 2.6 0 .1.3-.2.9 1.1 0 .1.7 1.5.7 1.6 0 0 1.1.9 1.3 1.2.1 0 2.2 1.1 2.7 2.4.1-.2 2.8-2.7 2.8-2.7l.5-.5c.1-.1.2-.7.8-1.2.1-.1 1.1-1 1.1-.9 0 0 1.2-1.5 1.3-2 0 0 .1-1 .1-1.1 0-.2 1.5-2.3 1.5-2.3 0-.1.5-2 .5-2s0-.8.3-1.4c.1-.1 1-1.4 1.6-1.8 0 0 .8-1.6 1.3-2.1l.2-1.3.7-1.3c.2-1.4 2-2.1 1.7-2.9zM11.3 19l-3.6-5.3 3.6-5.3h2.4l-3.5 5.3 3.5 5.3h-2.4zm2.3-4.2v-2.4h2.2v2.4h-2.2zM18 19h-2.4l3.5-5.3-3.5-5.3H18l3.6 5.3L18 19z"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#231f20"
          />
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
