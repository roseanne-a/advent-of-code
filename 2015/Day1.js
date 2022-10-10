import data from "./Day1data.json" assert { type: "json" };

function whatFloor(instructions) {
  let currentFloor = 0;
  if (!instructions || instructions.length === 0) return currentFloor;
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === "(") currentFloor++;
    else if (instructions[i] === ")") currentFloor--;
    else return "Error.";
  }
  return currentFloor;
}

function enterTheBasement(instructions) {
  let currentFloor = 0;

  if (!instructions || instructions.length === 0) return currentFloor;
  for (let i = 0; i < instructions.length; i++) {
    if (currentFloor === -1) return i;
    else if (instructions[i] === "(") currentFloor++;
    else if (instructions[i] === ")") currentFloor--;
    else return "Error.";
  }
  return "Never enters the basement!";
}

console.log(enterTheBasement(data.instructions));
