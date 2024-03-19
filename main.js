let cursor = document.getElementById("cursor");
let currentMode = "dark"

let cursorPosition = cursor.getBoundingClientRect();
let pageTitle = document
  .getElementById("main-title-content")
  .getBoundingClientRect();

let buttonPos = document
  .getElementsByClassName("s1")[0]
  .getBoundingClientRect();
console.log(buttonPos);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY - 10 + "px";
  cursor.style.left = e.pageX - 10 + "px";

  if (
    e.pageX > pageTitle.x &&
    e.pageX < pageTitle.x + pageTitle.width &&
    e.pageY > pageTitle.y &&
    e.pageY < pageTitle.y + pageTitle.height
  ) {
    cursor.classList.add("cursor-title");
    cursor.classList.remove("cursor-normal");
    cursor.style.top = e.pageY - 150 + "px";
    cursor.style.left = e.pageX - 150 + "px";
  } else {
    cursor.classList.add("cursor-normal");
    cursor.classList.remove("cursor-title");
  }
});

//LIGHT MODE TOGGLE

let bodyElement = document.getElementById("scrollbar");

let lightModeButton = document.getElementsByClassName("light-mode-option")[0];
// if(window.innerWidth<="645"){
//   let roarElement =
//   document.getElementsByClassName("mobile-fl-content")[0];
//   gsap.to(".first-line-content", {
//     color: "rgb(63, 65, 68)",
//     duration: 0.05,
//   });


// }

// window.addEventListener('resize', function() {
//   location.reload();
// });

// scrollLeft =
// window.scrollX ||
// document.documentElement.scrollLeft

let firstTitleElement =
  document.getElementsByClassName("first-line-content")[0];

lightModeButton.addEventListener("click", () => {
  if (bodyElement.classList.contains("dark")) {
    bodyElement.classList.add("light");
    bodyElement.classList.remove("dark");
    currentMode = "light"

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
    currentMode = "dark"

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
let t5 = gsap.timeline()
function hamburgerAnimation() {
  
  let listItem = gsap.utils.toArray(".hs-list-item");
  let socialIcons = gsap.utils.toArray(".social-icons")

  listItem.forEach((section) => {
    t5.from(section, { y: 50, opacity: 0, duration: .3},"-=.1");
  });
  
  t5.from(".hs-email",{y: 50, opacity: 0, duration: .3},"-=1")
  t5.from(".hs-phone",{y: 50, opacity: 0, duration: .3},"-=.8")
  socialIcons.forEach((section) => {
    t5.from(section, { y: 20, opacity: 0, duration: .25},"-=.3");
  });
 

  

}


//Loader
let loaderElement = document.getElementsByClassName("loader")[0];

let hamburgerMenuButton = document.getElementsByClassName("hamburger-menu")[0];

hamburgerMenuButton.addEventListener("click", () => {
  if (hamburgerMenuButton.classList.contains("hidden")) {
    setTimeout(() => {
      document.getElementsByClassName("menu-close")[0].innerHTML = "CLOSE"
      let a = (document.getElementsByClassName(
        "main-page-container"
      )[0].style.opacity = 0);

      document.getElementsByClassName(
        "main-page-container"
      )[0].style.position = "fixed";
        
      document.getElementsByClassName(
        "main-navbar-container"
      )[0].style.visibility = "visible";

      document.getElementsByClassName(
        "hamburger-section-container"
      )[0].style.visibility = "visible";

      hamburgerMenuButton.classList.remove("hidden");
      hamburgerAnimation();
     
        window.scrollTo({
          top:0,
          // behavior:"smooth"
        })
      
      
    }, 900);

    loaderElement.classList.add("animate");
    document.getElementsByClassName("loader2")[0].classList.remove("animate-2");
  } else {

    setTimeout(() => {
      document.getElementsByClassName("menu-close")[0].innerHTML = "MENU"
      let a = (document.getElementsByClassName(
        "main-page-container"
      )[0].style.opacity = 1);
     
      document.getElementsByClassName(
        "main-navbar-container"
      )[0].style.visibility = "visible";
      document.getElementsByClassName(
        "main-page-container"
      )[0].style.position = "inherit";

      document.getElementsByClassName(
        "hamburger-section-container"
      )[0].style.visibility = "hidden";
     

      hamburgerMenuButton.classList.add("hidden");
     
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



let mmInitialLoad = gsap.matchMedia()

mmInitialLoad.add("(min-width:645px)",()=>{
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

})


mmInitialLoad.add("(max-width:644px)",()=>{

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
  .from(".punch-line-container", {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  },"-=.2")
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


})

  


let mmVideoAnimation = gsap.matchMedia();

mmVideoAnimation.add("(min-width:768px)" ,()=>{
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
      y:-180,
      width: "14%",
      x: 0,
      borderRadius: "99rem",
    });
  }, 2500);


})
  
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

let mmRecentWorkText = gsap.matchMedia()

mmRecentWorkText.add("(min-width:1081px)",()=>{
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

})

mmRecentWorkText.add("(max-width:1080px)",()=>{
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
    y: 60,opacity:0
  });
});

})



