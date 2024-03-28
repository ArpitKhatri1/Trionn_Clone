let cursor = document.getElementById("cursor");
let currentMode = "dark";

let cursorPosition = cursor.getBoundingClientRect();
let pageTitle = document
  .getElementById("main-title-content")
  .getBoundingClientRect();

let buttonPos = document
  .getElementsByClassName("s1")[0]
  .getBoundingClientRect();
console.log(buttonPos);

document.addEventListener("mousemove", updateCursor);


function updateCursor(e) {
  cursor.style.top = e.clientY - 10 + "px";
  cursor.style.left = e.clientX - 10 + "px";
  console.log("hi")
}

//LIGHT MODE TOGGLE

let bodyElement = document.getElementById("scrollbar");

let lightModeButton = document.getElementsByClassName("light-mode-option")[0];


let firstTitleElement =
  document.getElementsByClassName("first-line-content")[0];

lightModeButton.addEventListener("click", () => {
  if (bodyElement.classList.contains("dark")) {
    bodyElement.classList.add("light");
    bodyElement.classList.remove("dark");
    currentMode = "light";

    gsap.to(".first-line-content", {
      color: "rgb(63, 65, 68)",
      duration: 0.05,
    });
    gsap.to(".mobile-fl-content", {
      color: "rgb(63, 65, 68)",
      duration: 0.05,
    });
  } else {
    bodyElement.classList.add("dark");
    bodyElement.classList.remove("light");
    currentMode = "dark";

    gsap.to(".first-line-content", {
      color: "rgb(224, 238, 238)",
      duration: 0.05,
    });
    gsap.to(".mobile-fl-content", {
      color: "rgb(224, 238, 238)",
      duration: 0.05,
    });
  }
});

//HAMBURGER MENU ANIMATIONS
let t5 = gsap.timeline();
function hamburgerAnimation() {
  let listItem = gsap.utils.toArray(".hs-list-item");
  let socialIcons = gsap.utils.toArray(".social-icons");

  listItem.forEach((section) => {
    t5.from(section, { y: 50, opacity: 0, duration: 0.3 }, "-=.1");
  });

  t5.from(".hs-email", { y: 50, opacity: 0, duration: 0.3 }, "-=1");
  t5.from(".hs-phone", { y: 50, opacity: 0, duration: 0.3 }, "-=.8");
  socialIcons.forEach((section) => {
    t5.from(section, { y: 20, opacity: 0, duration: 0.25 }, "-=.3");
  });
}

//Loader
let loaderElement = document.getElementsByClassName("loader")[0];

let hamburgerMenuButton = document.getElementsByClassName("hamburger-menu")[0];

hamburgerMenuButton.addEventListener("click", () => {
  if (hamburgerMenuButton.classList.contains("hidden")) {
    setTimeout(() => {
      document.getElementsByClassName("menu-close")[0].innerHTML = "CLOSE";
      let a = (document.getElementsByClassName(
        "main-page-container"
      )[0].style.opacity = 0);

      document.getElementsByClassName("main-page-container")[0].style.position =
        "fixed";

      document.getElementsByClassName(
        "main-navbar-container"
      )[0].style.visibility = "visible";

      document.getElementsByClassName(
        "hamburger-section-container"
      )[0].style.visibility = "visible";
      document.getElementsByClassName("hamburger-toggle")[0].classList.remove("hamburger-hide-class")
      document.getElementsByClassName("hamburger-toggle")[0].classList.add("hamburger-show-class")

      hamburgerMenuButton.classList.remove("hidden");
      hamburgerAnimation();

      window.scrollTo({
        top: 0,
        // behavior:"smooth"
      });
    }, 900);

    loaderElement.classList.add("animate");
    document.getElementsByClassName("loader2")[0].classList.remove("animate-2");
  } else {
    setTimeout(() => {
      document.getElementsByClassName("menu-close")[0].innerHTML = "MENU";
      let a = (document.getElementsByClassName(
        "main-page-container"
      )[0].style.opacity = 1);

      document.getElementsByClassName(
        "main-navbar-container"
      )[0].style.visibility = "visible";
      document.getElementsByClassName("main-page-container")[0].style.position =
        "inherit";

      document.getElementsByClassName(
        "hamburger-section-container"
      )[0].style.visibility = "hidden";

      hamburgerMenuButton.classList.add("hidden");
      document.getElementsByClassName("hamburger-toggle")[0].classList.add("hamburger-hide-class")
      document.getElementsByClassName("hamburger-toggle")[0].classList.remove("hamburger-show-class")
    }, 1000);

    loaderElement.classList.remove("animate");
    document.getElementsByClassName("loader2")[0].classList.add("animate-2");
  }
});

gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

let mmInitialLoad = gsap.matchMedia();


mmInitialLoad.add("(min-width:645px)", () => {
  let t2 = gsap.timeline();

  t2.from(".first-line-content", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    skewX: "-30deg",
    color: "transparent",
    filter: "blur(10px)",
    ease: "power1.out",
  })
    .from(
      ".second-line-content",
      {
        y: 50,
        opacity: 0,
        duration: 0.75,
        filter: "blur(10px)",
        skewX: "-30deg",
        ease: "power1.out",
      },
      "-=.4"
    )
    .from(".punch-line-container", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    })
    .from(
      ".video-down-arrow",
      { y: 20, opacity: 0, duration: 0.5, ease: "power1.out" },
      "-=.7"
    )
    .from(
      ".s1",
      { y: 50, opacity: 0, duration: 1, stagger: 0.3, ease: "power1.out" },
      "-=.4"
    );
});

mmInitialLoad.add("(max-width:644px)", () => {
  let t2 = gsap.timeline();

  t2.from(".mobile-fl-content", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    skewX: "-30deg",
    color: "transparent",
    filter: "blur(10px)",
    ease: "power1.out",
  })
    .from(
      ".mobile-sl-content",
      {
        y: 50,
        opacity: 0,
        duration: 0.75,
        filter: "blur(10px)",
        skewX: "-30deg",
        ease: "power1.out",
      },
      "-=.4"
    )
    .from(
      ".mobile-tl-content",
      {
        y: 50,
        opacity: 0,
        duration: 0.75,
        filter: "blur(10px)",
        skewX: "-30deg",
        ease: "power1.out",
      },
      "-=.4"
    )
    .from(
      ".punch-line-container",
      {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      },
      "-=.2"
    )
    .from(
      ".video-down-arrow",
      { y: 20, opacity: 0, duration: 0.5, ease: "power1.out" },
      "-=.7"
    )
    .from(
      ".s1",
      { y: 50, opacity: 0, duration: 1, stagger: 0.3, ease: "power1.out" },
      "-=.4"
    );
});

