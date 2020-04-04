var tlFirstScroll = new TimelineMax();


tlFirstScroll
.set('.iphone-image-wrapper', {scale: 3, transformOrigin:"center top"})
.to('.iphone-image-wrapper', 3, {scale: 2.2, y: '-50%'})
.to('.iphone-image-wrapper', 3, {scale: 1, y: '0%'})



var controller = new ScrollMagic.Controller();


// First scene

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger1',
    triggerHook:0,
    duration: '100%'
})


.setTween(tlFirstScroll)
// .addIndicators()
.addTo(controller);


var tlSecondScroll = new TimelineMax();

tlSecondScroll
.to(".iphone1", 3, {x: "-54%"})
.to(".iphone2", 3, {x: "54%"}, "-=3")
.from(".iphone1-text", 0.3,{autoAlpha: 0}, "-=3")
.from(".iphone2-text", 0.3,{autoAlpha: 0}, "-=3")
.to(".iphone1-text", 3,{x:"-30%"}, "-=3")
.to(".iphone2-text", 3,{x:"30%"}, "-=3")

.set(".iphone-stick", {display: "block"})

.to(".iphone1-img-behind", 3, {x: "-50%"})
.to(".iphone2-img-behind", 3, {x: "50%"}, "-=3")

.to(".iphone1-img", 0.5, {autoAlpha: 0}, "-=3")
.to(".iphone2-img", 0.3, {autoAlpha: 0}, "-=3")

.to(".iphone1-text", 0.3, {autoAlpha: 0},"-=3")
.to(".iphone2-text", 0.3, {autoAlpha: 0}, "-=3")

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger2",
    triggerHook: 0,
    duration: "100%"
})

.setTween(tlSecondScroll)
.setPin(".trigger2")
// .addIndicators()
.addTo(controller);