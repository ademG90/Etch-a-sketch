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

const gridChangeBtn = document.querySelector(".gridChange");
gridChangeBtn.addEventListener("click", (event) => {
  let grid = Number(prompt("Enter the grid number (less than 100)"));
  while (grid > 100 || grid < 1 || !Number.isInteger(grid)) {
    grid = Number(prompt("Please enter the grid number (less than 100)"));
  }
  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    container.removeChild(div);
  });

  drawGrid(grid);
  colorChanger();
});

function random(number) {
  return Math.floor(Math.random() * number + 1);
}

drawGrid(16);
colorChanger();

function colorChanger() {
  const innerDiv = document.querySelectorAll(".div");
  innerDiv.forEach((div) => {
    div.addEventListener("pointerenter", (event) => {
      if (event.target.style.backgroundColor == "") {
        event.target.style.backgroundColor = `rgb(${random(255)},${random(
          255
        )},${random(255)})`;
      } else {
        const colors = event.target.style.backgroundColor;
        [col1, col2, col3] = colors
          .slice(colors.indexOf("(") + 1, colors.indexOf(")"))
          .split(",");
        event.target.style.backgroundColor = `rgb(
                ${Math.floor(col1 - col1 * 0.1)},
                ${Math.floor(col2 - col2 * 0.1)},
                ${Math.floor(col3 - col3 * 0.1)})`;
      }
    });
  });
}
