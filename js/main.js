import updateConfig from "./update-config.js";
import copyConfig from "./copy-config.js";
import updateElementColor from "./element-color-update.js";
import * as load from "./load-theme.js";
import * as theme from "./theme.js";

let colorPicker;
let inputId;
let targetState;
let targetElement;

// Load the startup() after page finish loaded
window.addEventListener("load", startup());

function getAllInputColor() {
  const inputTags = {};

  for (const inputTag of document.querySelectorAll("input")) {
    if (inputTag.id) {
      inputTags[inputTag.id] = inputTag.value;
    }
  }

  return inputTags;
}

function startup() {
  load.color(theme.formatted(theme.defaultTheme));
  updateConfig(getAllInputColor());
}

function changeColor() {
  colorPicker = document.getElementById(inputId);
  colorPicker.addEventListener(
    "change",
    updateElementColor(colorPicker.value, targetState, targetElement)
  );
  colorPicker.addEventListener("change", updateConfig(getAllInputColor()));
}

for (const colorElement of document.querySelectorAll("input[type=color]")) {
  colorElement.addEventListener("change", () => {
    inputId = colorElement.id;
    targetState = document.getElementById(inputId).dataset.state;
    targetElement = document.getElementById(inputId).dataset.element;
    changeColor();
  });
}

const themeElement = document.getElementById("themes");
themeElement.addEventListener("change", () =>
  load.selectedTheme(themeElement, getAllInputColor)
);

for (const copyConfigElement of document.querySelectorAll(".copy-config")) {
  copyConfigElement.addEventListener("click", () => {
    switch (copyConfigElement.id) {
      case "copy-i3-config":
        copyConfig(copyConfigElement.id, "i3-config");
        break;
      case "copy-i3status-config":
        copyConfig(copyConfigElement.id, "i3status-config");
        break;
      default:
        break;
    }
  });
}
