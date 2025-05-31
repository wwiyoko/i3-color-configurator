import updateCode from "./code.js";
import updateElementColor from "./element-color-update.js";
import * as theme from "./theme.js";

function loadColor(color) {
  for (const input of document.getElementsByTagName("input")) {
    // Change every color picker value
    input.value = color[input.id];
    updateElementColor(input.value, input.dataset.state, input.dataset.element);
  }
}

async function setSelectedTheme(themeElement, allInputColor) {
  const selectedTheme = await theme.importTheme(
    `./themes/${themeElement.value}.json`
  );
  loadColor(theme.formatted(selectedTheme));
  updateCode(allInputColor());
}

export { loadColor as color, setSelectedTheme as selectedTheme };
