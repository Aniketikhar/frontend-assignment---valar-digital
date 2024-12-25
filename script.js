

// this code for carousel and other dynamic styling with respect to carousel and plan

const leftBtn = document.querySelector("#desktop-carousel .left-btn");
const rightBtn = document.querySelector("#desktop-carousel .right-btn");
const mobileLeftBtn = document.querySelector("#mobile-carousel .left-btn");
const mobileRightBtn = document.querySelector("#mobile-carousel .right-btn");

const planOptions = document.querySelectorAll(".plan-option");
let currentPlan = 1;
let currentImageIndex = 0;
const indicators = document.querySelector(".indicators");

const desktopPlans = {
  1: [
    "./assets/1 x Christmas Scent Bundles/desktop/Member Offer 1x - Desktop 01.webp",
    "./assets/1 x Christmas Scent Bundles/desktop/Member Offer 1x - Desktop 02.webp",
    "./assets/1 x Christmas Scent Bundles/desktop/Member Offer 1x - Desktop 03.webp",
    "./assets/1 x Christmas Scent Bundles/desktop/Member Offer 1x - Desktop 04.webp",
    "./assets/1 x Christmas Scent Bundles/desktop/Member Offer 1x - Desktop 05.webp",
  ],
  2: [
    "./assets/2 x Christmas Scent Bundles/desktop/Member Offer 2x - Desktop 05.webp",
    "./assets/2 x Christmas Scent Bundles/desktop/Member Offer 2x - Desktop 01.webp",
    "./assets/2 x Christmas Scent Bundles/desktop/Member Offer 2x - Desktop 02.webp",
    "./assets/2 x Christmas Scent Bundles/desktop/Member Offer 2x - Desktop 03.webp",
    "./assets/2 x Christmas Scent Bundles/desktop/Member Offer 2x - Desktop 04.webp",
  ],
  3: [
    "./assets/3 x Christmas Scent Bundles/desktop/Member Offer 3x - Desktop 03.webp",
    "./assets/3 x Christmas Scent Bundles/desktop/Member Offer 3x - Desktop 01.webp",
    "./assets/3 x Christmas Scent Bundles/desktop/Member Offer 3x - Desktop 02.webp",
    "./assets/3 x Christmas Scent Bundles/desktop/Member Offer 3x - Desktop 04.webp",
    "./assets/3 x Christmas Scent Bundles/desktop/Member Offer 3x - Desktop 05.webp",
  ],
};

const mobilePlans = {
  1: [
    "./assets/1 x Christmas Scent Bundles/mobile/Member Offer 1x - Mobile 01.webp",
    "./assets/1 x Christmas Scent Bundles/mobile/Member Offer 1x - Mobile 02.webp",
    "./assets/1 x Christmas Scent Bundles/mobile/Member Offer 1x - Mobile 03.webp",
    "./assets/1 x Christmas Scent Bundles/mobile/Member Offer 1x - Mobile 04.webp",
    "./assets/1 x Christmas Scent Bundles/mobile/Member Offer 1x - Mobile 05.webp",
  ],
  2: [
    "./assets/2 x Christmas Scent Bundles/mobile/Member Offer 2x - Mobile 01.webp",
    "./assets/2 x Christmas Scent Bundles/mobile/Member Offer 2x - Mobile 02.webp",
    "./assets/2 x Christmas Scent Bundles/mobile/Member Offer 2x - Mobile 03.webp",
    "./assets/2 x Christmas Scent Bundles/mobile/Member Offer 2x - Mobile 04.webp",
    "./assets/2 x Christmas Scent Bundles/mobile/Member Offer 2x - Mobile 05.webp",
  ],
  3: [
    "./assets/3 x Christmas Scent Bundles/mobile/Member Offer 3x - Mobile 01.webp",
    "./assets/3 x Christmas Scent Bundles/mobile/Member Offer 3x - Mobile 02.webp",
    "./assets/3 x Christmas Scent Bundles/mobile/Member Offer 3x - Mobile 03.webp",
    "./assets/3 x Christmas Scent Bundles/mobile/Member Offer 3x - Mobile 04.webp",
    "./assets/3 x Christmas Scent Bundles/mobile/Member Offer 3x - Mobile 05.webp",
  ],
};

function getImagesForCurrentDevice(plan) {
  const isMobile = window.innerWidth <= 425;
  return isMobile ? mobilePlans[plan] : desktopPlans[plan];
}


function updateCarouselVisibility() {
  const isMobile = window.innerWidth <= 425;
  const desktopCarousel = document.getElementById("desktop-carousel");
  const mobileCarousel = document.getElementById("mobile-carousel");

  if (isMobile) {
    desktopCarousel.style.display = "none";
    mobileCarousel.style.display = "block";
  } else {
    desktopCarousel.style.display = "block";
    mobileCarousel.style.display = "none";
  }
}

