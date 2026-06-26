const input=document.getElementById("input");
const preview=document.getElementById("preview");

// 数式を更新
async function update(){

    // 入力を自動でディスプレイ数式として扱う
    preview.innerHTML="$$\n"+input.value+"\n$$";

    if(!window.MathJax)return;

    MathJax.typesetClear([preview]);
    await MathJax.typesetPromise([preview]);
}

input.addEventListener("input",update);