let mmVideoAnimation = gsap.matchMedia();

mmVideoAnimation.add("(min-width:768px)", () => {
  setTimeout(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-animation-video",
        scrub: true,
        markers: false,
        start: "-100% center",
        end: "550% center",
        toggleActions: "play complete ",
      },
    });

    t1.from(".video-animation-video", {
      y: -180,
      width: "14%",
      x: 0,
      borderRadius: "99rem",
    });
  }, 2500);
});

// Recent Work

let recentWorkST = {
  trigger: ".who-are-we-title",
  scrub: true,
  markers: false,
  start: "0% bottom",
  end: "100% center",
};

gsap.from(".waw-first-line", { xPercent: -60, scrollTrigger: recentWorkST });
gsap.from(".waw-second-line", { xPercent: -60, scrollTrigger: recentWorkST });

gsap.to(".waw-first-line", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".who-are-we-title",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "70% center",
  },
});

gsap.to(".waw-second-line", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".who-are-we-title",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "70% center",
  },
});

let wp_text = new SplitType(".recent-work-puncline-text");

gsap.from(wp_text.lines, {
  scrollTrigger: {
    trigger: ".recent-work-punchline",
    markers: false,
    scrub: false,
    start: "-240% center",
    end: "0% center",
    toggleActions: "play none reverse reverse",
  },
  y: 50,
  duration: 0.6,
  stagger: 0.2,
});

gsap.from(".recent-work-button", {
  y: 100,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".recent-work-punchline",
    markers: false,
    scrub: false,
    start: "-240% center",
    end: "0% center",
    toggleActions: "play none reverse reverse",
  },
});

//Work-showcase

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".work-row-image",
    scrub: true,
    markers: false,
    start: "-50% center",
    end: "50% center",
    toggleActions: "play complete ",
  },
});

let work_section_image_right = gsap.utils.toArray(".work-row-image-right");

work_section_image_right.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      scrub: true,
      markers: false,
      start: "0% bottom",
      end: "30% center",
      toggleActions: "play complete ",
    },
    rotate: "15deg",
    x: 300,
    y: 50,
  });
});

let work_section_image_left = gsap.utils.toArray(".work-row-image-left");

work_section_image_left.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      scrub: true,
      markers: false,
      start: "0% bottom",
      end: "30% center",
      toggleActions: "play complete ",
    },
    rotate: "-15deg",
    x: -300,
    y: 50,
  });
});

let mmRecentWorkText = gsap.matchMedia();

mmRecentWorkText.add("(min-width:1081px)", () => {
  let work_section_text = gsap.utils.toArray(".work-row-text");

  work_section_text.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        scrub: true,
        markers: false,
        start: "0% bottom",
        end: "10% center",
        toggleActions: "play complete ",
      },
      y: 150,
    });
  });
});

mmRecentWorkText.add("(max-width:1080px)", () => {
  let work_section_text = gsap.utils.toArray(".work-row-text");

  work_section_text.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        scrub: true,
        markers: false,
        start: "0% bottom",
        end: "10% center",
        toggleActions: "play complete ",
      },
      y: 60,
      opacity: 0,
    });
  });
});

//WHO WE ARE

let whoWeAreST = {
  trigger: ".recent-work-title",
  scrub: true,
  markers: false,
  start: "0% bottom",
  end: "100% center",
};

gsap.from(".recent-text-recent", { xPercent: 15, scrollTrigger: whoWeAreST });
gsap.from(".recent-text-work", { xPercent: -50, scrollTrigger: whoWeAreST });

gsap.to(".recent-text-recent", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".recent-work-title",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "100% center",
  },
});

gsap.to(".recent-text-work", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".recent-work-title",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "100% center",
  },
});

let wawLines = new SplitType(".waw-overflow-line");

gsap.from(wawLines.lines, {
  y: 70,
  stagger: 0.05,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".waw-p1",
    scrub: false,
    markers: false,
    start: "0% bottom",
    end: "-30% center",
    toggleActions: "play none reverse",
  },
});

gsap.from(".waw-popup", {
  y: 100,
  opacity: 0,
  duration: 0.7,
  ease: "power1.out",
  stagger: 0.2,

  scrollTrigger: {
    trigger: ".waw-p2-text",
    scrub: false,
    markers: false,
    start: "-50% center",
    end: "-30% center",
    toggleActions: "play none reverse",
  },
});

let card_left = gsap.utils.toArray(".cardleft");

card_left.forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      scrub: true,
      markers: false,
      start: "0% bottom",
      end: "60% center",
    },
    rotate: "-30deg",
    opacity: 0,
    x: -300,
  });
});

let card_right = gsap.utils.toArray(".cardright");

card_right.forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      scrub: true,
      markers: false,
      start: "0% bottom",
      end: "60% center",
    },
    rotate: "30deg",
    opacity: 0,
    x: 300,
  });
});

//PARTNER LOVE

let partnerLoveST = {
  trigger: ".pl-title",
  scrub: true,
  markers: false,
  start: "0% bottom",
  end: "120% center",
};

gsap.from(".pl-title-first-line", {
  xPercent: 40,
  scrollTrigger: partnerLoveST,
});
gsap.from(".pl-title-second-line", {
  xPercent: 100,
  scrollTrigger: partnerLoveST,
});

gsap.to(".pl-title-first-line", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".pl-title",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "70% center",
  },
});

gsap.to(".pl-title-second-line", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".pl-title",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "70% center",
  },
});
let plPunchline = new SplitType(".pl-puncline-text", { types: "lines" });
gsap.from(plPunchline.lines, {
  y: 70,
  stagger: 0.05,
  duration: 0.7,
  scrollTrigger: {
    trigger: ".partner-love-punchline",
    scrub: false,
    markers: false,
    start: "0% bottom",
    end: "-30% center",
    toggleActions: "play none reverse reverse",
  },
});
//REVIEW CARDS


let scrollContainer = document.getElementsByClassName("card-reviews")[0];

let isDragging = false;
let startX, startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  scrollContainer.classList.add("dragging");
  startX = e.pageX;
  console.log("hi");
};
const dragEnd = () => {
  isDragging = false;
  scrollContainer.classList.remove("dragging");
};
const dragging = (e) => {
  if (!isDragging) return;
  scrollContainer.scrollLeft =
    scrollContainer.scrollLeft - (e.pageX - startX) * 0.1;
};
scrollContainer.addEventListener("mousemove", dragging);
scrollContainer.addEventListener("mousedown", dragStart);
scrollContainer.addEventListener("mouseup", dragEnd);

