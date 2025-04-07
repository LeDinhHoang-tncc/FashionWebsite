document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.dot');
    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        // Cập nhật active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });
    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });
    setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 8000);
});
/*hide menu*/
document.addEventListener("DOMContentLoaded", function () {
    const newsItems = document.querySelectorAll(".news-container .news-item");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let currentVisible = 16;
    const step = 8;         

    loadMoreBtn.addEventListener("click", function () {
        for (let i = currentVisible; i < currentVisible + step; i++) {
            if (newsItems[i]) {
                newsItems[i].classList.remove("hidden");
            }
        }
        currentVisible += step;
    });
});
