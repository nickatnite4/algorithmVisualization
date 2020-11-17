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
      if (this.userController.algorithm === "bubble-sort") {
        this.bubbleSort();
      }
      if (this.userController.algorithm === "selection-sort") {
        this.selectionSort();
      }
    });
  }

  async selectionSort() {
    this.userController.playBtn.disabled = true;
    for (let i = 0; i < this.userController.numItems - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < this.userController.numItems; j++) {
        if (this.elements[j].height < this.elements[min_idx].height) {
          min_idx = j;
        }
      }
      await this.swapSelection(min_idx, i);
    }
    this.userController.playBtn.disabled = false;
  }

  swapSelection(min_idx, i) {
    return new Promise((resolve, reject) => {
      let target1 = this.elements[i].x_position;
      let target2 = this.elements[min_idx].x_position;
      let isComplete1 = false;
      let isComplete2 = false;

      // Set selected elements background color
      this.elements[i].backgroundColor = "purple";
      this.elements[min_idx].backgroundColor = "purple";

      let moveElements = setInterval(() => {
        if (this.elements[i].x_position === target2) {
          isComplete1 = true;
        } else {
          this.elements[i].x_position++;
          this.removeElementsFromContainer();
          this.addElementsToContainer();
        }

        if (this.elements[min_idx].x_position === target1) {
          isComplete2 = true;
        } else {
          this.elements[min_idx].x_position--;
          this.removeElementsFromContainer();
          this.addElementsToContainer();
        }

        if (isComplete1 && isComplete2) {
          isComplete1 = false;
          isComplete2 = false;
          this.elements[i].backgroundColor = "black";
          this.elements[min_idx].backgroundColor = "black";
          let temp = this.elements[i];
          this.elements[i] = this.elements[min_idx];
          this.elements[min_idx] = temp;
          resolve(clearInterval(moveElements));
        }
      }, this.userController.speed);
    });
  }

  async bubbleSort() {
    let i, j;
    this.userController.playBtn.disabled = true;
    for (i = 0; i < this.userController.numItems - 1; i++) {
      for (j = 0; j < this.userController.numItems - i - 1; j++) {
        if (this.elements[j].height > this.elements[j + 1].height) {
          await this.swap(j);
        }
      }
    }
    console.log(this.elements);
    this.userController.playBtn.disabled = false;
  }

  swap(j) {
    return new Promise((resolve, reject) => {
      let target1 = this.elements[j].x_position;
      let target2 = this.elements[j + 1].x_position;
      let isComplete1 = false;
      let isComplete2 = false;

      // Set selected elements background color
      this.elements[j].backgroundColor = "purple";
      this.elements[j + 1].backgroundColor = "purple";

      let moveElements = setInterval(() => {
        if (this.elements[j].x_position === target2) {
          isComplete1 = true;
        } else {
          this.elements[j].x_position++;
          this.removeElementsFromContainer();
          this.addElementsToContainer();
        }

        if (this.elements[j + 1].x_position === target1) {
          isComplete2 = true;
        } else {
          this.elements[j + 1].x_position--;
          this.removeElementsFromContainer();
          this.addElementsToContainer();
        }

        if (isComplete1 && isComplete2) {
          isComplete1 = false;
          isComplete2 = false;
          this.elements[j].backgroundColor = "black";
          this.elements[j + 1].backgroundColor = "black";
          let temp = this.elements[j];
          this.elements[j] = this.elements[j + 1];
          this.elements[j + 1] = temp;
          resolve(clearInterval(moveElements));
        }
      }, this.userController.speed);
    });
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
      let h = Math.random() * 401;
      let position =
        Math.floor(this.spacingBetweenEachElement) * (i + 1) + 20 * (i + 0);
      this.elements.push(new Element(Math.floor(h), position));
    }
  }

  addElementsToContainer() {
    //console.log(this.elements);
    this.elements.map(el => {
      this.container.appendChild(el.createElementDiv());
    });
    this.elementChildren = document.querySelectorAll(".element");
  }
}

export default AlgorithmContainer;
