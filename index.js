const container = document.querySelector(".container");
function drawGrid(grid) {
  for (let i = 0; i < grid ** 2; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "div");
    div.style.width = `${500 / grid}px`;
    div.style.height = `${500 / grid}px`;
    container.appendChild(div);
  }
}

function random(number) {
  return Math.floor(Math.random() * number + 1);
}

function randomColorChanger() {
  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    div.addEventListener("pointerenter", (event) => {
      event.target.style.backgroundColor = `rgb(${random(255)},${random(
        255
      )},${random(255)})`;
    });
  });
}

function customColorChange(color) {
  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    div.addEventListener("pointerenter", (event) => {
      event.target.style.backgroundColor = color;
    });
  });
}

function colorChanger() {
  if (DEFAULT_COLOR == "rainbow") {
    randomColorChanger();
  } else {
    customColorChange(DEFAULT_COLOR);
  }
}

// let add functionality to range
let DEFAULT_COLOR = "rgb(0,0,0)";

const slider = document.querySelector("#slider");
const output = document.querySelector("output");
output.textContent = `  ${slider.value} X ${slider.value}`;
slider.addEventListener("input", () => {
  output.textContent = `  ${slider.value} X ${slider.value}`;

  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    container.removeChild(div);
  });

  drawGrid(slider.value);
  colorChanger();
});

const selectColor = document.querySelector(".select-color");
selectColor.addEventListener(
  "click",
  (event) => {
    // console.log(event.target.closest("button").value);
    DEFAULT_COLOR = event.target.closest("button").value;
    colorChanger();
  },
  true
);

// const rainbowColorSelector = document.querySelector(".rainbow");
// rainbowColorSelector.addEventListener(
//   "click",
//   (event) => {
//     DEFAULT_COLOR = event.value;
//     colorChanger();
//   }
// );

const inputColor = document.querySelector(".input-color #color");
inputColor.addEventListener("change", (event) => {
  DEFAULT_COLOR = event.target.value;
  colorChanger();
});

// what happen when window is opened
drawGrid(16);
customColorChange(DEFAULT_COLOR);

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    div.style.backgroundColor = "#fff";
  });
});
