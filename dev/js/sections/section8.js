import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section8TL = gsap.timeline();
section8TL.from("#container",{durtion:0.2,alpha:0, y:35})
            

export function section8Animation(){

    ScrollTrigger.create({
        animation: section8TL,
        toggleActions:"start",
        trigger: "#section8",
        scrub:true,
        start:"top 50%",
        end:"bottom 50%"
    
    });
}






