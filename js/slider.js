document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 767) {
        const stageButtonPrev = document.querySelector('.stage-button-prev ');
        const stageButtonNext = document.querySelector('.stage-button-next');
        const stageCards = document.querySelectorAll('.stage-card__item');
        const bullets = document.querySelectorAll('.stage-pagination-bullet');

        let currentSlide = 0;

        const showSlide = (index) => {
            stageCards.forEach((card, i) => {
                if (i === index) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }

                if (index === 0) {
                    stageButtonPrev.style.backgroundColor = 'rgba(49, 49, 49, 0.2)';
                } else {
                    stageButtonPrev.style.backgroundColor = '#313131';
                }

                if (index === bullets.length - 1) {
                    stageButtonNext.style.backgroundColor = 'rgba(49, 49, 49, 0.2)';
                } else {
                    stageButtonNext.style.backgroundColor = '#313131';
                }
            });

            bullets.forEach((bullet, i) => {
                if (i === index) {
                    bullet.classList.add('stage-pagination-bullet-active');
                } else {
                    bullet.classList.remove('stage-pagination-bullet-active');
                }
            });
        }

        const prevSlide = () => {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        }

        const nextSlide = () => {
            if (currentSlide < stageCards.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        }

        stageButtonPrev.addEventListener('click', prevSlide);
        stageButtonNext.addEventListener('click', nextSlide);

        showSlide(currentSlide);
    }
});