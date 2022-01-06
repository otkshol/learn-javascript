console.log("test");

/**
 * id指定で要素取得をする
 */
// getElementByIdを使用する
const title1 = document.getElementById("title");
console.log(title1);
// querySelectorを使用する
const title2 = document.querySelector("#title");
console.log(title2);
// getElementByClassNameを使用する
const containers = document.getElementsByClassName("container");
console.log(containers);
// querySelectorを使用する
const container = document.querySelector(".container");
console.log(container);

/**
 * ボタンの追加
 */
// buttonタグの生成
const buttonEl = document.createElement("button");
// ボタンのラベル設定
buttonEl.textContent = "ボタン";

// エリア1のdivタグを取得
const divEl = document.querySelector(".container");

// divタグ配下にbuttonタグを追加
divEl.appendChild(buttonEl);

/**
 * DOMの削除（例: h1タグの削除）
 */
// h1タグの取得
const h1El = document.getElementById("title");

// bodyタグの取得
const bodyEl = document.querySelector("body");

// bodyタグ配下から削除
bodyEl.removeChild(h1El);
