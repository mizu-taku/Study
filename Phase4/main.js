//関数の作り方
//const 関数名 = (引数) => { 処理; return 結果; };

//関数作成
const double = (num) => {
  return num * 2;
}

//関数呼び出し
//const result = double(5);
//console.log(result);

//課題
const calcTax = (price) => {
  return price * 1.1
};

const tax = calcTax(1000);
console.log(tax);