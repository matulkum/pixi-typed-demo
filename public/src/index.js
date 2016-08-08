"use strict";
var tween_js_1 = require("tween.js");
var UI_1 = require("./UI");
var renderer;
var stage;
window.onload = function () {
    renderer = new PIXI.WebGLRenderer(800, 600);
    stage = new PIXI.Container();
    document.body.appendChild(renderer.view);
    var q = new UI_1.LabelButton('some label');
    // alert('ready');
    var t = new tween_js_1.Tween();
    q.x = 200;
    stage.addChild(q);
    requestAnimationFrame(tick);
    function tick(time) {
        var sin = Math.sin(time / 500) * 200;
        sin += 300;
        q.y = sin;
        q.rotation = time / 500;
        renderer.render(stage);
        requestAnimationFrame(tick);
    }
};
//# sourceMappingURL=index.js.map