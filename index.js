/* **********************************************PRELOADER******************************************** */
const preLoader = document.querySelector(".preLoader");
const wheelAndHamster = document.querySelector(".wheel-and-hamster");

window.addEventListener("load", function () {
  setTimeout(function () {
    wheelAndHamster.style.transform = "translate(-60vw)";
    wheelAndHamster.style.transitionDuration="1.5s";
  }, 2000);
  setTimeout(() => {
    preLoader.style.opacity = "0";
    preLoader.style.transition = " 0.5s";
  }, 3000);
  setTimeout(() => {
    preLoader.style.display = "none";
  }, 3500);
});

// ****************************SWITCH TO PC************************************
// Function to show the switchToPc div after a 15-second delay
// if (window.matchMedia("(max-width: 800px)").matches) {
//   function showSwitchToPcDiv() {
//     var switchToPcDiv = document.getElementsByClassName("switchToPc")[0];
//     switchToPcDiv.style.display = "flex";
//   }

//   // Wait for the site to load, then set the delay to show the switchToPc div
//   window.addEventListener("load", function () {
//     setTimeout(showSwitchToPcDiv, 15000); // 15000 milliseconds = 15 seconds
//   });
// }
// // Function to hide the switchToPc div when the button is clicked
// var switchToPcBtn = document.querySelector(".switchToPcBtn");
// switchToPcBtn.addEventListener("click", () => {
//   setTimeout(() => {
//     switchToPcBtn.parentElement.style.display = "none";
//   }, 500);
// });

// **************************Perpetual Animation Starts Here**********************

function PerpetualAnimation() {
  function moveBox(
    boxName,
    initialLeftValue,
    initialTopValue,
    finalLeftValue,
    finalTopValue,
    imgName,
    time,
    delayValue,
    moveX,
    moveY
  ) {
    const boxMovementKeyframes = [
      { top: initialTopValue, left: initialLeftValue },
      { top: finalTopValue, left: finalLeftValue },
    ];

    var wordpressBox = document.querySelectorAll(boxName);
    wordpressBox.forEach((element, index) => {
      var boxMovementTiming = {
        duration: time,
        iterations: Infinity,
        easing: "linear",
        delay: index * delayValue, // Adjusted delay value
      };
      element.style.opacity = "0.8";
      element.animate(boxMovementKeyframes, boxMovementTiming);
      element.style.backgroundImage = `url("images/${imgName}")`;
    });
  }
  // function moveBox(boxName,initialLeftValue,initialTopValue,finalLeftValue,finalTopValue,imgName,time,delayValue,moveX,moveY)
  // moveBox(".htmlBox",'-2.5%','-2.5%','102.5vw','102.5vh',"6.png",8500,600);
  // moveBox(".cssBox",'12.5%','-50px','100vw','87.5vh',"2.png",10000,700);

  moveBox(".jsBox", "25%", "-50px", "100vw", "75vh", "js.png", 10000, 715);
  moveBox(
    ".cssBox",
    "37.5%",
    "-50px",
    "100vw",
    "62.5vh",
    "css.png",
    11000,
    1000
  );
  moveBox(".htmlBox", "50%", "-50px", "100vw", "50vh", "html.png", 7000, 1000);
  moveBox(
    ".wordpressBox",
    "62.5%",
    "-50px",
    "100vw",
    "37.5vh",
    "wordpress.png",
    10500,
    2100
  );
  moveBox(
    ".reactjsBox",
    "75%",
    "-50px",
    "100vw",
    "25vh",
    "reactJS.png",
    4000,
    1000
  );
  if (window.innerWidth > 800) {
    moveBox(
      ".chashmaBox",
      "87.5%",
      "-50px",
      "100vw",
      "12.5vh",
      "figma.png",
      3000,
      1000
    );
  }
}
PerpetualAnimation();

// ***********************************Navbar********************************
// function navbar(){
//   function navMenuAnimation(navMenuID, videoSrc){
//     // const navMenus = document.querySelector('.navbarMenusDiv');

//     const video = document.querySelector(navMenuID);

//     video.src = videoSrc;
//     video.autoplay = true;
//     video.muted = true;