function loadImages(images) {
  const isMobile = window.innerWidth <= 425;
  const activeCarousel = document.querySelector(
    isMobile
      ? "#mobile-carousel .carousel-images"
      : "#desktop-carousel .carousel-images"
  );
  const activeIndicators = document.querySelector(
    isMobile ? "#mobile-carousel .indicators" : "#desktop-carousel .indicators"
  );
  activeCarousel.innerHTML = "";
  activeIndicators.innerHTML = "";

  images.forEach((img, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = img;
    imgElement.alt = img;
    if (index === 0) imgElement.classList.add("active");
    activeCarousel.appendChild(imgElement);

    const indicator = document.createElement("div");
    if (index === 0) indicator.classList.add("active");
    activeIndicators.appendChild(indicator);
  });

  currentImageIndex = 0;
}

function stylePlan() {
  const plans = ["plan1", "plan2", "plan3"];
  plans.forEach((planId) => {
    let planElement = document.getElementById(planId);
    console.log(planElement);
    if (planElement) {
      let imgTag = planElement.querySelector("img");
      let ulElement = planElement.querySelector("ul");
      if (imgTag) {
        imgTag.src = "/assets/notChecked.webp";
      }
      if (ulElement) {
        ulElement.style.display = "none";
      }
      planElement.classList.remove("selected-plan");
    }
  });


  let selectedPlan = document.getElementById(`plan${currentPlan}`);
  if (selectedPlan) {
    let imgTag = selectedPlan.querySelector("img");
    let ulElement = selectedPlan.querySelector("ul");
    let liElements = ulElement.querySelectorAll("li");
    if (imgTag) {
      imgTag.src = "/assets/checked.webp";
    }
    if (ulElement) {
      ulElement.style.display = "block";
    }

    selectedPlan.classList.add("selected-plan");
    liElements.forEach((li) => li.classList.add("checked"));


    
    const priceElement = selectedPlan.querySelector(".price");
    if (priceElement) {
      console.log(priceElement.textContent);
      selectedPrice = priceElement.innerHTML.trim()
    }

    const addToCartButton = document.querySelector(".add-to-cart");
    if (addToCartButton) {
      addToCartButton.innerHTML = `ADD TO CART | ${selectedPrice}`;
    }
    const priceStyle = selectedPlan.querySelector(".price").style;
    addToCartButton.querySelector("span")?.style && Object.assign(addToCartButton.querySelector("span").style, priceStyle);
  
  }
}

function loadImagesForCurrentPlan() {
  const images = getImagesForCurrentDevice(currentPlan);
  loadImages(images);
  stylePlan();
}

