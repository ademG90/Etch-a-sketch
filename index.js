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
// let add functionality to range
let DEFAULT_COLOR = "rgb(255,0,0)";

const slider = document.querySelector("#slider");
const output = document.querySelector("output");
output.textContent = `  ${slider.value}`;
slider.addEventListener("input", () => {
  output.textContent = `  ${slider.value}`;

  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    container.removeChild(div);
  });

  drawGrid(output.textContent);
  randomColorChanger(DEFAULT_COLOR);
});

const selectColor = document.querySelector(".select-color");
selectColor.addEventListener("click", (event) => {
  DEFAULT_COLOR = event.target.value;

  if (DEFAULT_COLOR == "rainbow") {
    randomColorChanger();
    console.log("rainbow");
  } else {
    console.log(DEFAULT_COLOR);
    customColorChange(DEFAULT_COLOR);
  }
});

drawGrid(16);
customColorChange(DEFAULT_COLOR);

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    // container.removeChild(div);
    div.style.backgroundColor = "#fff";
  });
});
