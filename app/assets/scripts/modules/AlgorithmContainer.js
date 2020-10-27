import Element from "./Element";
import UserController from "./UserController";

class AlgorithmContainer {
  constructor() {
    this.userController = new UserController();
    this.container = document.querySelector(".algorithm-container");
    this.containerWidth = this.container.getBoundingClientRect().width;
    this.activeWidth;
    this.spacingBetweenEachElement = 0;
    this.elements = [];
    this.events();
  }

  events() {
    this.userController.updateAll();
    window.addEventListener("resize", () => this.updateContainerWidth());
    this.userController.playBtn.addEventListener("click", () =>
      this.createVisualization()
    );
  }

  updateContainerWidth() {
    console.log("width being updated");
    this.containerWidth = this.container.getBoundingClientRect().width;
    console.log(this.containerWidth);
  }

  createVisualization() {
    if (this.userController.isPlaying) {
      this.resetContainer();
    }
    this.userController.updateIsPlaying();
    this.spacingBetweenEachElement = this.calcSpacing();
    this.createElements();
    this.addElementsToContainer();
  }

  resetContainer() {
    this.elements = [];
    this.removeElementsFromContainer();
  }

  removeElementsFromContainer() {
    let elementsFromContainer = document.querySelector(".algorithm-container");
    while (elementsFromContainer.firstChild) {
      elementsFromContainer.removeChild(elementsFromContainer.lastChild);
    }
  }

  calcSpacing() {
    this.activeWidth = this.containerWidth - 20;
    this.deadSpace = this.userController.numItems * 20; // 20 is the width of each bar or 20px
    return (
      (this.activeWidth - this.deadSpace) / this.userController.numItems + 1
    );
  }

  createElements() {
    for (let i = 0; i < this.userController.numItems; i++) {
      let h = Math.random() * 301;
      let position =
        Math.floor(this.spacingBetweenEachElement) * (i + 1) + 20 * (i + 0);
      this.elements.push(new Element(Math.floor(h), position));
    }
  }

  addElementsToContainer() {
    this.elements.map(el => {
      let item = document.createElement("div");
      item.classList.add("element");
      item.style.left = el.getXposition() + "px";
      item.style.height = el.getHeight() + "px";
      this.container.appendChild(item);
    });
  }
}

export default AlgorithmContainer;
