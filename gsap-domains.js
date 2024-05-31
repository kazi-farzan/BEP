gsap.from("#page4 #grid1",{
    rotate: 360,  
    duration:2, 
    scrollTrigger:{
      trigger:"#page4 #grid1",
      scroller: "body",
      markers:true,
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
      markers:true,
      start: "top 40%",
      end: "top 10%",
      scrub: 2,
    }
  });
  gsap.from("#page4 #grid1 .box-small",{
    rotate: -360,
    duration:2, 
    scrollTrigger:{
      trigger:"#page4 #grid1 .box-small",
      scroller: "body",
      markers:true,
      start: "top 40%",
      end: "top 10%",
      scrub: 2.1,
    }
  });