//WHO WE ARE

let whoWeAreST = {
  trigger: ".recent-work-title",
  scrub: true,
  markers: false,
  start: "0% bottom",
  end: "100% center",
};

gsap.from(".recent-text-recent", { xPercent: 15, scrollTrigger: whoWeAreST});
gsap.from(".recent-text-work", { xPercent:-50, scrollTrigger: whoWeAreST});

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

gsap.from(".pl-title-first-line", { xPercent: 40, scrollTrigger: partnerLoveST });
gsap.from(".pl-title-second-line", { xPercent: 100, scrollTrigger: partnerLoveST });

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
  console.log("hi")
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




//DRIBBLE POP UP
let mmDribblePopUp = gsap.matchMedia()

mmDribblePopUp.add("(min-width:1025px)",()=>{
  let stObject = {
    trigger: ".dribble-container",
    markers: false,
    scrub: true,
    start: "0% center",
    end: "70% center",
  };
  
  gsap.to(".i1", { scrollTrigger: stObject, xPercent: -80, yPercent: 80, rotate: "-30deg" });
  gsap.to(".i3", { scrollTrigger: stObject, xPercent: -80, yPercent: 30, rotate: "-15deg" });
  gsap.to(".i5", { scrollTrigger: stObject, xPercent: -30, yPercent: -10, rotate: "-30deg" });
  
  gsap.to(".i2", { scrollTrigger: stObject, xPercent: 80, yPercent: 80, rotate: "30deg" });
  gsap.to(".i4", { scrollTrigger: stObject, xPercent: 80, yPercent: 30, rotate: "15deg" });
  gsap.to(".i6", { scrollTrigger: stObject, xPercent: 30, yPercent: -10, rotate: "30deg" });
  
  gsap.to(".dribble-pop-up", { scrollTrigger: stObject, y: -100, opacity: 1 });
  

})

mmDribblePopUp.add("(min-width:768px) and (max-width:1024px)" ,()=>{

  let stObject = {
        trigger: ".dribble-container",
        markers: false,
        scrub: true,
        start: "-20% center",
        end: "70% center",
      };

  gsap.to(".i1", { scrollTrigger: stObject, xPercent: -60 });
  gsap.to(".i3", { scrollTrigger: stObject, xPercent: -100 });
  gsap.to(".i5", { scrollTrigger: stObject, xPercent: -60});
  
  gsap.to(".i2", { scrollTrigger: stObject, xPercent: 60});
  gsap.to(".i4", { scrollTrigger: stObject, xPercent: 100});
  gsap.to(".i6", { scrollTrigger: stObject, xPercent: 60 });
  gsap.to(".dribble-pop-up", { scrollTrigger: stObject, y: -100, opacity: 1 });

})

