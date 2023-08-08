//先ずは適当にローカルストレージに値を入れてあげる必要があるため適当にデータを作って格納しよう
const FILE_ORIGIN_DATE = ["All"];
//ファイルを表示させる要素を定義
const d_FileList = document.getElementById("Display-FileList");
// ファイルの追加ボタンが押下されたとき、入力フォームが表示され必要に応じて適切な値を受け取る必要がある。
const t_addFile = document.getElementById("trigger-addFile");

t_addFile.addEventListener("click", () => {
  //入力フォームの有無を確認するための変数。こいつを使ってない場合は生成、ある場合は生成されないようにする。
  let stateFileForm = false;

  if (!stateFileForm) {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const submit = document.createElement("button");

    form.className = "row";
    input.className = "form-control form-control-sm";
    input.type = "text";
    input.placeholder = "ファイル名を入力";
    submit.className = "btn btn-primary";
    submit.type = "submit";
    submit.textContent = "追加";
    submit.id = "trigger-decisionFileName";

    form.appendChild(input);
    form.appendChild(submit);

    form.onsubmit = (event) => {
      event.preventDefault();
      stateFileForm = false;
    };

    d_FileList.appendChild(form);
    stateFileForm = true;

    const t_decisionFileName = document.getElementById(
      "trigger-decisionFileName"
    );
    t_decisionFileName.addEventListener("click", (event) => {
      event.preventDefault();
      if (input.value.trim() !== "") {
        FILE_ORIGIN_DATE.push(input.value);
        localStorage.setItem("files", JSON.stringify(FILE_ORIGIN_DATE));
        form.remove();
      } else {
        alert("文字を入力してくれい");
      }
    });
  }
});
export { FILE_ORIGIN_DATE };