//marquee

let marqueef = document.getElementsByClassName("dive-in-container")[0];
let marqueer = document.getElementsByClassName("dive-in-container-reverse")[0];

const flexContainer = document.querySelector(".dive-in-container");
const style = window.getComputedStyle(flexContainer);
const gapValue = style.getPropertyValue("gap");

const gapDistance = parseFloat(gapValue);

console.log(gapDistance);

let distanceTranX =
  -1 *
  (document.getElementsByClassName("dive-in-container")[0].children[0]
    .clientWidth +
    gapDistance);
let distanceTranXrev =
  -1 *
  (document.getElementsByClassName("dive-in-container-reverse")[0].children[0]
    .clientWidth +
    gapDistance);

console.log(distanceTranX);

gsap.fromTo(
  marqueef.children,
  { x: 0 },
  { x: distanceTranX, duration: 5, ease: "none", repeat: -1 }
);

gsap.fromTo(
  marqueer.children,
  { x: distanceTranXrev },
  { x: 0, duration: 5, ease: "none", repeat: -1 }
);

//DRIBBLE POP UP
let mmDribblePopUp = gsap.matchMedia();

mmDribblePopUp.add("(min-width:1025px)", () => {
  let stObject = {
    trigger: ".dribble-container",
    markers: false,
    scrub: true,
    start: "0% center",
    end: "70% center",
  };

  gsap.to(".i1", {
    scrollTrigger: stObject,
    xPercent: -80,
    yPercent: 80,
    rotate: "-30deg",
  });
  gsap.to(".i3", {
    scrollTrigger: stObject,
    xPercent: -80,
    yPercent: 30,
    rotate: "-15deg",
  });
  gsap.to(".i5", {
    scrollTrigger: stObject,
    xPercent: -30,
    yPercent: -10,
    rotate: "-30deg",
  });

  gsap.to(".i2", {
    scrollTrigger: stObject,
    xPercent: 80,
    yPercent: 80,
    rotate: "30deg",
  });
  gsap.to(".i4", {
    scrollTrigger: stObject,
    xPercent: 80,
    yPercent: 30,
    rotate: "15deg",
  });
  gsap.to(".i6", {
    scrollTrigger: stObject,
    xPercent: 30,
    yPercent: -10,
    rotate: "30deg",
  });

  gsap.to(".dribble-pop-up", { scrollTrigger: stObject, y: -100, opacity: 1 });
});

mmDribblePopUp.add("(min-width:768px) and (max-width:1024px)", () => {
  let stObject = {
    trigger: ".dribble-container",
    markers: false,
    scrub: true,
    start: "-20% center",
    end: "70% center",
  };

  gsap.to(".i1", { scrollTrigger: stObject, xPercent: -60 });
  gsap.to(".i3", { scrollTrigger: stObject, xPercent: -100 });
  gsap.to(".i5", { scrollTrigger: stObject, xPercent: -60 });

  gsap.to(".i2", { scrollTrigger: stObject, xPercent: 60 });
  gsap.to(".i4", { scrollTrigger: stObject, xPercent: 100 });
  gsap.to(".i6", { scrollTrigger: stObject, xPercent: 60 });
  gsap.to(".dribble-pop-up", { scrollTrigger: stObject, y: -100, opacity: 1 });
});

mmDribblePopUp.add(" (max-width:767px)", () => {
  let stObject = {
    trigger: ".dribble-container",
    markers: false,
    scrub: true,
    start: "-30% center",
    end: "70% center",
  };

  gsap.to(".i1", { scrollTrigger: stObject, xPercent: -60 });
  gsap.to(".i3", { scrollTrigger: stObject, xPercent: -100 });

  gsap.to(".i2", { scrollTrigger: stObject, xPercent: 120 });
  gsap.to(".i4", { scrollTrigger: stObject, xPercent: 60 });

  gsap.to(".dribble-pop-up", { scrollTrigger: stObject, y: -100, opacity: 1 });
});

let dlLogoText = new SplitType(".dl-logo-text");

gsap.from(dlLogoText.lines, {
  y: 70,
  stagger: 0.05,
  duration: 1,
  scrollTrigger: {
    trigger: ".dribble-container",
    markers: false,
    scrub: false,
    start: "10% center",
    end: "50% center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".dribble-button", {
  y: 70,
  opacity: 0,
  scrollTrigger: {
    trigger: ".dribble-container",
    markers: false,
    scrub: false,
    start: "25% center",
    end: "50% center",
    toggleActions: "play none none reverse",
  },
});

//ACCOUNTS

let jungleTrekST = {
  trigger: ".sm-title",
  scrub: true,
  markers: false,
  start: "0% bottom",
  end: "120% center",
};

gsap.from(".sm-title-line1", { xPercent: 50, scrollTrigger: jungleTrekST });
gsap.from(".sm-title-line2", { xPercent: -50, scrollTrigger: jungleTrekST });
gsap.from(".sm-title-line3", { xPercent: 50, scrollTrigger: jungleTrekST });

gsap.to(".sm-title-line1", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".sm-title",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "70% center",
  },
});

gsap.to(".sm-title-line2", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".sm-title",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "70% center",
  },
});

gsap.to(".sm-title-line3", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".sm-title",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "70% center",
  },
});

//hover effects

let mmSmAccountsHover = gsap.matchMedia();