//     video.addEventListener("click", () => {
//         video.play();
//     });
// }
// navMenuAnimation('#navHome', 'vidAnimations/navHome.mp4');
// navMenuAnimation('#navMiniProjects', 'vidAnimations/navMiniProjects.mp4');
// navMenuAnimation('#navRandomThoughts', 'vidAnimations/navRandomThoughts.mp4');
// }
// navbar();

// **************************************MOBILE MENUS ***********************************

const mobileMenus = document.querySelectorAll(".mobileMenus");

function mobileMenuReset() {
  mobileMenus.forEach((element) => {
    element.style.height = "42px";
    element.style.width = "42px";
    element.style.transform = "translateY(0%)";
  });
}

function activeMobileMenu(element) {
  element.style.height = "62px";
  element.style.width = "62px";
  element.style.transform = "translateY(-30%)";
}

function menuRedirection(menuID, url) {
  const menuItem = document.getElementById(menuID);
  menuItem.addEventListener("click", function () {
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  });
}

menuRedirection("home","/");
menuRedirection("miniProjects","https://madhavendra.me/mini-projects/");
menuRedirection("randomThoughts","https://madhavendra.me/mini-projects/");
mobileMenus.forEach((element) => {
  element.addEventListener("click", function () {
    mobileMenuReset();
      activeMobileMenu(element);
  });
});



// ***********************************EXPLODING DP********************************

function explodingImage() {
  const mainImage = document.getElementById("main-image");

  const imageWidth = mainImage.offsetWidth;
  const imageHeight = mainImage.offsetHeight;

  const numCols = 15; // Number of columns in the grid
  const numRows = 15; // Number of rows in the grid

  const colWidth = Math.floor(imageWidth / numCols);
  const rowHeight = Math.floor(imageHeight / numRows);

  const adjustedWidth = colWidth / numCols;
  const adjustedHeight = rowHeight / numRows;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const imgShards = document.createElement("div");
      imgShards.className = "draggable-image";
      imgShards.style.width = colWidth + "px";
      imgShards.style.height = rowHeight + "px";
      imgShards.style.left = col * colWidth + "px";
      imgShards.style.top = row * rowHeight + "px";
      imgShards.style.backgroundImage = `url(profile.png)`;
      imgShards.style.backgroundPosition = `-${col * colWidth}px -${
        row * rowHeight
      }px`;
      imgShards.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;

      mainImage.appendChild(imgShards);

      imgShards.addEventListener("mouseover", explodeElement);
      // draggableElement.addEventListener('mouseout', unexplodeElement);
    }
  }

  mainImage.style.width = adjustedWidth + "px";
  mainImage.style.height = adjustedHeight + "px";
}
if (window.matchMedia("(min-width: 1100px)").matches) {
  explodingImage();
}
function explodeElement() {
  this.style.transition = "transform 0.5s ease-in-out";
  this.style.transform = `translate3d(${getRandomNumber()}px, ${getRandomNumber()}px, ${getRandomNumber()}px) rotateX(${getRandomNumber()}deg) rotateY(${getRandomNumber()}deg) rotateZ(${getRandomNumber()}deg)`;
  setTimeout(() => {
    unexplodeElement.call(this); // Reset the transform after the delay
  }, 500);
}

function unexplodeElement() {
  this.style.transition = "transform 0.3s linear";
  this.style.transform =
    "translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0)";
}

function getRandomNumber() {
  return Math.random() * 800;
}

// ************************************zeroGravity starts here**************************************

function zeroGravity(zeroGravityElement) {
  gravityElements = document.querySelectorAll(zeroGravityElement);
  gravityElements.forEach((element) => {
    function getRandomNumber(min, max) {
      return Math.random() * (max - min + 1) + min;
    }

    translateXNum = getRandomNumber(0, 60);
    translateYNum = getRandomNumber(70, 120);
    rotateNum = getRandomNumber(100, 250);

    var zeroGravityKeyFrames = [
      { transform: "translateY(0) translateX(0) rotate(0deg)" },
      {
        transform: `translateY(-${translateYNum / 2}vh) translateX(-${
          translateXNum / 2
        }vh) rotate(${rotateNum}deg`,
      },
      {
        transform: `translateY(-${translateYNum}vh) translateX(-${translateXNum}vh)`,
      },
    ];
    var zeroGravityTiming = {
      duration: 5000,
      iterations: 1,
      fill: "forwards",
      easing: "ease-in",
    };

    element.animate(zeroGravityKeyFrames, zeroGravityTiming);
  });
}

