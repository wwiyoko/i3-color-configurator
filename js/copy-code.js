export default function copyCode(btnId, elementId) {
  const copyBtn = document.getElementById(btnId);

  navigator.clipboard.writeText(document.getElementById(elementId).innerText);
  copyBtn.innerHTML = "Copied!";

  setTimeout(() => {
    copyBtn.innerHTML = "Copy Code";
  }, 3000);
}