function updateActiveImage(index) {
  const isMobile = window.innerWidth <= 425;
  const activeCarousel = document.querySelector(
    isMobile
      ? "#mobile-carousel .carousel-images"
      : "#desktop-carousel .carousel-images"
  );
  const activeIndicators = document.querySelector(
    isMobile ? "#mobile-carousel .indicators" : "#desktop-carousel .indicators"
  );

  const images = activeCarousel.querySelectorAll("img");
  const dots = activeIndicators.querySelectorAll("div");

  images.forEach((img, i) => img.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

leftBtn.addEventListener("click", () => {
  const images = getImagesForCurrentDevice(currentPlan);
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateActiveImage(currentImageIndex);
});

rightBtn.addEventListener("click", () => {
  const images = getImagesForCurrentDevice(currentPlan);
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateActiveImage(currentImageIndex);
});

mobileLeftBtn.addEventListener("click", () => {
  const images = getImagesForCurrentDevice(currentPlan);
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateActiveImage(currentImageIndex);
});

mobileRightBtn.addEventListener("click", () => {
  const images = getImagesForCurrentDevice(currentPlan);
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateActiveImage(currentImageIndex);
});

planOptions.forEach((option) =>
  option.addEventListener("click", () => {
    currentPlan = parseInt(option.getAttribute("data-plan"));
    loadImagesForCurrentPlan();
  })
);

window.addEventListener("resize", () => {
  updateCarouselVisibility();
  loadImagesForCurrentPlan();
});

updateCarouselVisibility();
loadImagesForCurrentPlan();







// function for blended details 
document.querySelectorAll('.blend-details').forEach((blendDetails) => {
  blendDetails.addEventListener('click', function () {
    const details = this.nextElementSibling; 
    const icon = this.querySelector('#icon'); 

    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
      icon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3.375C9.07031 3.375 6.41406 4.9375 4.92969 7.4375C3.48438 9.97656 3.48438 13.0625 4.92969 15.5625C6.41406 18.1016 9.07031 19.625 12 19.625C14.8906 19.625 17.5469 18.1016 19.0312 15.5625C20.4766 13.0625 20.4766 9.97656 19.0312 7.4375C17.5469 4.9375 14.8906 3.375 12 3.375ZM12 21.5C8.40625 21.5 5.125 19.625 3.32812 16.5C1.53125 13.4141 1.53125 9.625 3.32812 6.5C5.125 3.41406 8.40625 1.5 12 1.5C15.5547 1.5 18.8359 3.41406 20.6328 6.5C22.4297 9.625 22.4297 13.4141 20.6328 16.5C18.8359 19.625 15.5547 21.5 12 21.5ZM9.1875 10.5625H14.8125C15.3203 10.5625 15.75 10.9922 15.75 11.5C15.75 12.0469 15.3203 12.4375 14.8125 12.4375H9.1875C8.64062 12.4375 8.25 12.0469 8.25 11.5C8.25 10.9922 8.64062 10.5625 9.1875 10.5625Z" fill="#11322C"/>
              </svg>`; 
    } else {
      details.style.display = 'none';
      icon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.375C9.07031 3.375 6.41406 4.9375 4.92969 7.4375C3.48438 9.97656 3.48438 13.0625 4.92969 15.5625C6.41406 18.1016 9.07031 19.625 12 19.625C14.8906 19.625 17.5469 18.1016 19.0312 15.5625C20.4766 13.0625 20.4766 9.97656 19.0312 7.4375C17.5469 4.9375 14.8906 3.375 12 3.375ZM12 21.5C8.40625 21.5 5.125 19.625 3.32812 16.5C1.53125 13.4141 1.53125 9.625 3.32812 6.5C5.125 3.41406 8.40625 1.5 12 1.5C15.5547 1.5 18.8359 3.41406 20.6328 6.5C22.4297 9.625 22.4297 13.4141 20.6328 16.5C18.8359 19.625 15.5547 21.5 12 21.5ZM11.0625 14.9375V12.4375H8.5625C8.01562 12.4375 7.625 12.0469 7.625 11.5C7.625 10.9922 8.01562 10.5625 8.5625 10.5625H11.0625V8.0625C11.0625 7.55469 11.4531 7.125 12 7.125C12.5078 7.125 12.9375 7.55469 12.9375 8.0625V10.5625H15.4375C15.9453 10.5625 16.375 10.9922 16.375 11.5C16.375 12.0469 15.9453 12.4375 15.4375 12.4375H12.9375V14.9375C12.9375 15.4844 12.5078 15.875 12 15.875C11.4531 15.875 11.0625 15.4844 11.0625 14.9375Z" fill="#11322C"/>
      </svg>`; 
    }
  });
});



// function for frequently ask questions
function toggleFaq(element) {
  const answer = element.querySelector('.faq-answer');
  const icon = element.querySelector('.faq-icon');

  answer.classList.toggle('open');

  if (answer.classList.contains('open')) {
    icon.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.375C9.07031 3.375 6.41406 4.9375 4.92969 7.4375C3.48438 9.97656 3.48438 13.0625 4.92969 15.5625C6.41406 18.1016 9.07031 19.625 12 19.625C14.8906 19.625 17.5469 18.1016 19.0312 15.5625C20.4766 13.0625 20.4766 9.97656 19.0312 7.4375C17.5469 4.9375 14.8906 3.375 12 3.375ZM12 21.5C8.40625 21.5 5.125 19.625 3.32812 16.5C1.53125 13.4141 1.53125 9.625 3.32812 6.5C5.125 3.41406 8.40625 1.5 12 1.5C15.5547 1.5 18.8359 3.41406 20.6328 6.5C22.4297 9.625 22.4297 13.4141 20.6328 16.5C18.8359 19.625 15.5547 21.5 12 21.5ZM11.0625 14.9375V12.4375H8.5625C8.01562 12.4375 7.625 12.0469 7.625 11.5C7.625 10.9922 8.01562 10.5625 8.5625 10.5625H11.0625V8.0625C11.0625 7.55469 11.4531 7.125 12 7.125C12.5078 7.125 12.9375 7.55469 12.9375 8.0625V10.5625H15.4375C15.9453 10.5625 16.375 10.9922 16.375 11.5C16.375 12.0469 15.9453 12.4375 15.4375 12.4375H12.9375V14.9375C12.9375 15.4844 12.5078 15.875 12 15.875C11.4531 15.875 11.0625 15.4844 11.0625 14.9375Z" fill="#11322C"/>
      </svg>
    `;
  } else {
    icon.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3.375C9.07031 3.375 6.41406 4.9375 4.92969 7.4375C3.48438 9.97656 3.48438 13.0625 4.92969 15.5625C6.41406 18.1016 9.07031 19.625 12 19.625C14.8906 19.625 17.5469 18.1016 19.0312 15.5625C20.4766 13.0625 20.4766 9.97656 19.0312 7.4375C17.5469 4.9375 14.8906 3.375 12 3.375ZM12 21.5C8.40625 21.5 5.125 19.625 3.32812 16.5C1.53125 13.4141 1.53125 9.625 3.32812 6.5C5.125 3.41406 8.40625 1.5 12 1.5C15.5547 1.5 18.8359 3.41406 20.6328 6.5C22.4297 9.625 22.4297 13.4141 20.6328 16.5C18.8359 19.625 15.5547 21.5 12 21.5ZM9.1875 10.5625H14.8125C15.3203 10.5625 15.75 10.9922 15.75 11.5C15.75 12.0469 15.3203 12.4375 14.8125 12.4375H9.1875C8.64062 12.4375 8.25 12.0469 8.25 11.5C8.25 10.9922 8.64062 10.5625 9.1875 10.5625Z" fill="#11322C"/>
              </svg>
    `;
  }
}

