import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section3TL = gsap.timeline();
section3TL.from("#madhatter, #alice, #bug",{durtion:2,alpha:0,x: 70})
            .from("#red, #white, #cat",{durtion:1,alpha:0,x:-70, delay:0.2})
            .from("#hare, #mouse, #rabbit",{durtion:1,alpha:0,x:70, delay: 0.3});

export function section3Animation(){

    ScrollTrigger.create({
        animation: section3TL,
        toggleActions:"play none none stop",
        trigger: "#section3",
        start:"top 50%",
        end:"bottom 50%"
    
    });
}






