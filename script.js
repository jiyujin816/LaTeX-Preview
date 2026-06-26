const input=document.getElementById("input");
const preview=document.getElementById("preview");

// 数式を更新
async function update(){

    // 入力を自動でディスプレイ数式として扱う
    preview.innerHTML=`\\[
${input.value}
\\]`;

    if(!window.MathJax)return;

    MathJax.typesetClear([preview]);
    await MathJax.typesetPromise([preview]);
}

// 入力時に更新
input.addEventListener("input",update);

// 初回表示
window.addEventListener("load",update);
