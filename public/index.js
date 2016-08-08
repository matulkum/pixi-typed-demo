(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var PixiStage = (function () {
    function PixiStage() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var canvas = document.getElementById('webgl');
        canvas.style.width = (w) + 'px';
        canvas.style.height = (h) + 'px';
        this.renderer = new PIXI.WebGLRenderer(w, h, {
            view: canvas,
            // antialias: true,
            resolution: 2,
        });
        this.container = new PIXI.Container();
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.add(this.tick.bind(this));
    }
    PixiStage.prototype.start = function () {
        if (this.ticker.started)
            return;
        this.ticker.start();
        return this;
    };
    PixiStage.prototype.tick = function () {
        this.renderer.render(this.container);
    };
    return PixiStage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PixiStage;

},{}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LabelButton = (function (_super) {
    __extends(LabelButton, _super);
    function LabelButton(text) {
        _super.call(this);
        this.text = text;
        var label = new PIXI.Text(text, {
            font: "regular 12px Arial",
            padding: 0
        });
        label.x = label.y = LabelButton.padding;
        var btnwidth = label.width + LabelButton.padding * 2;
        var btnHeight = label.height + LabelButton.padding * 2;
        var back = new PIXI.Graphics();
        back.beginFill(0xffffff);
        back.drawRect(0, 0, btnwidth, btnHeight);
        var backOver = new PIXI.Graphics();
        backOver.beginFill(0xff00ff);
        backOver.alpha = .5;
        backOver.drawRect(0, 0, btnwidth, btnHeight);
        this.addChild(back);
        this.back = back;
        this.addChild(backOver);
        this.backOver = backOver;
        this.addChild(label);
        this.label = label;
        this.pivot.x = btnwidth >> 1;
        this.pivot.y = btnHeight >> 1;
    }
    LabelButton.padding = 15;
    return LabelButton;
}(PIXI.Container));
exports.LabelButton = LabelButton;

},{}],3:[function(require,module,exports){
// import * as TWEEN from "gsap";
"use strict";
var UI_1 = require("./UI");
var PixiStage_1 = require("./PixiStage");
window.onload = function () {
    var pixistage = new PixiStage_1.default();
    // document.body.appendChild(renderer.view);
    var q = new UI_1.LabelButton('some label');
    // alert('ready');
    q.x = 150;
    pixistage.container.addChild(q);
    pixistage.start();
    pixistage.ticker.add(tick);
    // TweenLite.to(q, 5, { y: 500 });
    function tick() {
        var time = pixistage.ticker.lastTime;
        var sin = Math.sin(time / 500) * 150;
        sin += 300;
        q.y = sin;
        q.rotation = time / 500;
    }
};

},{"./PixiStage":1,"./UI":2}]},{},[3]);
