import promptSync from "prompt-sync";
import puppeteer from "puppeteer";

// const prompt = promptSync();

// let str = prompt("Please enter some text:");

// import puppeteer from "puppeteer";

const glassString =
  'Length (L): 71 7/8" X Width (W): 24" Inch Mirror Rectangle Shaped 1/8" Thick Standard Mirror Flat Polished Edges';

const glassProperties = {
  glassType: null,
  glassShape: null,
  width: null,
  height: null,
  thickness: null,
  tint: null,
  stamp: null,
  edge: null,
};

// Split the string into an array of words
const glassArray = glassString.split(" ");

// Extract the glass type from the string
if (glassArray.includes("Mirror")) {
  glassProperties.glassType = "Mirror";
} else {
  // If the glass type is not Mirror, assume it's Tempered
  glassProperties.glassType = "Tempered";
}

// Extract the glass shape from the string
const shapeIndex = glassArray.indexOf("Shaped");
if (shapeIndex !== -1) {
  glassProperties.glassShape = glassArray[shapeIndex - 1];
} else {
  glassProperties.glassShape = "Rectangle";
}

// Extract the width and height from the string
const widthIndex = glassArray.indexOf("Width");
const heightIndex = glassArray.indexOf("Length");
if (widthIndex !== -1 && heightIndex !== -1) {
  glassProperties.width = glassArray[widthIndex + 2].replace('"', "");
  glassProperties.height = glassArray[heightIndex + 2].replace('"', "");
}

// Extract the thickness from the string
const thicknessIndex = glassArray.indexOf("Thick");
if (thicknessIndex !== -1) {
  glassProperties.thickness = glassArray[thicknessIndex - 1].replace('"', "");
}

// Extract the edge from the string
const edgeIndex = glassArray.indexOf("Edges");
if (edgeIndex !== -1) {
  glassProperties.edge = "Flat Polished";
}

console.log(glassProperties);
