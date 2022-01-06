/**
 *従来の関数（使用例1）
 */
// 従来の関数を定義
function func1_1(value) {
  return value;
}
// 実行結果を出力
console.log(func1_1("func1_1の出力"));

/**
 *従来の関数（使用例2）
 */
// 従来の関数を定義
const func1_2 = function (value) {
  return value;
};
// 実行結果を出力
console.log(func1_2("func1_2の出力"));

/**
 * アロー関数を定義
 */
const func2_1 = (value) => {
  return value;
};
console.log(func2_1("func2_1の出力"));

/**
 * アロー関数を定義
 * 引数が1つの場合カッコを省略できる。2つ以上の場合HA省略できない。
 */
const func2_2 = (value) => {
  return value;
};
console.log(func2_2("func2_2の出力"));

/**
 * 処理を単一で返却する場合は波括弧とreturnを省略できる
 *
 */
const func4_1 = (num1, num2) => num1 + num2;
console.log(func4_1(3, 6));

/**
 * (）を用いて1行としてまとめる
 */
const func5 = (val1, val2) => ({
  name: val1,
  age: val2,
});
console.log(func5("名前", 20));
