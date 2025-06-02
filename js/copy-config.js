export default function copyConfig(btnId, elementId) {
  const copyBtn = document.getElementById(btnId);

  navigator.clipboard.writeText(document.getElementById(elementId).innerText);
  copyBtn.innerHTML = "Copied!";

  setTimeout(() => {
    copyBtn.innerHTML = "Copy Config";
  }, 3000);
}
