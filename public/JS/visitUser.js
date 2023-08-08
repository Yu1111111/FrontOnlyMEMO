//訪問時にローカルストレージを確認してデータを既存のデータを保存する必要がある。
//ファイルとテキストを表示する必要がある。

//ファイルを表示させる要素を定義
const DisplayFileList = document.getElementById("Display-FileList");
//ローカルストレージからファイルデータを受け取る
const files = JSON.parse(localStorage.getItem("files")) || [];
//ファイルの表示
if (files.length > 0) {
  //ファイルデータの入れ物を生成し挿入
  files.forEach((file) => {
    //Bootstrapを用いてボタン型のリストを生成する。
    const button = document.createElement("button");
    button.className = "list-group-item list-group-item-action";
    button.type = "button";
    //ファイル名を挿入、表示させる。
    button.textContent = file;
    DisplayFileList.appendChild(button);
  });
} else {
  const h2 = document.createElement("h2");
  h2.textContent = "ファイルは無いぜ💩";
  h2.style.fontSize = "16px";
  DisplayFileList.appendChild(h2);
}

const DisplayTextList = document.getElementById("Display-TextList");
const texts = JSON.parse(localStorage.getItem("texts")) || [];
//ファイルの表示
if (files.length > 0) {
  //ファイルデータの入れ物を生成し挿入
  texts.forEach((text) => {
    //Bootstrapを用いてボタン型のリストを生成する。
    const div = document.createElement("div");
    div.className = "card-body border";
    //ファイル名を挿入、表示させる。
    div.textContent = text.Text;
    DisplayTextList.appendChild(div);
  });
} else {
  const h2 = document.createElement("h2");
  h2.textContent = "テキストデータは無いぜ💩";
  h2.style.fontSize = "16px";
  DisplayTextList.appendChild(h2);
}
export { files };
