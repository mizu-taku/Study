let book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術評論社',
  price: 2680,
};

let { price, title, memo = 'x' } = book;
console.log(title);
console.log(price);
console.log(memo);
