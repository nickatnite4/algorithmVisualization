class Element {
  constructor(h, x) {
    this.height = h;
    this.width = 20;
    this.x_position = x;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  setHeight(h) {
    this.height = h;
  }

  getXposition() {
    return this.x_position;
  }
}

export default Element;
