/**
 * var変数宣言の問題点確認
 * 上書き・再定義が可能だと、規模大きくなるにつれて意図しない変数の書き換えが発生し
 * バグを埋め込むリスクが大きくなり、改修時の影響調査コストも大きくなるので使用しないことが望ましい。
 */

// var変数定義
var var1 = "var 変数";
console.log(var1);

// var変数の上書き
var1 = "var 変数の上書き";
console.log(var1);

// var変数再定義
var var1 = "var 変数 再定義";
console.log(var1);

/**
 * letでの変数宣言
 * 上書き可能で再定義は不可
 */

// let変数定義
let var2 = "let 変数";
console.log(var2);

// letは上書き可能
var2 = "let 変数を上書き";
console.log(var2);

// letは再定義できない
//let var2 = "let 変数を再定義";

/**
 * constは上書きも再定義もできない
 */
const var3 = "counst 定数";
console.log(var3);

// constは上書きできない
//var3 = "constを上書き";

// constは再定義もできない
//const var3 = "counst 定数再定義";

/**
 * テンプレート文字列の利用
 */
const name = "名前";
const age = 24;
const message = `私の名前は${name}です。年齢は${age}です`;
console.log(message);
