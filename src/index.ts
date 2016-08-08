// import * as TWEEN from "gsap";

import {LabelButton} from "./UI";
import PixiStage from  "./PixiStage";


window.onload = () => {
    
    let pixistage = new PixiStage();

    

    // document.body.appendChild(renderer.view);

    let q = new LabelButton('some label');

    // alert('ready');
    q.x = 150;
    pixistage.container.addChild(q);
    pixistage.start();
    pixistage.ticker.add(tick);
    // TweenLite.to(q, 5, { y: 500 });

    
    function tick() {
        let time = pixistage.ticker.lastTime;
        
        let sin = Math.sin(time / 500) * 150;
        sin += 300;
        q.y = sin;
        q.rotation = time/500;

    }
}

