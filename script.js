function homePageAnimation (){
    gsap.set('.heros',{scale : 10})

var  tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'top 0%',
        end:'bottom bottom',
        scrub:2,
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
}
function cardsAnimation () {
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
}

function page3Slider (){
    gsap.to('.slide',{
        scrollTrigger : {
            trigger : '.page3',
            start : 'top top',
            end : 'bottom bottom',
            scrub : 2,  
        },
        xPercent : '-300',
        ease : Power2,
    })
    
}
function colorChange (){
    document.querySelectorAll('.section')
    .forEach(function (e){        
        ScrollTrigger.create({
            trigger : e,
            start : 'top 50%',
            end : 'bottom 50%',
            onEnter : function (){
                let body = document.body.setAttribute('theme' , e.dataset.color)
                document.querySelector('.nav').setAttribute('theme', e.dataset.nav)  
            },
            onEnterBack : function () {
                document.body.setAttribute('theme' , e.dataset.color)
                document.querySelector('.nav').setAttribute('theme', e.dataset.nav)  

            }
        })
    })
}



colorChange()
homePageAnimation()
cardsAnimation()
page3Slider()