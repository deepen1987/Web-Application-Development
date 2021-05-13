function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
  this.render = function () {};
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

// Inheritance being created with the instance of HTMLELEMENT
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// Polymorphism being implemented here using method overriding.
HtmlSelectElement.prototype.render = function () {
  let select = "";
  for (const iterator of this.item) {
    select += `\t<option>${iterator}</option>\n`;
  }

  return `<select>\n${select}</select>`;
};

function HtmlSelectElement(items = []) {
  this.item = items;

  this.addItem = function (i) {
    this.item.push(i);
  };
  this.removeItem = function (i) {
    let position = this.item.indexOf(i);
    this.item.splice(position);
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

function HtmlImageElement(src) {
  this.src = src;
}

HtmlImageElement.prototype.render = function () {
  return `<img src="${this.src}" />`;
};

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://"),
];

for (const iterator of elements) {
  console.log(iterator.render());
}