mmDribblePopUp.add(" (max-width:767px)" ,()=>{

  let stObject = {
        trigger: ".dribble-container",
        markers: false,
        scrub: true,
        start: "-30% center",
        end: "70% center",
      };

  gsap.to(".i1", { scrollTrigger: stObject, xPercent: -60 });
  gsap.to(".i3", { scrollTrigger: stObject, xPercent: -100 });
  
  
  gsap.to(".i2", { scrollTrigger: stObject, xPercent: 120});
  gsap.to(".i4", { scrollTrigger: stObject, xPercent: 60});
 
  gsap.to(".dribble-pop-up", { scrollTrigger: stObject, y: -100, opacity: 1 });

})

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

let mmSmAccountsHover = gsap.matchMedia()

mmSmAccountsHover.add("(min-width:1024px)",()=>{

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


})

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

mmFooterAnimation.add("(min-width:961px)",()=>{
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

})


mmFooterAnimation.add("(max-width:960px)",()=>{
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

 
})


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

let xyz = document.getElementsByClassName("magnetic-button")[0]

xyz.addEventListener("mouseover",()=>{
  console.log("hi")
})

setTimeout(()=>{
  let buttonElement = document.querySelectorAll(".magnetic-button")

  

  let magneticbuttons = document.querySelectorAll(".magnetic-buttons")

  magneticbuttons.forEach((buttons)=>{
    buttons.addEventListener("mousemove",(e)=>{
      console.log("hover")
      buttons.classList.add("mgb")
      const position = buttons.getBoundingClientRect()
      let x = e.clientX - position.left -position.width/2
      let y = e.clientY -position.top - position.height/2 
      buttons.style.transform = `translate(${x*.4}px,${y*.4}px)`
    })
    buttons.addEventListener("mouseout",()=>{
      buttons.classList.remove("mgb")
      buttons.style.transform = `translate(0px,0px)`
     
  
    })
  })


    // magneticbuttons.forEach((button)=>{
    //   button.addEventListener("mousemove",(e)=>{
    //     console.log("hi")
      
    //     cursor.classList.add("cursor-button");
    //   cursor.classList.remove("cursor-normal");
    //     cursor.style.top = e.pageY - 1000 + "px";
    //   cursor.style.left = e.pageX -60 + "px";
    //   })
    //   button.addEventListener("mouseout",()=>{
    //     cursor.classList.remove("cursor-button")
        
        
    
    //   })
    // })



  buttonElement.forEach((button)=>{
    
    button.addEventListener("mousemove",(e)=>{
      button.classList.add("mgp")
      const position = button.getBoundingClientRect()
      console.log(position)
      console.log(e.pageX)
      let x = e.clientX - position.left -position.width/2
      let y = e.clientY -position.top - position.height/2 
    
      
      
      button.style.transform = `translate(${x*.15}px,${y*.15}px)`
     
      button.children[0].style.transform = `translate(${x*.25}px,${y*.45}px)`
    })
  
    button.addEventListener("mouseout",()=>{
      button.classList.remove("mgp")
      button.style.transform = `translate(0px,0px)`
      button.children[0].style.transform = `translate(0px,0px)`
  
    })
  })




},2000)




document.getElementsByClassName("scrollup")[0].addEventListener("click",()=>{
  console.log("hi")
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})



document.getElementsByClassName("video-down-arrow")[0].addEventListener("click",()=>{
  window.scrollTo({
    top:window.innerHeight - window.innerHeight/10,
    behavior:"smooth"
  })
})

let lightImage = document.getElementsByClassName("light-mode-image")[0]


lightModeButton.addEventListener("click",()=>{


if(currentMode == "dark")
{
  lightImage.src = "./public/images/light-mode-icon.035572eb.svg"

}else{
  console.log("hi")
  lightImage.src = "./public/images/dark-mode-icon.db0ad99a.svg"

}
})