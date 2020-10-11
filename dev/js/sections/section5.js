import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section5TL = gsap.timeline();
section5TL.from(".section5p",{durtion:0.1,alpha:0, y:20})
            

export function section5Animation(){

    ScrollTrigger.create({
        markers: true,
        animation: section5TL,
        toggleActions:"start",
        trigger: "#section5",
        scrub:"false",
        start:"top 50%",
        end:"bottom 50%"
    
    });
}
