gsap.from("#page4 #grid1",{
    rotate: 720,  
    duration:2, 
    scrollTrigger:{
      trigger:"#page4 #grid1",
      scroller: "body",      
      start: "top 40%",
      end: "top 10%",
      scrub: 2,
    }
  });
  gsap.to("#page4 #grid1",{
    scale:1.3,
    yoyo:true,
    repeat:1,
    duration:2, 
    scrollTrigger:{
      trigger:"#page4 #grid1",
      scroller: "body",      
      start: "top 40%",
      end: "top 10%",
      scrub: 2,
    }
  });
  gsap.from("#page4 #grid1 .box-small",{
    rotate: -720,
    duration:2, 
    scrollTrigger:{
      trigger:"#page4 #grid1 .box-small",
      scroller: "body",      
      start: "top 40%",
      end: "top 10%",
      scrub: 2.1,
    }
  });