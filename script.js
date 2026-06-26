const input=document.getElementById("input");
const preview=document.getElementById("preview");

// 数式を更新
async function update(){

    // HTMLとして表示
    preview.innerHTML=input.value;

    // MathJaxがまだ読み込まれていないなら何もしない
    if(!window.MathJax)return;

    // 前回の数式を消す
    MathJax.typesetClear([preview]);

    // 再レンダリング
    await MathJax.typesetPromise([preview]);
}

// 入力のたび更新
input.addEventListener("input",update);
