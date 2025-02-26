$(document).ready(function () {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
}),
  $(document).ready(function () {
    $(".navbar-toggler").click(function () {
      $(this).toggleClass("active");
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".perfil-img");
    e.addEventListener("mousemove", (t) => {
      let n = t.clientX / 100,
        r = t.clientY / 100;
      gsap.to(e, { rotationY: n, rotationX: r, transformPerspective: 3e3 });
    });
  });
const typedTextSpan = document.querySelector(".typed-text"),
  cursorSpan = document.querySelector(".cursor"),
  textArray = [
    "Dancer",
    "Coach",
    "Writer",
    "Web Developer",
    "Designer",
    "Videographer",
  ],
  typingDelay = 200,
  erasingDelay = 100,
  newTextDelay = 2e3;
let textArrayIndex = 0,
  charIndex = 0;
function type() {
  charIndex < textArray[textArrayIndex].length
    ? (cursorSpan.classList.contains("typing") ||
        cursorSpan.classList.add("typing"),
      (typedTextSpan.textContent +=
        textArray[textArrayIndex].charAt(charIndex)),
      charIndex++,
      setTimeout(type, typingDelay))
    : (cursorSpan.classList.remove("typing"), setTimeout(erase, newTextDelay));
}
function erase() {
  charIndex > 0
    ? (cursorSpan.classList.contains("typing") ||
        cursorSpan.classList.add("typing"),
      (typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      )),
      charIndex--,
      setTimeout(erase, erasingDelay))
    : (cursorSpan.classList.remove("typing"),
      textArrayIndex++,
      textArrayIndex >= textArray.length && (textArrayIndex = 0),
      setTimeout(type, typingDelay + 1100));
}
function myFunction() {
  var e = document.getElementById("dots"),
    t = document.getElementById("more"),
    n = document.getElementById("myBtn");
  "none" === e.style.display
    ? ((e.style.display = "inline"),
      (n.innerHTML = "Read more"),
      (t.style.display = "none"))
    : ((e.style.display = "none"),
      (n.innerHTML = "Read less"),
      (t.style.display = "inline"));
}
function downloadPDF() {
  const e = document.createElement("a");
  (e.href =
    "https://drive.google.com/uc?export=download&id=1-0dktiLR-NTesDKsW4YvlAz9SHkD5VmR"),
    (e.download = "yourfile.pdf"),
    e.click();
}
document.addEventListener("DOMContentLoaded", function () {
  textArray.length && setTimeout(type, newTextDelay + 250);
}),
  $(document).ready(function () {
    $(".show-column-button").click(function () {
      $(this).next(".column-content").fadeIn("slow"), $(this).hide();
    });
  }),
  $(function () {
    $("#imageContainer img.hidden").slice(0, 3).removeClass("hidden"),
      $("#loadMoreBtn").click(function (e) {
        e.preventDefault(),
          $("#imageContainer img.hidden").slice(0, 3).removeClass("hidden"),
          0 == $("#imageContainer img.hidden").length && $(this).hide();
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll(".fade-in-section"),
      t = new IntersectionObserver((e) => {
        e.forEach((e) => {
          e.isIntersecting &&
            (e.target.classList.add("is-visible"), t.unobserve(e.target));
        });
      });
    e.forEach((e) => {
      t.observe(e);
    });
  });
