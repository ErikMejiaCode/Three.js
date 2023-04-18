import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";

export default class Experience {
  constructor(canvas) {
    //Global access
    window.experience = this;

    //Options
    this.canvas = canvas;

    // SetUp
    this.sizes = new Sizes();
    this.time = new Time();

    //Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    //Time Tick Event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {}

  update() {}
}
