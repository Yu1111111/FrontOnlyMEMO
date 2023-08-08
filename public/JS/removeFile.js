const t_removeFile = document.getElementById("trigger-removeFile");

t_removeFile.addEventListener("click", () => {
  localStorage.removeItem("files");
});
