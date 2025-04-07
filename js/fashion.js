document.addEventListener("DOMContentLoaded", function () {
    // Xử lý cho news-container
    const newsItems = document.querySelectorAll(".news-container .news-item");
    const loadMoreNewsBtn = document.getElementById("loadMoreNewsBtn");

    let currentVisibleNews = 6;
    const stepNews = 3;

    if (loadMoreNewsBtn) {
        loadMoreNewsBtn.addEventListener("click", function () {
            for (let i = currentVisibleNews; i < currentVisibleNews + stepNews; i++) {
                if (newsItems[i]) {
                    newsItems[i].classList.remove("hidden");
                }
            }
            currentVisibleNews += stepNews;

            // Ẩn nút nếu không còn tin nào để hiển thị
            if (currentVisibleNews >= newsItems.length) {
                loadMoreNewsBtn.style.display = "none";
            }
        });
    }

    // Xử lý cho trends-container
    const trendsItems = document.querySelectorAll(".trends-container .trends-item");
    const loadMoreTrendsBtn = document.getElementById("loadMoreTrendsBtn");

    let currentVisibleTrends = 6;
    const stepTrends = 3;

    if (loadMoreTrendsBtn) {
        loadMoreTrendsBtn.addEventListener("click", function () {
            for (let i = currentVisibleTrends; i < currentVisibleTrends + stepTrends; i++) {
                if (trendsItems[i]) {
                    trendsItems[i].classList.remove("hidden");
                }
            }
            currentVisibleTrends += stepTrends;

            // Ẩn nút nếu không còn tin nào để hiển thị
            if (currentVisibleTrends >= trendsItems.length) {
                loadMoreTrendsBtn.style.display = "none";
            }
        });
    }

    // Xử lý cho gallery-container  
    const galleryItems = document.querySelectorAll(".gallery-container .gallerys-item");
    const loadMoreGalleryBtn = document.getElementById("loadMoreGalleryBtn");

    let currentVisibleGallery = 3;
    const stepGallery = 3;

    if (loadMoreGalleryBtn) {
        loadMoreGalleryBtn.addEventListener("click", function () {
            for (let i = currentVisibleGallery; i < currentVisibleGallery + stepGallery; i++) {
                if (galleryItems[i]) {
                    galleryItems[i].classList.remove("hidden");
                }
            }
            currentVisibleGallery += stepGallery;

            // Ẩn nút nếu không còn tin nào để hiển thị
            if (currentVisibleGallery >= galleryItems.length) {
                loadMoreGalleryBtn.style.display = "none";
            }
        });
    }
});