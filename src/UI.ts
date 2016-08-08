
export class LabelButton extends PIXI.Container {

    static padding = 15;

    private back: PIXI.DisplayObject;
    private backOver: PIXI.DisplayObject;
    private label: PIXI.Text;

    constructor(private text: string) {
        super();
        let label = new PIXI.Text(text, {
            font: "regular 12px Arial",
            padding: 0
        });
        label.x = label.y = LabelButton.padding;
        
        let btnwidth = label.width + LabelButton.padding*2;
        let btnHeight = label.height + LabelButton.padding*2; 
        
        
        let back = new PIXI.Graphics();
        back.beginFill(0xffffff);
        back.drawRect(0,0, btnwidth, btnHeight);
        let backOver = new PIXI.Graphics();
        backOver.beginFill(0xff00ff);
        backOver.alpha = .5;
        backOver.drawRect(0,0, btnwidth, btnHeight);
    
        
        this.addChild(back);
        this.back = back;
        this.addChild(backOver);
        this.backOver = backOver;
        this.addChild(label);
        this.label = label;
        
        this.pivot.x = btnwidth >> 1;
        this.pivot.y = btnHeight >> 1;
    }
}