class Element {
  constructor(h, x) {
    this.height = h;
    this.width = 20;
    this.x_position = x;
    this.createElementDiv();
  }

  createElementDiv() {
    this.elementDiv = document.createElement("div");
    this.elementDiv.classList.add("element");
    this.elementDiv.style.left = this.x_position + "px";
    this.elementDiv.style.height = this.height + "px";
    this.elementDiv.style.width = 20 + "px";
    return this.elementDiv;
  }
}

export default Element;
