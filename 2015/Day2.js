import data from "./Day2data.json" assert { type: "json" };

function howMuchPaper(gifts) {
  //surface area formula: 2*l*w + 2*w*h + 2*h*l
  //area of smallest side l*w / w*h / h*l
  let totalPaper = 0;
  for (let gift of gifts) {
    const measurements = gift.split("x");
    const [l, w, h] = [...measurements];

    const sortedMeasurements = measurements.sort((a, b) => a - b);

    totalPaper +=
      2 * l * w +
      2 * w * h +
      2 * h * l +
      sortedMeasurements[0] * sortedMeasurements[1];
  }
  return totalPaper;
}

function howMuchRibbon(gifts) {
  let totalRibbon = 0;
  for (let gift of gifts) {
    const measurements = gift.split("x");
    const [sizeOne, sizeTwo, sizeThree] = [
      ...measurements.sort((a, b) => a - b),
    ];
    totalRibbon += 2 * sizeOne + 2 * sizeTwo + sizeOne * sizeTwo * sizeThree;
  }
  return totalRibbon;
}

howMuchPaper(data);
