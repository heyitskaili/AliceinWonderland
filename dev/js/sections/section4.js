import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section4TL = gsap.timeline();
section4TL.from("#tea2",{durtion:2,alpha:0,y: 70, rotation:80})
            .from("#tea1",{durtion:2,alpha:0,x:-70, delay:0.3})
            .from("#tea3",{durtion:2,alpha:0,x:70, delay:0.3});

export function section4Animation(){

    ScrollTrigger.create({
        markers: true,
        animation: section4TL,
        toggleActions:"restart restart",
        trigger: "#section4",
        start:"top 50%",
        end:"bottom 50%"
    
    });
}