// *****************************zeroGravity ends here**************************************

function calculateDistanceFromBottom(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  var distanceFromBottom = windowHeight - rect.bottom;
  return distanceFromBottom;
}

function freezeAnimations(className) {
  className.forEach((element) => {
    var animations = element.getAnimations();
    animations.forEach((animation) => {
      animation.pause();
    });
  });
}

// **********************HIGH GRAVITY DROP STARTS*******************************

function gravityDrop(gravityDropElement) {
  var gravityElements = document.querySelectorAll(gravityDropElement);

  freezeAnimations(gravityElements);

  gravityElements.forEach((element) => {
    var highGravityKeyframes = [
      { transform: `translateY(150vh) rotate(-50deg)` },
    ];
    var highGravityTiming = {
      duration: 2000,
      iterations: 1,
      fill: "forwards",
      easing: "ease-in",
    };

    element.animate(highGravityKeyframes, highGravityTiming);
  });
}

// **********************HIGH GRAVITY DROP ENDS*******************************

// ************************* normal gravity starts here*******************************

function normalGravity(normalGravityElement, dur) {
  var gravityElements = document.querySelectorAll(normalGravityElement);

  // freezeAnimations(gravityElements);

  gravityElements.forEach((element) => {
    var highGravityKeyframes = [
      { transform: "translateY(0) translateX(0) rotate(0deg)" },
    ];
    var highGravityTiming = {
      duration: dur,
      iterations: 1,
      fill: "forwards",
      easing: "ease-in",
    };

    element.animate(highGravityKeyframes, highGravityTiming);
  });
}
// ************************* normal gravity ends here*******************************

// ******************************gravityControlFunction starts here*******************************
var gravityBtnState = "normal";
var heartbeatBtnState = "normal";

function gravityControlFunction(buttonElement, gravityAnimationElements) {
  var gravityControlButton = document.querySelector(buttonElement);

  gravityControlButton.addEventListener("click", function () {
    if (gravityBtnState === "normal") {
      zeroGravity(gravityAnimationElements);
      gravityBtnState = "zeroGravity";
      gravityControlButton.style.boxShadow = "0 4px 6px yellow";
    } else {
      normalGravity(gravityAnimationElements, 1500);
      gravityBtnState = "normal";
      gravityControlButton.style.boxShadow = "0 0px 0px yellow";
    }
  });
}

gravityControlFunction(".gravityControlButton", ".animationElements");

// ****************************HEARTBEAT BUTTON STARTS HERE*******************************

const heartbeatKeyframes = [
  { transform: "scale(1)", offset: 0 },
  { transform: "scale(0.91)", offset: 0.1 },
  { transform: "scale(0.98)", offset: 0.17 },
  { transform: "scale(0.87)", offset: 0.33 },
  { transform: "scale(1)", offset: 0.45 },
];

const heartBeatDuration = {
  duration: 800,
  easing: "ease-in-out",
  iterations: Infinity,
};

const heartBeatButton = document.querySelector(".heartBeatButton");
const animationElements = document.querySelectorAll(".animationElements");

heartBeatButton.addEventListener("click", function () {
  if (heartbeatBtnState === "normal") {
    heartBeatButton.style.boxShadow = "0 5px 5px red";
    normalGravity(".animationElements", 500);

    animationElements.forEach((element) => {
      element.animate(heartbeatKeyframes, heartBeatDuration);
    });
    heartbeatBtnState = "beating";
  } else {
    heartBeatButton.style.boxShadow = "0 0px 0px red";
    animationElements.forEach((element) => {
      element.getAnimations().forEach((animation) => {
        animation.pause();
      });
    });
    normalGravity(".animationElements", 500);
    heartbeatBtnState = "normal";
  }
});

