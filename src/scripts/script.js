

window.addEventListener('DOMContentLoaded', (event) => {



    console.log('DOM fully loaded and parsed');

    let presence = document.querySelector('#images')
    console.log(presence);

      document.querySelectorAll('.link-projects').forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault()
          document.querySelector('.sub-menu').classList.toggle('show')
          if(document.querySelector('.text-box')) {
            document.querySelector('.text-box').classList.toggle('notFade')
          }
          if(document.querySelector('.about-container')) {
              document.querySelector('.about-container').classList.toggle('notFade')
          }



        })

      })






    // --------- Target Begining ---------//

    //target all elements (img, video) which have class .element
    //count how many elements
    //iterate and add to everyone class .element_i

    // const elementsBoard = document.querySelectorAll('.element')
    // let elementsAmmount = elementsBoard.length
    //
    // for(let i = 0; i < elementsAmmount; i++) {
    //   // getRandomInt(80,120)
    //   elementsBoard[i].setAttribute("style", `max-width:${getRandomInt(50,80)}%; max-height:${getRandomInt(80,120)}%;`);
    //   elementsBoard[i].classList.add(`element_${i+1}`)
    // }


    // --------- Target End ---------//


    //mouseover menu heading

    let navHeader = document.getElementById("nav");
    let subMenu = document.querySelector(".sub-menu");

    // subMenu.style.visibility="hidden";

    navHeader.addEventListener("mouseover", function( event ) {
      // highlight the mouseenter target
      // subMenu.style.visibility = "visible";

    // reset the color after a short delay
      // setTimeout(function() {
      //   event.target.style.color = "";
      // }, 500);
    }, false);



    // const images = document.querySelectorAll('[data-src]');
    // const config = {
    //   rootMargin: '0px 0px 50px 0px',
    //   threshold: 0
    // };
    // let loaded = 0;
    //
    // let observer = new IntersectionObserver(function (entries, self) {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       // console.log(`Image ${entry.target.src} is in the viewport!`);
    //       preloadImage(entry.target);
    //       // Stop watching and load the image
    //       self.unobserve(entry.target);
    //     }
    //   });
    // }, config);
    //
    // images.forEach(image => {
    //   observer.observe(image);
    // });
    //
    // function preloadImage(img) {
    //   const src = img.getAttribute('data-src');
    //   if (!src) { return; }
    //   img.src = src;
    // }





});






// check if an element is partially or completely visible in viewport
// consider only top element position

if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..










(function() {


    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('images').scrollLeft -= (delta*20); // Multiplied by 40
        e.preventDefault();
    }
    // if (document.getElementById('images').addEventListener) {
    if (document.getElementById('images')) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('images').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('images').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        // document.getElementById('images').addEventListener("onmousewheel", scrollHorizontally);
    }
})();
(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('scrolled').scrollLeft -= (delta*20); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('scrolled')) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('scrolled').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('scrolled').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        // document.getElementById('scrolled').attachEvent("onmousewheel", scrollHorizontally);
    }
})();

}
(function() {

 const middleElement = document.getElementById('direct3');
 const wrapperElement = document.getElementById('section');
 const boardElement = document.getElementById('board');


  if (middleElement) {
    const absoluteElementTop = middleElement.offsetLeft + (middleElement.clientWidth/2);
    const middle = absoluteElementTop - (wrapperElement.clientWidth/1.2);
    boardElement.scrollTo(middle, 0);

  }
})();

// //const images = document.querySelector('#images');
// const img1 = document.querySelector('[data-img="1"]');
// const img2 = document.querySelector('[data-img="2"]');
//
// function showImages(event) {
//   const id = event.target.dataset.img;
//
//   import(/* webpackPrefetch: true */ `./buildImages`)
//     .then(r => {
//       const buildImages = r.default;
//       buildImages(id);
//     })
//     .catch(err => console.error(err));
//     document.getElementById("images").classList.add("show");
// };
// const hideImages = () => {
//
//   document.querySelectorAll('#images img').forEach(e => e.parentNode.removeChild(e));
//
//
// };

// img1.addEventListener('click', showImages);
// img2.addEventListener('click', showImages);
// document.getElementById("close").addEventListener('click', hideImages);



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
