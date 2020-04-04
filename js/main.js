// Selecting the zoom in scale of the main wrapper
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


// Image replacing
var tlSecondScroll = new TimelineMax();
// moving the images to left and right
tlSecondScroll
.to(".iphone1", 3, {x: "-54%"})
.to(".iphone2", 3, {x: "54%"}, "-=3")
// adding opacity 0 to text
.from(".iphone1-text", 0.3,{autoAlpha: 0}, "-=3")
.from(".iphone2-text", 0.3,{autoAlpha: 0}, "-=3")
// at the same time moving the text along 
.to(".iphone1-text", 3,{x:"-30%"}, "-=3")
.to(".iphone2-text", 3,{x:"30%"}, "-=3")
// changing position abosulte image property to display block
.set(".iphone-stick", {display: "block"})
// showing the images
.to(".iphone1-img-behind", 3, {x: "-50%"})
.to(".iphone2-img-behind", 3, {x: "50%"}, "-=3")
// hiding the images
.to(".iphone1-img", 0.5, {autoAlpha: 0}, "-=3")
.to(".iphone2-img", 0.3, {autoAlpha: 0}, "-=3")
// at the sane the text
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