mmSmAccountsHover.add("(min-width:1024px)", () => {
  let hoverElement1 = document.getElementsByClassName("ac1")[0];

  let h1animation1 = gsap.to(".ac1", {
    marginLeft: "-8rem",
    marginRight: "-8rem",
    duration: 1,
    ease: "power1.out",
  });
  let h1animation2 = gsap.to(".ic1", {
    rotate: "360deg",
    duration: 1,
    ease: "power1.out",
  });

  hoverElement1.addEventListener("mouseenter", () => {
    h1animation1.play();
    h1animation2.play();
  });
  hoverElement1.addEventListener("mouseleave", () => {
    h1animation1.reverse();
    h1animation2.reverse();
  });
  h1animation1.reverse();
  h1animation2.reverse();

  let hoverElement2 = document.getElementsByClassName("ac2")[0];

  let h2animation1 = gsap.to(".ac2", {
    marginLeft: "-8rem",
    marginRight: "-8rem",
    duration: 1,
    ease: "power1.out",
  });
  let h2animation2 = gsap.to(".ic2", {
    rotate: "360deg",
    duration: 1,
    ease: "power1.out",
  });

  h2animation1.reverse();
  h2animation2.reverse();
  hoverElement2.addEventListener("mouseenter", () => {
    h2animation1.play();
    h2animation2.play();
  });
  hoverElement2.addEventListener("mouseleave", () => {
    h2animation1.reverse();
    h2animation2.reverse();
  });

  let hoverElement3 = document.getElementsByClassName("ac3")[0];

  let h3animation1 = gsap.to(".ac3", {
    marginLeft: "-8rem",
    marginRight: "-8rem",
    duration: 1,
    ease: "power1.out",
  });
  let h3animation2 = gsap.to(".ic3", {
    rotate: "360deg",
    duration: 1,
    ease: "power1.out",
  });
  h3animation1.reverse();
  h3animation2.reverse();
  hoverElement3.addEventListener("mouseenter", () => {
    h3animation1.play();
    h3animation2.play();
  });
  hoverElement3.addEventListener("mouseleave", () => {
    h3animation1.reverse();
    h3animation2.reverse();
  });

  let hoverElement4 = document.getElementsByClassName("ac4")[0];

  let h4animation1 = gsap.to(".ac4", {
    marginLeft: "-8rem",
    marginRight: "-8rem",
    duration: 1,
    ease: "power1.out",
  });
  let h4animation2 = gsap.to(".ic4", {
    rotate: "360deg",
    duration: 1,
    ease: "power1.out",
  });
  h4animation1.reverse();
  h4animation2.reverse();
  hoverElement4.addEventListener("mouseenter", () => {
    h4animation1.play();
    h4animation2.play();
  });
  hoverElement4.addEventListener("mouseleave", () => {
    h4animation1.reverse();
    h4animation2.reverse();
  });

  let hoverElement5 = document.getElementsByClassName("ac5")[0];

  let h5animation1 = gsap.to(".ac5", {
    marginLeft: "-8rem",
    marginRight: "-8rem",
    duration: 1,
    ease: "power1.out",
  });
  let h5animation2 = gsap.to(".ic5", {
    rotate: "360deg",
    duration: 1,
    ease: "power1.out",
  });
  h5animation1.reverse();
  h5animation2.reverse();
  hoverElement5.addEventListener("mouseenter", () => {
    console.log("played");
    h5animation1.play();
    h5animation2.play();
  });
  hoverElement5.addEventListener("mouseleave", () => {
    h5animation1.reverse();
    h5animation2.reverse();
  });

  hoverElement5.addEventListener("mouseout", () => {
    console.log("mouseout");
  });
});

let accountsList = gsap.utils.toArray(".sm-account");

accountsList.forEach((section) => {
  gsap.from(section, {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: section,
      markers: false,
      start: "100% bottom",
      end: "10% center",
      toggleActions: "play none none reverse",
    },
  });
});

//FOOTER

let footerST = {
  trigger: ".ft-lines",
  scrub: true,
  markers: false,
  start: "0% bottom",
  end: "100% center",
};

gsap.from(".ft-line1", { xPercent: -40, scrollTrigger: footerST });
gsap.from(".ft-line2", { xPercent: -40, scrollTrigger: footerST });

gsap.to(".ft-line1", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".ft-lines",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "70% center",
  },
});

gsap.to(".ft-line2", {
  backgroundPositionX: "0%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".ft-lines",
    scrub: true,
    markers: false,
    start: "0% bottom",
    end: "70% center",
  },
});

gsap.from(".ft-button", {
  y: 70,
  opacity: 0,
  scrollTrigger: {
    trigger: ".ft-button",
    markers: false,
    start: "0% bottom",
    end: "100% center",
    toggleActions: "play none none reverse",
  },
});

let footerLines = gsap.utils.toArray(".footer-line");

footerLines.forEach((section) => {
  gsap.from(section, {
    y: 30,
    opacity: 0,
    scrollTrigger: {
      trigger: section,
      markers: false,
      start: "50% bottom",
      end: "100% center",
      toggleActions: "play none none reverse",
    },
  });
});

let mmFooterAnimation = gsap.matchMedia();

mmFooterAnimation.add("(min-width:961px)", () => {
  gsap.from(".contact-info", {
    y: 30,
    opacity: 0,
    scrollTrigger: {
      trigger: ".contact-info",
      markers: false,
      start: "20% bottom",
      end: "100% center",
      toggleActions: "play none none reverse",
    },
  });
});

mmFooterAnimation.add("(max-width:960px)", () => {
  let footerElements = gsap.utils.toArray(".ci-div");

  footerElements.forEach((section) => {
    gsap.from(section, {
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: section,
        markers: false,
        start: "0% bottom",
        end: "100% center",
        toggleActions: "play none none reverse",
      },
    });
  });
});

gsap.from(".watermark", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".watermark",
    markers: false,
    start: "0% bottom",
    end: "100% center",
    toggleActions: "play none none reverse",
  },
});

// gsap.from(".circular-lion", {
//   x: 200,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".recent-work-section",
//     markers: false,
//     scrub: true,
//     start: "-80% center",
//     end: "200% center",
//     toggleActions: "play none none reverse",
//   },
// });

//Magnetic effects

let xyz = document.getElementsByClassName("magnetic-button")[0];

xyz.addEventListener("mouseover", () => {
  console.log("hi");
});

