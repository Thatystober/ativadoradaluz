if(document.querySelector("#home")){
  
  const carousels = document.querySelectorAll(".carousel");
  
  carousels.forEach(carousel => {
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");
    // const cardsContainer = carousel.querySelector(".cards");
    const cards = carousel.querySelectorAll(".card");
    // const cardWidth = cards[0].offsetWidth;
    let currentIndex = 0;
    let visibleCards = 3;
  
    function updateVisibility() {
      prevButton.classList.toggle('hidden', currentIndex === 0);
      nextButton.classList.toggle('hidden', currentIndex >= cards.length - visibleCards);
    }
  
    function showNextCard() {
      if (currentIndex < cards.length - visibleCards) {
        currentIndex++;
        updateCardsVisibility();
      }
    }
  
    function showPrevCard() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCardsVisibility();
      }
    }
  
    function updateCardsVisibility() {
      cards.forEach((card, index) => {
        card.classList.toggle('hidden', index < currentIndex || index >= currentIndex + visibleCards);
      });
      updateVisibility();
    }
  
    prevButton.addEventListener("click", showPrevCard);
    nextButton.addEventListener("click", showNextCard);
  
    function updateVisibleCards() {
      if (window.innerWidth <= 768) {
        visibleCards = 1;
      } else if (window.innerWidth <= 992) {
        visibleCards = 2;
      } else {
        visibleCards = 3;
      }
      updateCardsVisibility();
    }
  
    updateVisibleCards(); // Atualiza os cards visíveis inicialmente
  
    window.addEventListener('resize', updateVisibleCards);
  });
}

if(document.querySelector(".photos")){
  const slides = document.querySelector('.slides');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const totalSlides = document.querySelectorAll('.slides img').length;
  
  let currentIndex = 0;
  
  function updateCarousel() {
    const offset = -currentIndex * (100 / 3); // Ajuste para três imagens visíveis
    slides.style.transform = `translateX(${offset}%)`;
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 3;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    updateCarousel();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 3) ? currentIndex + 1 : 0;
    updateCarousel();
  });
  
  // Optional: Auto slide every 3 seconds
  // setInterval(() => {
  //   currentIndex = (currentIndex < totalSlides - 3) ? currentIndex + 1 : 0;
  //   updateCarousel();
  // }, 3000);
}