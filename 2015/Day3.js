import { readFileSync } from "fs";
const { directions } = JSON.parse(readFileSync("./Day3data.json"));

// Part 1
function santaDelivery(directions) {
  const mapping = [{ x: 0, y: 0 }];
  let currentLocation = { x: 0, y: 0 };

  for (let i = 0; i < directions.length; i++) {
    let newLocation;
    if (directions[i] === "^") {
      newLocation = { ...currentLocation, y: currentLocation["y"] + 1 };
      if (
        !mapping.find(
          (location) =>
            location["x"] === newLocation["x"] &&
            location["y"] === newLocation["y"]
        )
      ) {
        mapping.push(newLocation);
      }
      currentLocation = newLocation;
    } else if (directions[i] === ">") {
      newLocation = { ...currentLocation, x: currentLocation["x"] + 1 };
      if (
        !mapping.find(
          (location) =>
            location["x"] === newLocation["x"] &&
            location["y"] === newLocation["y"]
        )
      ) {
        mapping.push(newLocation);
      }
      currentLocation = newLocation;
    } else if (directions[i] === "v") {
      newLocation = { ...currentLocation, y: currentLocation["y"] - 1 };
      if (
        !mapping.find(
          (location) =>
            location["x"] === newLocation["x"] &&
            location["y"] === newLocation["y"]
        )
      ) {
        mapping.push(newLocation);
      }
      currentLocation = newLocation;
    } else if (directions[i] === "<") {
      newLocation = { ...currentLocation, x: currentLocation["x"] - 1 };
      if (
        !mapping.find(
          (location) =>
            location["x"] === newLocation["x"] &&
            location["y"] === newLocation["y"]
        )
      ) {
        mapping.push(newLocation);
      }
      currentLocation = newLocation;
    } else {
      return "There is a invalid direction.";
    }
  }
  return mapping.length;
}

//Part 2
function santaAndRobotDelivery(directions) {
  const mapping = [{ x: 0, y: 0 }];
  let santaCurrentLocation = { x: 0, y: 0 };
  let robotCurrentLocation = { x: 0, y: 0 };

  for (let i = 0; i < directions.length; i++) {
    let newLocation;
    let currentLocation;

    if (i % 2 === 0) {
      currentLocation = santaCurrentLocation;
    } else {
      currentLocation = robotCurrentLocation;
    }

    if (directions[i] === "^") {
      newLocation = { ...currentLocation, y: currentLocation["y"] + 1 };
      if (
        !mapping.find(
          (location) =>
            location["x"] === newLocation["x"] &&
            location["y"] === newLocation["y"]
        )
      ) {
        mapping.push(newLocation);
      }
      currentLocation = newLocation;
    } else if (directions[i] === ">") {
      newLocation = { ...currentLocation, x: currentLocation["x"] + 1 };
      if (
        !mapping.find(
          (location) =>
            location["x"] === newLocation["x"] &&
            location["y"] === newLocation["y"]
        )
      ) {
        mapping.push(newLocation);
      }
      currentLocation = newLocation;
    } else if (directions[i] === "v") {
      newLocation = { ...currentLocation, y: currentLocation["y"] - 1 };
      if (
        !mapping.find(
          (location) =>
            location["x"] === newLocation["x"] &&
            location["y"] === newLocation["y"]
        )
      ) {
        mapping.push(newLocation);
      }
      currentLocation = newLocation;
    } else if (directions[i] === "<") {
      newLocation = { ...currentLocation, x: currentLocation["x"] - 1 };
      if (
        !mapping.find(
          (location) =>
            location["x"] === newLocation["x"] &&
            location["y"] === newLocation["y"]
        )
      ) {
        mapping.push(newLocation);
      }
      currentLocation = newLocation;
    } else {
      return "There is a invalid direction.";
    }
    if (i % 2 === 0) {
      santaCurrentLocation = currentLocation;
    } else {
      robotCurrentLocation = currentLocation;
    }
  }

  return mapping.length;
}

console.log(santaAndRobotDelivery(directions));
