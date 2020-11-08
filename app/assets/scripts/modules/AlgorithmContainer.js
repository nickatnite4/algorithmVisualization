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
    this.userController.playBtn.addEventListener("click", () => {
      this.createVisualization();
      this.bubbleSort();
    });
  }

  bubbleSort() {
    console.log(this.elements);
    if (this.elements[0].height > this.elements[1].height) {
      console.log("if function called.");
      this.swap();
    }
  }

  swap() {
    console.log("swap function called.");
    this.allElementDivsInHTML = document.querySelectorAll(".element");

    let moveElements = setInterval(() => {
      console.log("move elements has been called");
      if (this.elements[0].x_position === 520) {
        clearInterval(moveElements);
      }
      this.elements[0].x_position++;
      this.allElementDivsInHTML[0].style.left = this.elements[0].x_position;
      console.log(this.elements[0].x_position);
    }, 200);
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
    console.log(this.elements);
    this.elements.map(el => {
      this.container.appendChild(el.createElementDiv());
    });
    this.elementChildren = document.querySelectorAll(".element");
  }
}

export default AlgorithmContainer;
