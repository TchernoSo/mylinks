// Navbar collapse after click 
$(document).ready(function () {
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});

// Main Image effect
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(this).toggleClass("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let img = document.querySelector(".perfil-img");

  img.addEventListener("mousemove", (e) => {
    let x = e.clientX / 100;
    let y = e.clientY / 100;
    gsap.to(img, {
      rotationY: x,
      rotationX: y,
      transformPerspective: 3000,
    });
  });
});

//Type Effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Dancer",
  "Coach",
  "Writer",
  "Web Developer",
  "Designer",
  "Videographer",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// read more
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Tips From Me

$(document).ready(function () {
  $(".show-column-button").click(function () {
    $(this).next(".column-content").fadeIn("slow");
    $(this).hide(); // Optionally hide the button after clicking
  });
});

// Load more image effect
$(function () {
  const imagesPerLoad = 3;

  // Initially show the first set of images
  $("#imageContainer img.hidden").slice(0, imagesPerLoad).removeClass("hidden");

  // Click event for load more
  $("#loadMoreBtn").click(function (e) {
    e.preventDefault();
    $("#imageContainer img.hidden")
      .slice(0, imagesPerLoad)
      .removeClass("hidden");
    if ($("#imageContainer img.hidden").length == 0) {
      $(this).hide();
    }
  });
});


$(document).ready(function() {
  // Throttle function to limit the rate at which a function is executed
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  // Cache the elements to be faded in
  const fadeElements = $('.fade');

  // Function to check the visibility of elements
  function checkFadeIn() {
    const bottom_of_window = $(window).scrollTop() + $(window).height();

    fadeElements.each(function() {
      const $this = $(this);
      const bottom_of_object = $this.position().top + $this.outerHeight();

      if (bottom_of_window > bottom_of_object) {
        $this.css('opacity', 1);
      }
    });
  }

  // Apply initial visibility check
  checkFadeIn();

  // Attach the throttled scroll event
  $(window).scroll(throttle(checkFadeIn, 100));
  
  // Apply CSS transition for smooth fading
  fadeElements.css({
    'opacity': 0,
    'transition': 'opacity 0.9s'
  });
});

