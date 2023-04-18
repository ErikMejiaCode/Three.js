import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";

let instance = null;

export default class Experience {
  constructor(canvas) {
    //Setting up the Singleton
    if (instance) {
      return instance;
    }
    instance = this;

    //Global access
    window.experience = this;

    //Options
    this.canvas = canvas;

    // SetUp
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();

    //Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    //Time Tick Event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
  }

  update() {
    this.camera.update();
  }
}
