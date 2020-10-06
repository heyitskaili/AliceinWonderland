import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section3TL = gsap.timeline();
section3TL.from("#madhatter, #alice, #bug",{durtion:2,alpha:0,x: 70})
            .from("#red, #white, #cat",{durtion:2,alpha:0,x:-70, delay:0.5})
            .from("#hare, #mouse, #rabbit",{durtion:2,alpha:0,x:70, delay:1});

export function section3Animation(){

    ScrollTrigger.create({
        markers: true,
        animation: section3TL,
        toggleActions:"play none none none",
        trigger: "#section3",
        start:"top 50%",
        end:"bottom 50%"
    
    });
}