// **************************************vibrate BUTTON STARTS HERE**************************************
let vibrateButtonState = "normal";
const vibrateKeyframes = [
  {
    transform: "translate(0)",
    offset: 0,
  },
  {
    transform: "translate(-6px, -6px)",
    offset: 0.1,
  },
  {
    transform: "translate(6px, -6px)",
    offset: 0.2,
  },
  {
    transform: "translate(-6px, 6px)",
    offset: 0.3,
  },
  {
    transform: "translate(6px, 6px)",
    offset: 0.4,
  },
  {
    transform: "translate(-6px, -6px)",
    offset: 0.5,
  },
  {
    transform: "translate(6px, -6px)",
    offset: 0.6,
  },
  {
    transform: "translate(-6px, 6px)",
    offset: 0.7,
  },
  {
    transform: "translate(-6px, -6px)",
    offset: 0.8,
  },
  {
    transform: "translate(6px, -6px)",
    offset: 0.9,
  },
  {
    transform: "translate(0)",
    offset: 1,
  },
];

const vibrateDuration = {
  duration: 400, // Replace this with the actual duration in milliseconds
  easing: "linear",
  iterations: Infinity,
};

const vibrateButton = document.querySelector(".vibrateButton");

vibrateButton.addEventListener("click", function () {
  if (vibrateButtonState === "normal") {
    vibrateButton.style.boxShadow = "0 5px 5px green";
    normalGravity(".animationElements", 500);

    animationElements.forEach((element, index) => {
      const randomTime = Math.floor(Math.random() * 100); // Generate a random number between 0 and 50
      setTimeout(() => {
        element.animate(vibrateKeyframes, vibrateDuration);
      }, index * 50);
    });

    vibrateButtonState = "bouncing";
  } else {
    vibrateButton.style.boxShadow = "0 0px 0px green";
    animationElements.forEach((element) => {
      element.getAnimations().forEach((animation) => {
        animation.pause();
      });
    });
    normalGravity(".animationElements", 500);
    vibrateButtonState = "normal";
  }
});

// **********************************section 3 starts here****************************

// proficiency level starts here

function proficiencyLevel(proficiencyElementId, value, colorValue) {
  proficiencyElement = document.getElementById(proficiencyElementId);
  targetElement = proficiencyElement.lastElementChild.lastElementChild;
  // targetElement.style.backgroundImage ="linear-gradient(90deg, #FA0000 0%, #FAB400 100.07%)";
  proficiencyElement.lastElementChild.lastElementChild.style.backgroundColor =
    "#FAB400";
  targetElement.style.height = "100%";
  targetElement.style.width = 0 + "%";
  targetElement.style.animationDuration = "2s";

  widthAnimationKeyframes = [{ width: "0%" }, { width: value + "%" }];
  widthAnimationTiming = {
    duration: (value / 100) * 2000,
    iterations: 1,
    fill: "forwards",
    easing: "ease-in",
  };
  targetElement.animate(widthAnimationKeyframes, widthAnimationTiming);
}

// proficiencyLevel(proficiencyElement,value,colorValue)
const section3 = document.getElementById("section3");
// let animationExecuted = false;

// section3.addEventListener("mouseenter", section3AnimationHandler);

// function section3AnimationHandler() {
//   if (!animationExecuted) {
//     animationExecuted = true;
//     section3Animation();
//   }
// }

const specialityBigDiv1 = document.getElementById("specialityBigDiv1");
const specialityBigDiv2 = document.getElementById("specialityBigDiv2");
const specialityBigDiv3 = document.getElementById("specialityBigDiv3");
const specialityBigDiv4 = document.getElementById("specialityBigDiv4");
const specialityBigDiv5 = document.getElementById("specialityBigDiv5");

// Animation function
function specialityBigDiv1animation() {
  proficiencyLevel("html", 90);
  proficiencyLevel("react", 15);
  proficiencyLevel("wordpress", 80);
  proficiencyLevel("mongodb", 70);
  proficiencyLevel("flask", 60);
}
function specialityBigDiv2animation() {
  proficiencyLevel("figma", 80);
  proficiencyLevel("canva", 90);
  proficiencyLevel("coreldraw", 45);
  proficiencyLevel("illustrator", 20);
  proficiencyLevel("photoshop", 15);
}
function specialityBigDiv3animation() {
  proficiencyLevel("research", 90);
  proficiencyLevel("analysis", 85);
  proficiencyLevel("word", 80);
  proficiencyLevel("powerPoint", 80);
  proficiencyLevel("excel", 60);
}
function specialityBigDiv4animation() {
  proficiencyLevel("dataCleaning", 85);
  proficiencyLevel("statisticalAnalysis", 70);
  proficiencyLevel("dataVisualisation", 85);
  proficiencyLevel("python", 65);
  proficiencyLevel("knime", 50);
}
function specialityBigDiv5animation() {
  proficiencyLevel("daVinci", 70);
  proficiencyLevel("audacity", 45);
  proficiencyLevel("adobeAnimate", 55);
  proficiencyLevel("adobeAfterEffects", 45);
  proficiencyLevel("logoAnimation", 80);
}

