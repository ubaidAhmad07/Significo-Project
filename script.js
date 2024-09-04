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
var tl = gsap.timeline({
    scrollTrigger : {
        scroller : 'body',
        trigger: '.cards h1',
        start : 'top 50%',
        end : 'bottom 40%',
        scrub : 2,
        markers: true,
    },
})


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

tl.to('.c1',{
    width : '80%',
    backgroundColor : '#000000',
    color : '#AEDEE0',
})
.to('.c2',{
    width : '80%',
    backgroundColor : '#000000',
    color : '#AEDEE0',
})
.to('.c3',{
    width : '80%',
    backgroundColor : '#000000',
    color : '#AEDEE0',
})
.to('.c4',{
    width : '80%',
    backgroundColor : '#000000',
    color : '#AEDEE0',
})
