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
tl
.to('.lft',{
    xPercent: -10,
    stagger : 0.03,
}, 'b')
.to('.rght',{
    xPercent:10,
    stagger : 0.03,
}, 'b')