const intersectionObserver1 = new IntersectionObserver(
  (entries) => {
    if (entries[0].intersectionRatio >= 0.1) {
      specialityBigDiv1animation();
    }
  },
  {
    threshold: 0.1,
  }
);
intersectionObserver1.observe(specialityBigDiv1);

const intersectionObserver2 = new IntersectionObserver(
  (entries) => {
    if (entries[0].intersectionRatio >= 0.1) {
      specialityBigDiv2animation();
    }
  },
  {
    threshold: 0.1,
  }
);
intersectionObserver2.observe(specialityBigDiv2);

const intersectionObserver3 = new IntersectionObserver(
  (entries) => {
    if (entries[0].intersectionRatio >= 0.1) {
      specialityBigDiv3animation();
    }
  },
  {
    threshold: 0.1,
  }
);
intersectionObserver3.observe(specialityBigDiv3);

const intersectionObserver4 = new IntersectionObserver(
  (entries) => {
    if (entries[0].intersectionRatio >= 0.1) {
      specialityBigDiv4animation();
    }
  },
  {
    threshold: 0.1,
  }
);
intersectionObserver4.observe(specialityBigDiv4);

const intersectionObserver5 = new IntersectionObserver(
  (entries) => {
    if (entries[0].intersectionRatio >= 0.1) {
      specialityBigDiv5animation();
    }
  },
  {
    threshold: 0.1,
  }
);
intersectionObserver5.observe(specialityBigDiv5);
// *****************************section 4 STARTS HERE************************************

// SLIDER BUTTONS*********************************
fitContentWalaDiv = document.getElementById("fitContentWalaDiv");
section4sliderWindow = document.getElementById("section4sliderWindow");

document
  .getElementById("rightArrowSection4")
  .addEventListener("click", function () {
    var section4 = document.getElementById("section4");
    section4sliderWindow.scrollBy(window.innerWidth, 0); // Scroll 100vw (viewport width) to the right
  });
document
  .getElementById("leftArrowSection4")
  .addEventListener("click", function () {
    section4sliderWindow.scrollBy(-window.innerWidth, 0); // Scroll 100vw (viewport width) to the left
  });

// index boxes *********************************

const indexNumberBoxes = document.querySelectorAll(".indexNumberBox");
let scrollPosition = 1;

function scrollByViewportWidth(value) {
  section4sliderWindow.scrollBy(value * window.innerWidth, 0);
}

function handleIndexClick(index) {
  return function () {
    const scrollDirection = index - scrollPosition;
    scrollByViewportWidth(scrollDirection);
    scrollPosition = index;
  };
}

indexNumberBoxes.forEach((box, index) => {
  box.addEventListener('click', handleIndexClick(index + 1));
});

// scrollposition = 1;


// indexNumberBox1.addEventListener("click", function () {
//   section4sliderWindow.scrollBy(-window.innerWidth*2, 0); // Scroll 200vw (viewport width) to the left
//   scrollposition = 1;
// });

// indexNumberBox3.addEventListener("click", function () {
//   section4sliderWindow.scrollBy(window.innerWidth*2, 0); // Scroll 200vw (viewport width) to the right
//   scrollposition=3;
// });

// indexNumberBox2.addEventListener("click",function(){
//   if(scrollposition===1)
//   {
//     section4sliderWindow.scrollBy(window.innerWidth, 0); 
//     scrollposition=1;
//   }
//   else if(scrollposition===3)
//   {
//     section4sliderWindow.scrollBy(-window.innerWidth, 0); 
//     scrollposition=3;
//   }
// });
// project PREVIEW WINDOW
const previewButtons = document.querySelectorAll(".loadWebsitePreviewButton");

previewButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const websitePreviewDiv = button.closest(".websitePreviewDiv");
    const websitePreviewImg =
      websitePreviewDiv.querySelector(".websitePreviewImg");
    const iframe = websitePreviewDiv.querySelector("iframe");
    projectTitle = websitePreviewDiv.querySelector(".projectTitle");
    var websiteName = projectTitle.innerHTML;
    websitePreviewImg.style.display = "none";
    iframe.style.display = "block";
    iframe.src = "https://" + websiteName;
  });
});

// previewButton.addEventListener("click", function () {
//   previewImg.style.display = "none";
//   websitePreview.style.display = "block";
//   websitePreview.src = "https://aquaregiafest.com";
// });

var projectTitle = document.querySelectorAll(".projectTitle");

projectTitle.forEach((element) => {
  var websiteName = element.innerHTML;
  console.log(websiteName);
  var url = "https://" + websiteName;
  element.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default click behavior
    window.open(url, "_blank"); // Opens the link in a new tab
  });
});

// ******************FLIP CARD ANIMATION***********************
// var flipCard = document.querySelector('.flipCard');
var websiteInfoButton = document.querySelectorAll(".websiteInfoButton");
closeWebsitePreviewDescriptionButton = document.querySelectorAll(
  ".closeWebsitePreviewDescriptionButton"
);

websiteInfoButton.forEach(function (element) {
  element.addEventListener("click", function () {
    const flipCard = element.closest(".flipCard");

    flipCard.style.transform = "rotateY(180deg)";
  });
});

closeWebsitePreviewDescriptionButton.forEach(function (element) {
  element.addEventListener("click", function () {
    const flipCard = element.closest(".flipCard");
    flipCard.style.transform = "rotateY(0deg)";
  });
});

// autiowidth for stats************************************
var projectStatsSubDivColor = document.querySelectorAll(
  ".projectStatsSubDivColor"
);

projectStatsSubDivColor.forEach(function (element) {
  var projectStatsSubDivColorWidth = element.nextElementSibling.innerHTML;
  element.style.width = projectStatsSubDivColorWidth;
});

// PROJECT STATS BUTTON*******************************************
ProjectStatsButton = document.querySelectorAll(".ProjectStatsButton");

ProjectStatsButton.forEach(function (element) {
  element.addEventListener("click", function () {
    console.log("clicked");
    const projectStatsDiv = element.nextElementSibling;

    if (projectStatsDiv) {
      projectStatsDiv.classList.toggle("projectStatsDivActive");
    } else {
      console.error("No ancestor element with class 'projectStatsDiv' found.");
    }
  });
});

ProjectStatsButton = document.querySelectorAll(".ProjectStatsButton");

ProjectStatsButton.forEach(function (element) {
  element.addEventListener("click", function () {
    console.log("clicked");
    const projectStatsDiv = element.closest(".projectStatsDiv");
    projectStatsDiv.classList.toggle("projectStatsDivActive");
  });
});

// **********************************FOOTER STARTS HERE**************************************
// footer ADD LINK AND LOGO
function addLink(logoID, link) {
  button = document.getElementById(logoID).parentElement;
  button.addEventListener("click", () => {
    setTimeout(() => {
      window.open(link);
    }, 1000);
  });
}
addLink("linkedinLogo","https://www.linkedin.com/in/madhvendra-naruka-52b52621a/");
addLink("githubLogo", "https://github.com/Madhavendra-Naruka");
addLink("mailLogo", "mailto:madhvendrasinghnaruka@gmail.com");
addLink("whatsappLogo", "https://wa.me/9829620291");
addLink("callLogo", "tel:9829620291");

window.addEventListener("scroll", function () {
  var scrollContainer = document.querySelector(".customScrollContainer");
  var scrollSnapCont = document.querySelector(".scrollSnapCont");
  if (
    window.innerHeight + window.pageYOffset >=
    document.scrollSnapCont.offsetHeight - 400
  ) {
    scrollContainer.style.transform = "translateX(-250px)";
    scrollContainer.style.transitionDuration = ".2s";
    console.log("yoompopopopopoopopop");
  } else {
    scrollContainer.style.transform = "translateX(0px)";
    scrollContainer.style.transitionDuration = ".2s";
  }
});