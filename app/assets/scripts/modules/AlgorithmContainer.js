import Element from "./Element";

class AlgorithmContainer {
  constructor() {
    this.numItems = document.querySelector("#items").value;
    this.speed = document.querySelector("#speed").value;
    this.algorithm = document.querySelector("#algorithms").value;
    this.container = document.querySelector(".algorithm-container");
    this.playBtn = document.querySelector("#playBtn");
    this.containerWidth = this.container.getBoundingClientRect().width;
    this.activeWidth = this.containerWidth - 20;
    this.spacing = 0;
    this.elements = [];
    this.events();
  }

  events() {
    this.playBtn.addEventListener("click", () => this.createVisualization());
    this.numItems = addEventListener("change", () =>
      this.updateNumItems(event)
    );
  }

  updateNumItems(event) {
    console.log("fired");
    this.numItems = document.querySelector("#items").value;
  }

  createVisualization() {
    this.spacing = this.calcSpacing();
    this.createElements();
    this.addElementsToContainer();
  }

  calcSpacing() {
    this.deadSpace = this.numItems * 20; // 20 is the width of each bar or 20px
    return (this.activeWidth - this.deadSpace) / this.numItems + 1;
  }

  createElements() {
    for (let i = 0; i < this.numItems; i++) {
      let h = Math.random() * 301;
      let position = Math.floor(this.spacing) * (i + 1) + 20 * (i + 0);
      this.elements.push(new Element(Math.floor(h), position));
    }
    console.log(this.elements);
  }

  addElementsToContainer() {
    this.elements.map(el => {
      let item = document.createElement("div");
      item.classList.add("element");
      item.style.left = el.getXposition() + "px";
      item.style.height = el.getHeight() + "px";
      this.container.appendChild(item);
      console.log(this.container.contains);
    });
  }
}

export default AlgorithmContainer;
