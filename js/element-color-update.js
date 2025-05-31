export default function updateElementColor(color, state, element) {
  const elementState = document.getElementById(state);

  switch (element) {
    case "border":
      elementState.style.borderColor = color;
      break;
    case "bg":
      if (state === "window") {
        for (const window of document.querySelectorAll("#window")) {
          window.style.backgroundColor = color;
        }
        break;
      }

      if (state === "dmenu-item") {
        for (const item of document.querySelectorAll("#dmenu-item")) {
          item.style.backgroundColor = color;
        }
        break;
      }

      elementState.style.backgroundColor = color;
      break;
    case "text":
      if (state === "dmenu-item") {
        for (const item of document.querySelectorAll("#dmenu-item")) {
          item.style.color = color;
        }
        break;
      }

      elementState.style.color = color;
      break;
    case "indicator":
      updateWindowColor(state).style.borderBottomColor = color;
      break;
    case "child-border":
      updateWindowColor(state).style.borderRightColor = color;
      updateWindowColor(state).style.borderLeftColor = color;
      break;
    case "separator":
      for (const bar of document.querySelectorAll("#bar-separator")) {
        bar.style.color = color;
      }
      break;
    default:
      break;
  }
}

function updateWindowColor(state) {
  const windows = document.querySelectorAll("#window");

  switch (state) {
    case "focused-window":
      return windows[0];
    case "inactive-window":
      return windows[1];
    case "unfocused-window":
      return windows[2];
    case "urgent-window":
      return windows[3];
    case "placeholder-window":
      return windows[4];
    default:
      break;
  }
}
