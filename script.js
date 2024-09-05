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
const cards = document.querySelectorAll(".cards")
cards.forEach(function(card){
    gsap.to(card,{
        scrollTrigger : {
            scroller : 'body',
            trigger: card,
            start : 'top 60%',
            end : 'top 60%',
            scrub : 1,
        },
        width : '80%',
        backgroundColor : '#000000',
        color : '#AEDEE0',
    })
    
})
