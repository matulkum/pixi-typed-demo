export default class PixiStage {
  ticker: PIXI.ticker.Ticker;
  renderer: PIXI.WebGLRenderer;
  container: PIXI.Container;

  

  constructor (){
    let w = window.innerWidth;
    let h = window.innerHeight;
    
    let canvas = document.getElementById('webgl') as HTMLCanvasElement;
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


  start() {
    if( this.ticker.started )
      return;
    this.ticker.start();
    return this;
  }


  tick() {
    this.renderer.render(this.container);
  }

}