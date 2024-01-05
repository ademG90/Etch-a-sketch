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

function randomColorChanger(color) {
  // console.log("randomcolorchange: ", color);
  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    div.addEventListener("pointerenter", (event) => {
      if (color == "rainbow") {
        // console.log("@@@randomcolorchange: ", color);
        if (event.target.style.backgroundColor == "") {
          event.target.style.backgroundColor = `rgb(${random(255)},${random(
            255
          )},${random(255)})`;

          console.log("111111randomcolorchange: ", color);
        } else {
          console.log("2222randomcolorchange: ", color);
          const colors = event.target.style.backgroundColor;
          [col1, col2, col3] = colors
            .slice(colors.indexOf("(") + 1, colors.indexOf(")"))
            .split(",");
          event.target.style.backgroundColor = `rgb(
                  ${Math.floor(col1 - col1 * 0.1)},
                  ${Math.floor(col2 - col2 * 0.1)},
                  ${Math.floor(col3 - col3 * 0.1)})`;
        }
      } else if (color != "rainbow") {
        console.log("333333randomcolorchange: ", color);
        event.target.style.backgroundColor = `${color}`;
      }
    });
  });
}

// let add functionality to range
let DEFAULT_COLOR = "blue";

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
  console.log("*************", event.target.value);
  DEFAULT_COLOR = event.target.value;

  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    // container.removeChild(div);
    div.style.backgroundColor = "#fff";
  });

  randomColorChanger(DEFAULT_COLOR);
});

drawGrid(16);
randomColorChanger(DEFAULT_COLOR);
