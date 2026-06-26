const input=document.getElementById("input");
const preview=document.getElementById("preview");

// 数式を更新する関数
async function update(){

    // 入力内容をそのまま表示
    preview.textContent=input.value;

    // MathJaxで数式化
    await MathJax.typesetPromise([preview]);
}

// 入力されるたび更新
input.addEventListener("input",update);

// 初期表示
update();
