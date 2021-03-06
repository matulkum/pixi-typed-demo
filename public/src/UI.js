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
        var label = new PIXI.Text(text);
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
    }
    LabelButton.padding = 15;
    return LabelButton;
}(PIXI.Container));
exports.LabelButton = LabelButton;
//# sourceMappingURL=UI.js.map