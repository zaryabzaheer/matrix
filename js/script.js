var  body = document.getElementsByTagName("body")
body.scrollTop = 0;

var toggle = false
function sidemneu() {
  var sideMenu = document.getElementById("sidemenu");
  sideMenu.classList.toggle("alpha");
  var sidebarBtn = document.getElementById("sidebar-btn");
  if(toggle === true){
    sidebarBtn.src = 'images/bars.svg'
  }else{
    sidebarBtn.src = 'images/cross-img.svg'
  }
  toggle = !toggle
}

$('.explore-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [{

      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }]
  });



  var vid = document.getElementById("myVideo");
  var duration = vid.duration;
  ;
  setInterval(function () {
    var current = vid.currentTime;
  
    if( current > 5){
      console.log('2222');
      $('.banner-content').addClass('show');
    }
  },
    
   100);
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-one",
    toggleActions: "play pause pause reverse",
    scrub: false,
    pin:false,
    start: "top",
    end: "bottom 100%",
    pinSpacing:true,
  },
});
let te = gsap.timeline({
  scrollTrigger: {
    trigger: ".life-social-section",
    toggleActions: "play pause pause reverse",
    scrub: 9,
    pinSpacing:false,
    start: "top",
    end: "bottom 100%",
    
  },
});
let ty = gsap.timeline({
  scrollTrigger: {
    trigger: ".matrix-section",
    toggleActions: "play pause pause reverse",
    scrub: false,
    pinSpacing:false,
    
  },
});
let ta = gsap.timeline({
  scrollTrigger: {
    trigger: ".life-social-section",
    toggleActions: "play pause pause reverse",
    scrub: 5,
    pinSpacing:false,
    
  },
});
let tb = gsap.timeline({
  scrollTrigger: {
    trigger: ".matrix-section",
    toggleActions: "play pause pause reverse",
    scrub: 5,
    pinSpacing:false,
    
  },
});
let tz = gsap.timeline({
  scrollTrigger: {
    trigger: ".matrix-section",
    toggleActions: "play pause pause reverse",
    scrub: true,
    pinSpacing:false, 
  },
});
tl.to(".banner-wrapper",1, {opacity:0, zIndex:0},"-=1");
tl.to(".life-social", {opacity: 1, zIndex: 30, duration: 1});
tl.to(".life-circle ",4, {opacity:1},"-=1");
tl.from(".life-circle",1, {scale:0.8}, "-=3");
tl.to(".life-social-content,.life-circle-icon", {opacity:1}, "-=3");
tl.from(".life-social-content h2", {opacity: 0.1, scale: 2.1, duration: 1, x: 400}, "-=3");
tl.from(".life-social-content p", {duration: 1,x: -400}, "-=3");
tl.from(".custom-btn .theme-button",  {css:{duration: 1,borderRadius: "10px"}}, "-=3");
tl.to(".custom-btn .theme-button",  {css:{duration: 1,borderRadius: "35px"}}, "-=3");
tl.from(".custom-btn", {duration: 1,scale: 2,y:300}, "-=3");
tl.from(".life-circle-lottie", { scale: 2, duration: 1 ,width:"1200px"}, "-=3");
ta.to(".life-social", {autoAlpha:0}, "-=7");
// 
te.to(".life-social-content", {duration: 1,autoAlpha:0,position:"relative",scale:0.2,top:"50%",left:"50%","transform":"translate(-50%,-50%)",x:400}, "-=5");
te.to(".life-circle-lottie", {autoAlpha:0,scale:0.2,x:-300,duration: 1}, "-=5");
te.to(".life-social-circle", {scale: 5, opacity: 0.1, duration: 1}, "-=4");
te.to(".life-social-section",1, {autoAlpha:0, zIndex: 0,},"-=4");
// 
ty.from(".matrix-circle",{scale: 5},"-=2");
ty.to(".matrix",3, {opacity: 1, zIndex: 30,duration: 1,},"-=1");
ty.from(".matrix-content", 1,{opacity: 0.1, scale: 0.1, duration: 1, x: 100, y: 50 }, "-=1");
ty.from(".matrix-lottie",1, {opacity: 0.1, scale: 0.1, duration: 1, x:-200, y:-50,}, "-=1");
tb.to(".matrix-section", {autoAlpha:0},"-=1");

let tr = gsap.timeline({
  scrollTrigger: {
    trigger: ".roadmap",
    toggleActions: "play resume resume reverse",
    scrub: false,
    // pin: true, 
    start: "top 10%",
    end: "bottom",
  }
});
tr.from(".road-box-one", {opacity: 0.1, y: 600, duration: 2,}, "-=1");
tr.from(".road-box-two", {opacity: 0.1, y: 500, duration: 2,}, "-=1");
tr.from(".road-box-three", {opacity: 0, y: -500, duration: 2,}, "-=1");

let tp = gsap.timeline({
  scrollTrigger: {
    trigger: ".platform",
    toggleActions: "play resume resume reverse",
    scrub: false,
    start: "top",  
    end: "center",
    pin: ".platform",
    pinSpacing:false,
  }
})
tp.to(".platform-img", {duration: 3, x: "-1900px", autoAlpha: 0, zIndex: 0,ease:'power2.inOut'});
// tp.to(".platform", {autoAlpha:0});

let tf = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    toggleActions: "play resume resume reverse",
    scrub: false,
    start: "center",
    end: "top 30%",
  }
})
tp.to(".footer-girl", {duration: 1, left: -200}, "-=1");
tp.to(".footer-boy", {duration: 1, right: -145}, "-=1");