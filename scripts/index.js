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


// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");
// const cardsContainer = document.querySelector(".cards");
// const cards = document.querySelectorAll(".card");
// const cardWidth = cards[0].offsetWidth;
// let currentIndex = 0;
// let visibleCards = 3;

// function updateVisibility() {
//   prevButton.classList.toggle('hidden', currentIndex === 0);
//   nextButton.classList.toggle('hidden', currentIndex >= cards.length - visibleCards);
// }

// function showNextCard() {
//   if (currentIndex < cards.length - visibleCards) {
//     currentIndex++;
//     updateCardsVisibility();
//   }
// }

// function showPrevCard() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateCardsVisibility();
//   }
// }

// function updateCardsVisibility() {
//   cards.forEach((card, index) => {
//     card.classList.toggle('hidden', index < currentIndex || index >= currentIndex + visibleCards);
//   });
//   updateVisibility();
// }

// prevButton.addEventListener("click", showPrevCard);
// nextButton.addEventListener("click", showNextCard);

// function updateVisibleCards() {
//   if (window.innerWidth <= 768) {
//     visibleCards = 1;
//   } else if (window.innerWidth <= 992) {
//     visibleCards = 2;
//   } else {
//     visibleCards = 3;
//   }
//   updateCardsVisibility();
// }

// updateVisibleCards(); // Atualiza os cards visíveis inicialmente

// window.addEventListener('resize', updateVisibleCards); 

