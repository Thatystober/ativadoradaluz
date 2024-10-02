function initializeCarousel(containerSelector, itemSelector) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach(container => {
    const items = container.querySelectorAll(itemSelector);
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    let currentIndex = 0;
    let visibleItems = 3;

    function updateVisibility() {
      prevButton.classList.toggle('hidden', currentIndex === 0);
      nextButton.classList.toggle('hidden', currentIndex >= items.length - visibleItems);
    }

    function showNextItem() {
      if (currentIndex < items.length - visibleItems) {
        currentIndex++;
        updateItemsVisibility();
      }
    }

    function showPrevItem() {
      if (currentIndex > 0) {
        currentIndex--;
        updateItemsVisibility();
      }
    }

    function updateItemsVisibility() {
      items.forEach((item, index) => {
        item.classList.toggle('hidden', index < currentIndex || index >= currentIndex + visibleItems);
      });
      updateVisibility();
    }

    prevButton.addEventListener("click", showPrevItem);
    nextButton.addEventListener("click", showNextItem);

    function updateVisibleItems() {
      if (window.innerWidth <= 768) {
        visibleItems = 1;
      } else if (window.innerWidth <= 992) {
        visibleItems = 2;
      } else {
        visibleItems = 3;
      }
      updateItemsVisibility();
    }

    updateVisibleItems();

    window.addEventListener('resize', updateVisibleItems);
  });
}

if (document.querySelector(".photos")) {
  initializeCarousel('.photos', '.slides img');
}

if (document.querySelector("#home")) {
  initializeCarousel('.carousel', '.card');
}

function openModal(selector, img){
  const modal = document.querySelector(selector);
  modal.classList.add('show');
  const modalImg = modal.querySelector('img');
  modalImg.src = img;
}

function closeModal(selector){
  const modal = document.querySelector(selector);
  modal.classList.remove('show');
}