function locomotiv(){
  gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

locomotiv();


//  GSAP code

 var time = gsap.timeline()


 // Page 1 Gsap animation.

 time.from("nav",{
  y:-150,
  duration: 1.5,
  stagger:0.5
 })
 time.from("#text1 p",{
  y:200,
  duration: 1.5
 })
 gsap.from("#text2 h1,h2,h3",{
  x:600,
  duration: 1.3, 
  stagger:0.5 ,
  opacity:0,
  ease: "power5.out",
  delay:1
 })
 
 gsap.from(".text04 p",{
  y:-200,
  duration: 1.5,
  opacity:0,
  delay:1,
  scale:0,
  scrollTrigger:{
      trigger:"#text4 p",
      scroller:"#main",
      start:"top 70%",
      // markers:true,
      end:"top 40%",
      scrub:5,
      pin:true
  }
})

 



