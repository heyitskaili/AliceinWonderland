import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section4TL = gsap.timeline();
section4TL.from("#tea2",{durtion:2,alpha:0,y: 70})
            .from("#tea1",{durtion:2,alpha:0,x:-70})
            .from("#tea3",{durtion:2,alpha:0,x:70});

export function section4Animation(){

    ScrollTrigger.create({
        animation: section4TL,
        toggleActions:"restart restart",
        trigger: "#section4",
        start:"top 50%",
        end:"bottom 50%"
    
    });
}






