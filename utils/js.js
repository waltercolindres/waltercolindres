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

var scrollButton = document.getElementById("arrow");
const offSet = 200;

function showScrollTopButton() {
  if (window.scrollY > offSet) {
    scrollButton.classList.add("visible");
  } else if (window.scrollY < offSet) {
    scrollButton.classList.remove("visible");
  }
}

function scrollZero() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", debounce(showScrollTopButton, 10), false);

function readingPosition() {
  var scrollTop =
    document.documentElement["scrollTop"] || document.body["scrollTop"];
  var scrollBottom =
    (document.documentElement["scrollHeight"] ||
      document.body["scrollHeight"]) - document.documentElement.clientHeight;
  scrollPercent = (scrollTop / scrollBottom) * 100 + "%";
  document
    .getElementById("_progress")
    .style.setProperty("--scroll", scrollPercent);
}

// https://medium.com/@nilayvishwakarma/build-a-scroll-progress-bar-with-vanilla-js-in-10-minutes-or-less-4ba07e2554f3
document.addEventListener("scroll", debounce(readingPosition, 10), {
  passive: true,
});
