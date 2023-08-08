import { FILE_ORIGIN_DATE } from "./createFile.js";
import { files } from "./visitUser.js";
const TEXT_ORIGIN_DATE = [{ fileName: FILE_ORIGIN_DATE[0], Text: "うんち💩" }];

const d_TextList = document.getElementById("Display-TextList");
const t_addText = document.getElementById("trigger-addText");

t_addText.addEventListener("click", () => {
  let stateTextForm = false;
  if (files.length > 0) {
    if (!stateTextForm) {
      const form = document.createElement("form");
      const div = document.createElement("div");
      const select = document.createElement("select");
      const textarea = document.createElement("textarea");
      const submit = document.createElement("button");

      form.className = "m-1";
      select.className = "form-select";
      submit.className = "btn btn-primary";
      submit.type = "submit";
      submit.textContent = "追加";
      submit.id = "trigger-decisionText";

      form.appendChild(div);
      form.appendChild(select);
      form.appendChild(textarea);
      form.appendChild(submit);

      files.forEach((file, index) => {
        const option = document.createElement("option");
        if (index == 0) {
          option.selected = true;
          option.textContent = file;
          select.appendChild(option);
        } else {
          option.value = index;
          option.textContent = file;
          select.appendChild(option);
        }
      });

      form.onsubmit = (event) => {
        event.preventDefault();
        stateTextForm = false;
      };

      d_TextList.appendChild(form);
      stateTextForm = true;

      const t_decisionText = document.getElementById("trigger-decisionText");
      t_decisionText.addEventListener("click", (event) => {
        event.preventDefault();
        if (textarea.value.trim() !== "") {
          const selectedFileName =
            select.options[select.selectedIndex].textContent;
          const newTextData = {
            fileName: selectedFileName,
            Text: textarea.value.trim(),
          };

          TEXT_ORIGIN_DATE.push(newTextData);
          localStorage.setItem("texts", JSON.stringify(TEXT_ORIGIN_DATE));

          form.remove();
        } else {
          alert("文字を入力してくれい");
        }
      });
    }
  } else {
    alert("ファイルがねえから作ってから出直しな💩");
  }
});
