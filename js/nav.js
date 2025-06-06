window.onscroll = function() {
    stickyNavbar();
    scrollFunction();
  };
  
  var navbarHeader = document.getElementById("navbarHeader");
  var navbarFooter = document.getElementById("navbarFooter");

  var stickyPoint = navbarFooter.offsetTop;
  
  function stickyNavbar() {
    if (window.pageYOffset > stickyPoint) {
      navbarFooter.classList.add("fixed-navbar");
      navbarHeader.classList.add("hidden-navbar");
    } else {
      navbarFooter.classList.remove("fixed-navbar");
      navbarHeader.classList.remove("hidden-navbar");
    }
  }
  
    /* Nút back to top */
  function scrollFunction() {
    // Hiển thị cả hai nút khi scroll xuống
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("backToTopBtn").style.display = "block";
      document.getElementById("bellBtn").style.display = "block";
    } else {
      document.getElementById("backToTopBtn").style.display = "none";
      document.getElementById("bellBtn").style.display = "none";
    }
  }
  
// Thêm sự kiện click cho nút chuông
document.getElementById('bellBtn').addEventListener('click', function() {
  window.location.href = "https://www.google.com/?hl=vi"; // Thay bằng URL bạn muốn
});
  // Thêm sự kiện click cho nút backtotop
  document.getElementById('backToTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  /* Menu mini */
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.toggle');
  const closeBtn = document.querySelector('.close-toggle');
  
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  /* TÌM KIẾM* */

  const searchInput = document.getElementById('search');
  const searchIcon = document.getElementById('search-icon');
  const otherElements = document.querySelectorAll('.hide-on-search');
  const newsItems = document.querySelectorAll('.news-item');
  const newsTrend = document.querySelectorAll('.trends-item');
  
  function searchNews() {
    const keyword = searchInput.value.toLowerCase().trim();
    let hasResult = false;
  
    newsItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      const match = text.includes(keyword);
      item.style.display = match ? 'block' : 'none';
      if (match) hasResult = true;
    });
  
    newsTrend.forEach(item => {
      const text = item.textContent.toLowerCase();
      const match = text.includes(keyword);
      item.style.display = match ? 'block' : 'none';
      if (match) hasResult = true;
    });
  }
  
  
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchNews();
    }
  });
  
  searchIcon.addEventListener('click', function () {
    searchNews();
  });
  