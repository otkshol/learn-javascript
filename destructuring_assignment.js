/**
 * 分割代入(オブジェクトや配列から値を抽出する方法)
 */

//分割代入を使用しない文字列出力
const myProfile1 = {
  name: "名前",
  age: 24,
};
const message1 = `私の名前は${myProfile1.name}で、年齢は${myProfile1.age}です。`;
console.log(message1);

// 分割代入を使用
const myProfile2 = {
  name: "名前2",
  age: 30,
};
const { name, age } = myProfile2;
const message2 = `私の名前は${name}で、年齢は${age}です。`;
console.log(message2);

// 配列のインデックスを使用した代入
const myProfile3 = ["名前3", 34];
const message3 = `私の名前は${myProfile3[0]}で、年齢は${myProfile3[1]}です。`;
console.log(message3);

// 配列の分割代入
const myProfile4 = ["名前4", 44];
const [name4, age4] = myProfile4; // constのカッコが[]であることに注意。{}だとundefinedになる
const message4 = `私の名前は${name4}で、年齢は${age4}です。`;
console.log(message4);

// デフォルト値の設定
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん。`);
sayHello();
sayHello("hoge");
sayHello("hoge", "hoge"); // これも文法エラーにはならないのね

// デフォルト値を用いた分割代入
const myProfile5 = {
  age: 55,
};
const { name5 = "ゲスト5" } = myProfile5;
const message5 = `こんにちは${name5}さん`;
console.log(message5);

/**
 * スプレッド構文
 */
const arr1 = [1, 2];
console.log(arr1);
// スプレッド構文（...hoge）を使用すると配列を全て展開する
console.log(...arr1);
const summaryFnc = (num1, num2) => console.log(num1 + num2);
summaryFnc(arr1[0], arr1[1]);
summaryFnc(...arr1);
