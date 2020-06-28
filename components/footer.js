import Link from "next/link";
import { SITE_TITLE } from "utils/configs";

function Footer({ navProviders, navPatients, navLegal, navSocial }) {
  let date = new Date().getFullYear();

  return (
    <footer class="footer" role="contentinfo">
      <button class="scroll-arrow" id="arrow" onclick="scrollZero();">
        <span>&lt;</span>
      </button>
      <hr />

      <div role="navigation">
        <h3 class="mt2">Site Navigation</h3>
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

      <div class="copyright">
        <div>{SITE_TITLE}</div>
        <div>MGA / OKC / MIA</div>
        <div> © 1981 - {date}</div>
        <img src="/mio.svg" alt={SITE_TITLE} className="mt2" />
      </div>
    </footer>
  );
}

export default Footer;
