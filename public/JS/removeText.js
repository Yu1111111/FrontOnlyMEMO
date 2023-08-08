const t_removeText = document.getElementById("trigger-removeText");

t_removeText.addEventListener("click", () => {
  localStorage.removeItem("texts");
});
