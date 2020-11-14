class UserController {
  constructor() {
    this.numItems = document.querySelector("#items").value;
    this.speed = document.querySelector("#speed").value;
    this.algorithm = document.querySelector("#algorithms").value;
    this.playBtn = document.querySelector("#playBtn");
    this.isPlaying = false;
    this.updateAll();
    this.events();
  }

  events() {
    this.numItems = addEventListener("change", () => this.updateNumItems());
    this.speed = addEventListener("change", () => this.updateSpeed());
    this.algorithm = addEventListener("change", () => this.updateAlgorithm());
  }

  updateAll() {
    this.numItems = document.querySelector("#items").value;
    this.speed = document.querySelector("#speed").value;
    this.algorithm = document.querySelector("#algorithms").value;
    this.playBtn = document.querySelector("#playBtn");
  }

  updateNumItems() {
    console.log("Number of items is updating");
    this.numItems = document.querySelector("#items").value;
  }

  updateSpeed() {
    this.speed = document.querySelector("#speed").value;
    console.log(this.speed);
  }

  updateAlgorithm() {
    this.algorithm = document.querySelector("#algorithms").value;
  }

  updateIsPlaying() {
    this.isPlaying = true;
  }
}

export default UserController;