setTimeout(() => {
  let buttonElement = document.querySelectorAll(".magnetic-button");

  let magneticbuttons = document.querySelectorAll(".magnetic-buttons");

  magneticbuttons.forEach((buttons) => {
    buttons.addEventListener("mousemove", (e) => {
      console.log("hover");
      buttons.classList.add("mgb");
      const position = buttons.getBoundingClientRect();
      let x = e.clientX - position.left - position.width / 2;
      let y = e.clientY - position.top - position.height / 2;
      buttons.style.transform = `translate(${x * 0.4}px,${y * 0.4}px)`;
    });
    buttons.addEventListener("mouseout", () => {
      buttons.classList.remove("mgb");
      buttons.style.transform = `translate(0px,0px)`;
    });
  });


  buttonElement.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      button.classList.add("mgp");
      const position = button.getBoundingClientRect();
      console.log(position);
      console.log(e.pageX);
      let x = e.clientX - position.left - position.width / 2;
      let y = e.clientY - position.top - position.height / 2;

      button.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`;

      button.children[0].style.transform = `translate(${x * 0.25}px,${
        y * 0.45
      }px)`;
    });

    button.addEventListener("mouseout", () => {
      button.classList.remove("mgp");
      button.style.transform = `translate(0px,0px)`;
      button.children[0].style.transform = `translate(0px,0px)`;
    });
  });
}, 2000);

document.getElementsByClassName("scrollup")[0].addEventListener("click", () => {
  console.log("hi");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document
  .getElementsByClassName("video-down-arrow")[0]
  .addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });

let lightImage = document.getElementsByClassName("light-mode-image")[0];

lightModeButton.addEventListener("click", () => {
  if (currentMode == "dark") {
    lightImage.src = "./public/images/light-mode-icon.035572eb.svg";
  } else {
    console.log("hi");
    lightImage.src = "./public/images/dark-mode-icon.db0ad99a.svg";
  }
});











/*
MIT License

Copyright (c) 2017 Pavel Dobryakov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/





function ColorFunction(){

const canvas = document.getElementsByTagName('canvas')[0];
resizeCanvas();

let backColor;
if(currentMode == "dark"){
  backColor =  {
    r:5,g:5,b:6

  }

}else{
  backColor = {
    r:238,
    g:243,
    b:243
  }

}
let config = {
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 9,
    VELOCITY_DISSIPATION: 0.67,
    PRESSURE: 0.2,
    PRESSURE_ITERATIONS: 20,
    CURL: 4,
    SPLAT_RADIUS: 0.11,
    SPLAT_FORCE: 6000,
    SHADING: true,
    COLORFUL: false,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: backColor,
    TRANSPARENT: false,
    BLOOM: true,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.6,
    BLOOM_SOFT_KNEE: 0.7,
    SUNRAYS: true,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: 1.0,
}

function pointerPrototype () {
    this.id = -1;
    this.texcoordX = 0;
    this.texcoordY = 0;
    this.prevTexcoordX = 0;
    this.prevTexcoordY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.down = false;
    this.moved = false;
    this.color = [255, 255, 255];
}

let pointers = [];
let splatStack = [];

pointers.push(new pointerPrototype());

const { gl, ext } = getWebGLContext(canvas);

if (isMobile()) {
    config.DYE_RESOLUTION = 512;
}
if (!ext.supportLinearFiltering) {
    config.DYE_RESOLUTION = 512;
    config.SHADING = false;
    config.BLOOM = false;
    config.SUNRAYS = false;
}

// startGUI();

function getWebGLContext (canvas) {
    const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };

    let gl = canvas.getContext('webgl2', params);
    const isWebGL2 = !!gl;
    if (!isWebGL2)
        gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);

    let halfFloat;
    let supportLinearFiltering;
    if (isWebGL2) {
        gl.getExtension('EXT_color_buffer_float');
        supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
    } else {
        halfFloat = gl.getExtension('OES_texture_half_float');
        supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
    let formatRGBA;
    let formatRG;
    let formatR;

    if (isWebGL2)
    {
        formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
    }
    else
    {
        formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
    }

    // ga('send', 'event', isWebGL2 ? 'webgl2' : 'webgl', formatRGBA == null ? 'not supported' : 'supported');

    return {
        gl,
        ext: {
            formatRGBA,
            formatRG,
            formatR,
            halfFloatTexType,
            supportLinearFiltering
        }
    };
}

function getSupportedFormat (gl, internalFormat, format, type)
{
    if (!supportRenderTextureFormat(gl, internalFormat, format, type))
    {
        switch (internalFormat)
        {
            case gl.R16F:
                return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
            case gl.RG16F:
                return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
            default:
                return null;
        }
    }

    return {
        internalFormat,
        format
    }
}

function supportRenderTextureFormat (gl, internalFormat, format, type) {
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

    let fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

    let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    return status == gl.FRAMEBUFFER_COMPLETE;
}



function isMobile () {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function captureScreenshot () {
    let res = getResolution(config.CAPTURE_RESOLUTION);
    let target = createFBO(res.width, res.height, ext.formatRGBA.internalFormat, ext.formatRGBA.format, ext.halfFloatTexType, gl.NEAREST);
    render(target);

    let texture = framebufferToTexture(target);
    texture = normalizeTexture(texture, target.width, target.height);

    let captureCanvas = textureToCanvas(texture, target.width, target.height);
    let datauri = captureCanvas.toDataURL();
    downloadURI('fluid.png', datauri);
    URL.revokeObjectURL(datauri);
}

function framebufferToTexture (target) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
    let length = target.width * target.height * 4;
    let texture = new Float32Array(length);
    gl.readPixels(0, 0, target.width, target.height, gl.RGBA, gl.FLOAT, texture);
    return texture;
}

function normalizeTexture (texture, width, height) {
    let result = new Uint8Array(texture.length);
    let id = 0;
    for (let i = height - 1; i >= 0; i--) {
        for (let j = 0; j < width; j++) {
            let nid = i * width * 4 + j * 4;
            result[nid + 0] = clamp01(texture[id + 0]) * 255;
            result[nid + 1] = clamp01(texture[id + 1]) * 255;
            result[nid + 2] = clamp01(texture[id + 2]) * 255;
            result[nid + 3] = clamp01(texture[id + 3]) * 255;
            id += 4;
        }
    }
    return result;
}

function clamp01 (input) {
    return Math.min(Math.max(input, 0), 1);
}

function textureToCanvas (texture, width, height) {
    let captureCanvas = document.createElement('canvas');
    let ctx = captureCanvas.getContext('2d');
    captureCanvas.width = width;
    captureCanvas.height = height;

    let imageData = ctx.createImageData(width, height);
    imageData.data.set(texture);
    ctx.putImageData(imageData, 0, 0);

    return captureCanvas;
}

function downloadURI (filename, uri) {
    let link = document.createElement('a');
    link.download = filename;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

class Material {
    constructor (vertexShader, fragmentShaderSource) {
        this.vertexShader = vertexShader;
        this.fragmentShaderSource = fragmentShaderSource;
        this.programs = [];
        this.activeProgram = null;
        this.uniforms = [];
    }

    setKeywords (keywords) {
        let hash = 0;
        for (let i = 0; i < keywords.length; i++)
            hash += hashCode(keywords[i]);

        let program = this.programs[hash];
        if (program == null)
        {
            let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
            program = createProgram(this.vertexShader, fragmentShader);
            this.programs[hash] = program;
        }

        if (program == this.activeProgram) return;

        this.uniforms = getUniforms(program);
        this.activeProgram = program;
    }

    bind () {
        gl.useProgram(this.activeProgram);
    }
}

class Program {
    constructor (vertexShader, fragmentShader) {
        this.uniforms = {};
        this.program = createProgram(vertexShader, fragmentShader);
        this.uniforms = getUniforms(this.program);
    }

    bind () {
        gl.useProgram(this.program);
    }
}

function createProgram (vertexShader, fragmentShader) {
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        console.trace(gl.getProgramInfoLog(program));

    return program;
}

function getUniforms (program) {
    let uniforms = [];
    let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
        let uniformName = gl.getActiveUniform(program, i).name;
        uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
    }
    return uniforms;
}

function compileShader (type, source, keywords) {
    source = addKeywords(source, keywords);

    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        console.trace(gl.getShaderInfoLog(shader));

    return shader;
};

function addKeywords (source, keywords) {
    if (keywords == null) return source;
    let keywordsString = '';
    keywords.forEach(keyword => {
        keywordsString += '#define ' + keyword + '\n';
    });
    return keywordsString + source;
}

const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`);

const blurVertexShader = compileShader(gl.VERTEX_SHADER, `
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`);

const blurShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`);

const copyShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`);

const clearShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`);

const colorShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`);

const checkerboardShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;

    #define SCALE 25.0

    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`);

const displayShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;

        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);

        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);

        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif

    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif

        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`;

const bloomPrefilterShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`);

const bloomBlurShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`);

const bloomFinalShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`);

const sunraysMaskShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`);

const sunraysShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`);

const splatShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`);

const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,
    ext.supportLinearFiltering ? null : ['MANUAL_FILTERING']
);

const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`);

const curlShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`);

const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`);

const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`);

const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`);

const blit = (() => {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    return (target, clear = false) => {
        if (target == null)
        {
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
        else
        {
            gl.viewport(0, 0, target.width, target.height);
            gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        }
        if (clear)
        {
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        // CHECK_FRAMEBUFFER_STATUS();
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    }
})();

function CHECK_FRAMEBUFFER_STATUS () {
    let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (status != gl.FRAMEBUFFER_COMPLETE)
        console.trace("Framebuffer error: " + status);
}

let dye;
let velocity;
let divergence;
let curl;
let pressure;
let bloom;
let bloomFramebuffers = [];
let sunrays;
let sunraysTemp;

let ditheringTexture = createTextureAsync('LDR_LLL1_0.png');

const blurProgram            = new Program(blurVertexShader, blurShader);
const copyProgram            = new Program(baseVertexShader, copyShader);
const clearProgram           = new Program(baseVertexShader, clearShader);
const colorProgram           = new Program(baseVertexShader, colorShader);
const checkerboardProgram    = new Program(baseVertexShader, checkerboardShader);
const bloomPrefilterProgram  = new Program(baseVertexShader, bloomPrefilterShader);
const bloomBlurProgram       = new Program(baseVertexShader, bloomBlurShader);
const bloomFinalProgram      = new Program(baseVertexShader, bloomFinalShader);
const sunraysMaskProgram     = new Program(baseVertexShader, sunraysMaskShader);
const sunraysProgram         = new Program(baseVertexShader, sunraysShader);
const splatProgram           = new Program(baseVertexShader, splatShader);
const advectionProgram       = new Program(baseVertexShader, advectionShader);
const divergenceProgram      = new Program(baseVertexShader, divergenceShader);
const curlProgram            = new Program(baseVertexShader, curlShader);
const vorticityProgram       = new Program(baseVertexShader, vorticityShader);
const pressureProgram        = new Program(baseVertexShader, pressureShader);
const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);

const displayMaterial = new Material(baseVertexShader, displayShaderSource);

function initFramebuffers () {
    let simRes = getResolution(config.SIM_RESOLUTION);
    let dyeRes = getResolution(config.DYE_RESOLUTION);

    const texType = ext.halfFloatTexType;
    const rgba    = ext.formatRGBA;
    const rg      = ext.formatRG;
    const r       = ext.formatR;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

    gl.disable(gl.BLEND);

    if (dye == null)
        dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
    else
        dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);

    if (velocity == null)
        velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
    else
        velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);

    divergence = createFBO      (simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    curl       = createFBO      (simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    pressure   = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);

    initBloomFramebuffers();
    initSunraysFramebuffers();
}

function initBloomFramebuffers () {
    let res = getResolution(config.BLOOM_RESOLUTION);

    const texType = ext.halfFloatTexType;
    const rgba = ext.formatRGBA;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

    bloom = createFBO(res.width, res.height, rgba.internalFormat, rgba.format, texType, filtering);

    bloomFramebuffers.length = 0;
    for (let i = 0; i < config.BLOOM_ITERATIONS; i++)
    {
        let width = res.width >> (i + 1);
        let height = res.height >> (i + 1);

        if (width < 2 || height < 2) break;

        let fbo = createFBO(width, height, rgba.internalFormat, rgba.format, texType, filtering);
        bloomFramebuffers.push(fbo);
    }
}

function initSunraysFramebuffers () {
    let res = getResolution(config.SUNRAYS_RESOLUTION);

    const texType = ext.halfFloatTexType;
    const r = ext.formatR;
    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

    sunrays     = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);
    sunraysTemp = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);
}

function createFBO (w, h, internalFormat, format, type, param) {
    gl.activeTexture(gl.TEXTURE0);
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

    let fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);

    let texelSizeX = 1.0 / w;
    let texelSizeY = 1.0 / h;

    return {
        texture,
        fbo,
        width: w,
        height: h,
        texelSizeX,
        texelSizeY,
        attach (id) {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            return id;
        }
    };
}

function createDoubleFBO (w, h, internalFormat, format, type, param) {
    let fbo1 = createFBO(w, h, internalFormat, format, type, param);
    let fbo2 = createFBO(w, h, internalFormat, format, type, param);

    return {
        width: w,
        height: h,
        texelSizeX: fbo1.texelSizeX,
        texelSizeY: fbo1.texelSizeY,
        get read () {
            return fbo1;
        },
        set read (value) {
            fbo1 = value;
        },
        get write () {
            return fbo2;
        },
        set write (value) {
            fbo2 = value;
        },
        swap () {
            let temp = fbo1;
            fbo1 = fbo2;
            fbo2 = temp;
        }
    }
}

function resizeFBO (target, w, h, internalFormat, format, type, param) {
    let newFBO = createFBO(w, h, internalFormat, format, type, param);
    copyProgram.bind();
    gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
    blit(newFBO);
    return newFBO;
}

function resizeDoubleFBO (target, w, h, internalFormat, format, type, param) {
    if (target.width == w && target.height == h)
        return target;
    target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
    target.write = createFBO(w, h, internalFormat, format, type, param);
    target.width = w;
    target.height = h;
    target.texelSizeX = 1.0 / w;
    target.texelSizeY = 1.0 / h;
    return target;
}

function createTextureAsync (url) {
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));

    let obj = {
        texture,
        width: 1,
        height: 1,
        attach (id) {
            gl.activeTexture(gl.TEXTURE0 + id);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            return id;
        }
    };

    let image = new Image();
    image.onload = () => {
        obj.width = image.width;
        obj.height = image.height;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    };
    image.src = url;

    return obj;
}

function updateKeywords () {
    let displayKeywords = [];
    if (config.SHADING) displayKeywords.push("SHADING");
    if (config.BLOOM) displayKeywords.push("BLOOM");
    if (config.SUNRAYS) displayKeywords.push("SUNRAYS");
    displayMaterial.setKeywords(displayKeywords);
}

updateKeywords();
initFramebuffers();
// multipleSplats(parseInt(Math.random() * 20) + 5);

let lastUpdateTime = Date.now();
let colorUpdateTimer = 0.0;
update();

function update () {
    const dt = calcDeltaTime();
    if (resizeCanvas())
        initFramebuffers();
    updateColors(dt);
    applyInputs();
    if (!config.PAUSED)
        step(dt);
    render(null);
    requestAnimationFrame(update);
}

function calcDeltaTime () {
    let now = Date.now();
    let dt = (now - lastUpdateTime) / 1000;
    dt = Math.min(dt, 0.016666);
    lastUpdateTime = now;
    return dt;
}

function resizeCanvas () {
    let width = scaleByPixelRatio(canvas.clientWidth);
    let height = scaleByPixelRatio(canvas.clientHeight);
    if (canvas.width != width || canvas.height != height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}

function updateColors (dt) {
    if (!config.COLORFUL) return;

    colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
    if (colorUpdateTimer >= 1) {
        colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
        pointers.forEach(p => {
            p.color = generateColor();
        });
    }
}

function applyInputs () {
    if (splatStack.length > 0)
        multipleSplats(splatStack.pop());

    pointers.forEach(p => {
        if (p.moved) {
            p.moved = false;
            splatPointer(p);
        }
    });
}

function step (dt) {
    gl.disable(gl.BLEND);

    curlProgram.bind();
    gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(curl);

    vorticityProgram.bind();
    gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
    gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
    gl.uniform1f(vorticityProgram.uniforms.dt, dt);
    blit(velocity.write);
    velocity.swap();

    divergenceProgram.bind();
    gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(divergence);

    clearProgram.bind();
    gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
    gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
    blit(pressure.write);
    pressure.swap();

    pressureProgram.bind();
    gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
    for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write);
        pressure.swap();
    }

    gradienSubtractProgram.bind();
    gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
    gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
    blit(velocity.write);
    velocity.swap();

    advectionProgram.bind();
    gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
    if (!ext.supportLinearFiltering)
        gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
    let velocityId = velocity.read.attach(0);
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
    gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
    gl.uniform1f(advectionProgram.uniforms.dt, dt);
    gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
    blit(velocity.write);
    velocity.swap();

    if (!ext.supportLinearFiltering)
        gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
    gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
    blit(dye.write);
    dye.swap();
}

function render (target) {
    if (config.BLOOM)
        applyBloom(dye.read, bloom);
    if (config.SUNRAYS) {
        applySunrays(dye.read, dye.write, sunrays);
        blur(sunrays, sunraysTemp, 1);
    }

    if (target == null || !config.TRANSPARENT) {
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    }
    else {
        gl.disable(gl.BLEND);
    }

    if (!config.TRANSPARENT)
        drawColor(target, normalizeColor(config.BACK_COLOR));
    if (target == null && config.TRANSPARENT)
        drawCheckerboard(target);
    drawDisplay(target);
}

function drawColor (target, color) {
    colorProgram.bind();
    gl.uniform4f(colorProgram.uniforms.color, color.r, color.g, color.b, 1);
    blit(target);
}

function drawCheckerboard (target) {
    checkerboardProgram.bind();
    gl.uniform1f(checkerboardProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    blit(target);
}

function drawDisplay (target) {
    let width = target == null ? gl.drawingBufferWidth : target.width;
    let height = target == null ? gl.drawingBufferHeight : target.height;

    displayMaterial.bind();
    if (config.SHADING)
        gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
    gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
    if (config.BLOOM) {
        gl.uniform1i(displayMaterial.uniforms.uBloom, bloom.attach(1));
        gl.uniform1i(displayMaterial.uniforms.uDithering, ditheringTexture.attach(2));
        let scale = getTextureScale(ditheringTexture, width, height);
        gl.uniform2f(displayMaterial.uniforms.ditherScale, scale.x, scale.y);
    }
    if (config.SUNRAYS)
        gl.uniform1i(displayMaterial.uniforms.uSunrays, sunrays.attach(3));
    blit(target);
}

function applyBloom (source, destination) {
    if (bloomFramebuffers.length < 2)
        return;

    let last = destination;

    gl.disable(gl.BLEND);
    bloomPrefilterProgram.bind();
    let knee = config.BLOOM_THRESHOLD * config.BLOOM_SOFT_KNEE + 0.0001;
    let curve0 = config.BLOOM_THRESHOLD - knee;
    let curve1 = knee * 2;
    let curve2 = 0.25 / knee;
    gl.uniform3f(bloomPrefilterProgram.uniforms.curve, curve0, curve1, curve2);
    gl.uniform1f(bloomPrefilterProgram.uniforms.threshold, config.BLOOM_THRESHOLD);
    gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture, source.attach(0));
    blit(last);

    bloomBlurProgram.bind();
    for (let i = 0; i < bloomFramebuffers.length; i++) {
        let dest = bloomFramebuffers[i];
        gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
        gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
        blit(dest);
        last = dest;
    }

    gl.blendFunc(gl.ONE, gl.ONE);
    gl.enable(gl.BLEND);

    for (let i = bloomFramebuffers.length - 2; i >= 0; i--) {
        let baseTex = bloomFramebuffers[i];
        gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
        gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
        gl.viewport(0, 0, baseTex.width, baseTex.height);
        blit(baseTex);
        last = baseTex;
    }

    gl.disable(gl.BLEND);
    bloomFinalProgram.bind();
    gl.uniform2f(bloomFinalProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
    gl.uniform1i(bloomFinalProgram.uniforms.uTexture, last.attach(0));
    gl.uniform1f(bloomFinalProgram.uniforms.intensity, config.BLOOM_INTENSITY);
    blit(destination);
}

function applySunrays (source, mask, destination) {
    gl.disable(gl.BLEND);
    sunraysMaskProgram.bind();
    gl.uniform1i(sunraysMaskProgram.uniforms.uTexture, source.attach(0));
    blit(mask);

    sunraysProgram.bind();
    gl.uniform1f(sunraysProgram.uniforms.weight, config.SUNRAYS_WEIGHT);
    gl.uniform1i(sunraysProgram.uniforms.uTexture, mask.attach(0));
    blit(destination);
}

function blur (target, temp, iterations) {
    blurProgram.bind();
    for (let i = 0; i < iterations; i++) {
        gl.uniform2f(blurProgram.uniforms.texelSize, target.texelSizeX, 0.0);
        gl.uniform1i(blurProgram.uniforms.uTexture, target.attach(0));
        blit(temp);

        gl.uniform2f(blurProgram.uniforms.texelSize, 0.0, target.texelSizeY);
        gl.uniform1i(blurProgram.uniforms.uTexture, temp.attach(0));
        blit(target);
    }
}

function splatPointer (pointer) {
    let dx = pointer.deltaX * config.SPLAT_FORCE;
    let dy = pointer.deltaY * config.SPLAT_FORCE;
    splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
}

function multipleSplats (amount) {
    for (let i = 0; i < amount; i++) {
        const color = generateColor();
        color.r *= 10.0;
        color.g *= 10.0;
        color.b *= 10.0;
        const x = Math.random();
        const y = Math.random();
        const dx = 1000 * (Math.random() - 0.5);
        const dy = 1000 * (Math.random() - 0.5);
        splat(x, y, dx, dy, color);
    }
}

function splat (x, y, dx, dy, color) {
    splatProgram.bind();
    gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
    gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    gl.uniform2f(splatProgram.uniforms.point, x, y);
    gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
    gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
    blit(velocity.write);
    velocity.swap();

    gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
    gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
    blit(dye.write);
    dye.swap();
}

function correctRadius (radius) {
    let aspectRatio = canvas.width / canvas.height;
    if (aspectRatio > 1)
        radius *= aspectRatio;
    return radius;
}

// canvas.addEventListener('mousedown', e => {
    // console.log(e.offsetX)
    // console.log(e.offsetY)
    let posX = scaleByPixelRatio(0);
    let posY = scaleByPixelRatio(0);
    let pointer = pointers.find(p => p.id == -1);
    if (pointer == null)
        pointer = new pointerPrototype();
    updatePointerDownData(pointer, -1, posX, posY);
// });

document.addEventListener('mousemove', e => {
    let pointer = pointers[0];
    if (!pointer.down) return;
    let posX = scaleByPixelRatio(e.clientX);
    let posY = scaleByPixelRatio(e.clientY);
    updatePointerMoveData(pointer, posX, posY);
});

// window.addEventListener('mouseup', () => {
//     updatePointerUpData(pointers[0]);
// });

canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    const touches = e.targetTouches;
    while (touches.length >= pointers.length)
        pointers.push(new pointerPrototype());
    for (let i = 0; i < touches.length; i++) {
        let posX = scaleByPixelRatio(touches[i].pageX);
        let posY = scaleByPixelRatio(touches[i].pageY);
        updatePointerDownData(pointers[i + 1], touches[i].identifier, posX, posY);
    }
});

canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    const touches = e.targetTouches;
    for (let i = 0; i < touches.length; i++) {
        let pointer = pointers[i + 1];
        if (!pointer.down) continue;
        let posX = scaleByPixelRatio(touches[i].pageX);
        let posY = scaleByPixelRatio(touches[i].pageY);
        updatePointerMoveData(pointer, posX, posY);
    }
}, false);

window.addEventListener('touchend', e => {
    const touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++)
    {
        let pointer = pointers.find(p => p.id == touches[i].identifier);
        if (pointer == null) continue;
        updatePointerUpData(pointer);
    }
});

window.addEventListener('keydown', e => {
    if (e.code === 'KeyP')
        config.PAUSED = !config.PAUSED;
    if (e.key === ' ')
        splatStack.push(parseInt(Math.random() * 20) + 5);
});

function updatePointerDownData (pointer, id, posX, posY) {
    pointer.id = id;
    pointer.down = true;
    pointer.moved = false;
    pointer.texcoordX = posX / canvas.width;
    pointer.texcoordY = 1.0 - posY / canvas.height;
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.deltaX = 0;
    pointer.deltaY = 0;
    pointer.color = generateColor();
}

function updatePointerMoveData (pointer, posX, posY) {
    pointer.prevTexcoordX = pointer.texcoordX;
    pointer.prevTexcoordY = pointer.texcoordY;
    pointer.texcoordX = posX / canvas.width;
    pointer.texcoordY = 1.0 - posY / canvas.height;
    pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
    pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
    pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
}

function updatePointerUpData (pointer) {
    pointer.down = false;
}

function correctDeltaX (delta) {
    let aspectRatio = canvas.width / canvas.height;
    if (aspectRatio < 1) delta *= aspectRatio;
    return delta;
}

function correctDeltaY (delta) {
    let aspectRatio = canvas.width / canvas.height;
    if (aspectRatio > 1) delta /= aspectRatio;
    return delta;
}

function generateColor () {
    let c = HSVtoRGB(Math.random(), 1.0, 1.0);
    c.r *= 0.15;
    c.g *= 0.15;
    c.b *= 0.15;
    return c;
}

function HSVtoRGB (h, s, v) {
    let r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return {
        r,
        g,
        b
    };
}

function normalizeColor (input) {
    let output = {
        r: input.r / 255,
        g: input.g / 255,
        b: input.b / 255
    };
    return output;
}

function wrap (value, min, max) {
    let range = max - min;
    if (range == 0) return min;
    return (value - min) % range + min;
}

function getResolution (resolution) {
    let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
    if (aspectRatio < 1)
        aspectRatio = 1.0 / aspectRatio;

    let min = Math.round(resolution);
    let max = Math.round(resolution * aspectRatio);

    if (gl.drawingBufferWidth > gl.drawingBufferHeight)
        return { width: max, height: min };
    else
        return { width: min, height: max };
}

function getTextureScale (texture, width, height) {
    return {
        x: width / texture.width,
        y: height / texture.height
    };
}

function scaleByPixelRatio (input) {
    let pixelRatio = window.devicePixelRatio || 1;
    return Math.floor(input * pixelRatio);
}

function hashCode (s) {
    if (s.length == 0) return 0;
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

}

lightModeButton.addEventListener("click", () => {
ColorFunction()
})

ColorFunction()

