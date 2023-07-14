let menyuIconu = document.querySelector('.fa-bars')

let navbarEl = document.querySelector('header .header-section .navbar')



menyuIconu.addEventListener('click', function(){
    menyuIconu.classList.toggle('fa-times')
    navbarEl.classList.toggle('active')
})


// swiperin js 
var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
  });