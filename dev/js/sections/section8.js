import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section8TL = gsap.timeline();
section8TL.from("#cats",{durtion:0.2,alpha:1, x:70})
            .from("#quote",{durtion:0.2,alpha:1, x:-70});

export function section8Animation(){

    ScrollTrigger.create({
        markers: true,
        animation: section8TL,
        toggleActions:"start",
        trigger: "#section8",
        scrub:true,
        start:"top 50%",
        end:"bottom 50%"
    
    });
}






