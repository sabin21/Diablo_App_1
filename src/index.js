
import '@/styles/index.scss';

import * as THREE from 'three';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    }
});

//----------------
const winHeight = window.innerHeight;
var pinBoxWidth = window.innerHeight*0.85185;
//var featureCardWidth = document.querySelector('.card-wrap').offsetHeight * 0.85;
//let tipConWidth = document.querySelector('.tip-wrap').offsetWidth;
let tipConWidth = window.innerHeight * 3.22;
console.log(tipConWidth);

var horizontalScrollLength = pinBoxWidth + document.querySelector('.hero-con-wrap').offsetWidth + document.querySelector('.header').offsetWidth - window.innerWidth;

/*
let featureCards = document.querySelectorAll('.card-wrap');
let featureCardsWrap = document.querySelector('.features-pin-wrap');
let featureCardsWrapWidth = featureCardWidth * 4 + (140*5)- window.innerWidth;
function initCards(){
    for(var i =0; i<featureCards.length; i++){
        featureCards[i].style.width = featureCardWidth + 'px';
    }
    featureCardsWrap.style.width = featureCardWidth * 4 + (140*5) +'px';
    return;
};
initCards();
*/

function initHeadline(headline1Width){
    headline1Width = window.innerWidth;
}
initHeadline();

let headline1Width = document.querySelector('.headline-copy-1').offsetWidth;
let headline2Width = document.querySelector('.headline-copy-2').offsetWidth;
let speed = 100;
let headlineTL1 = new gsap.timeline();
headlineTL1
.add('start')
.to('#headline-1', 30, { x: -headline1Width*0.5, repeat:-1, ease: "none", yoyo:true})
.to('#headline-2', 28, { x: -headline2Width*0.5, repeat:-1, ease: "none", yoyo:true}, 'start')
.to('#headline-3', 32, { x: -headline1Width*0.5, repeat:-1, ease: "none", yoyo:true}, 'start')
.to('#headline-4', 34, { x: -headline2Width*0.5, repeat:-1, ease: "none", yoyo:true}, 'start')
.to('#headline-5', 28, { x: -headline1Width*0.5, repeat:-1, ease: "none", yoyo:true}, 'start');

function initSize(){
    
    const pictList = document.getElementsByClassName('gallery-pict');
    (() => {
        for (var i = 0; i < pictList.length; i++) {
            const pictItemHeight = [-(pictList[i].offsetHeight)];
            pictList[i].style.bottom = `${pictItemHeight}px`
        }
    })();

}
initSize();

gsap.to(".pin-wrap", {
scrollTrigger: {
    scroller: ".smooth-scroll",
    scrub: true,
    trigger: "#sectionPin",
    pin: "#sectionPin",
    start: "top top",
    end: horizontalScrollLength
}, 
x: -horizontalScrollLength,
ease: "none"
});

gsap.to(".tip-wrap", {
    scrollTrigger: {
        scroller: ".smooth-scroll",
        scrub: true,
        trigger: ".section-grid",
        pin: ".section-grid",
        start: "top top",
        end: tipConWidth + 'px'
    }, 
    x: -tipConWidth,
    ease: "none"
});
/*
gsap.to(".features-pin-wrap", {
    scrollTrigger: {
        scroller: ".smooth-scroll",
        scrub: true,
        trigger: ".section-features",
        pin: ".section-features",
        start: "top top",
        end: featureCardsWrap.style.width
    }, 
    x: -featureCardsWrapWidth,
    ease: "none"
});
*/
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


let pictTL = new gsap.timeline();
pictTL
.add('start')
.to('#pict-1',10,{ top:`-${winHeight}`,repeat:-1, ease: "none"})
.to('#pict-2',15,{ top:`-${winHeight}`,repeat:-1, ease: "none"}, 'start')
.to('#pict-3',12,{ top:`-${winHeight}`,repeat:-1, ease: "none"}, 'start')
.to('#pict-4',16,{ top:`-${winHeight}`,repeat:-1, ease: "none"}, 'start')
.to('#pict-5',17,{ top:`-${winHeight}`,repeat:-1, ease: "none"}, 'start')
.to('#pict-6',14,{ top:`-${winHeight}`,repeat:-1, ease: "none"}, 'start');

