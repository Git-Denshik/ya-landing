document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const cards = document.querySelectorAll('.wrapper-person__card');
    const totalCards = cards.length;
    const interval = 4000;

    const showCard = (index) => {
        cards.forEach(card => {
            card.style.transform = `translateX(-${index * 100}%)`; // Смещение карточки
        });
        updatePagination(index);
    }

    const nextCard = () => {
        currentIndex = (currentIndex + 1) % totalCards;
        showCard(currentIndex);
    }

    const prevCard = () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        showCard(currentIndex);
    }

    const updatePagination = (index) => {
        const currentPage = document.querySelector('.wrapper-person-pagination-current');
        currentPage.textContent = index + 1;
    }

    // Автоматическая смена карточек
    setInterval(nextCard, interval);

    const nextButton = document.querySelector('.wrapper-person-button-next');
    const prevButton = document.querySelector('.wrapper-person-button-prev');

    nextButton.addEventListener('click', nextCard);
    prevButton.addEventListener('click', prevCard);
});