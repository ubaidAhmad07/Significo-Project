gsap.set('.heros',{scale : 10})

var  tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'top 0%',
        end:'bottom top',
        scrub:2,
        pin : true
    },
});


tl.to('.video',{
    '--clip' : 0,
    ease : Power2
}, 'a')
.to('.heros',{
    scale :1,
    ease : Power2,
}, 'a')
.to('.left',{
    x: -10,
    stagger : 0.03,
}, 'b')
.to('.right',{
    x: 10,
}, 'b')