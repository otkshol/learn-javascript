/**
 * 従来のfor文
 */
const nameArr1 = ["名前11", "名前12", "名前13"];
// for文を使用して配列処理
for (let index = 0; index < nameArr1.length; index++) {
  console.log(nameArr1[index]);
}

/**
 * map関数の使い方
 */
const nameArr2 = ["名前21", "名前22", "名前23"];
const nameArr2_1 = nameArr2.map((name) => {
  return name;
});
console.log(nameArr2_1);
