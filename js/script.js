let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}





window.onscroll = () =>{
  if (window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }
    else{
      document.querySelector('.header').classList.remove('active');
    }
  
}
// the modal of the login form of container
//now we write the js code of js how we 
// do the code of js for the modal


document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}



// home e jevabe pic ti add kora hoyese seti ke mouse nilei lafano effect er jonno

document.querySelector('.home').onmousemove = (e) =>{
  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed)/90;
    let y = (window.innerHeight - e.pageY * speed)/90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`
  })
}

document.querySelector('.home').onmouseleave = (e) =>{
  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`
  })
};







// slide swiper

var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    991: {
      slidesPerView: 3,
      
    },
    
  },
});


// featured section

var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    991: {
      slidesPerView: 3,
      
    },
    
  },
});




// review section start

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    991: {
      slidesPerView: 3,
      
    },
    
  },
});