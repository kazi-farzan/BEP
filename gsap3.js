gsap.to("#page1 h1",{
    transform: "translateX(-170%)",
    scrollTrigger:{
        trigger: "#page2 ",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -300%",//change this to a jigher number for slower scroll
        pin: true,//whenever you use pin use parent in the trigger
        scrub:2,
    }
})