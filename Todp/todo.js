// HTMLの要素（文字とボタン）をJavascript側で取得して変数に入れる
const resultText = document.getElementById('result');
const drawButton = document.getElementById('draw-btn');

// ボタンが「クリック(click)」されたら、波括弧 {} の中身を実行する
drawButton.addEventListener("click", function()){

  // おみくじの結果を「配列」で用意する
  const fotunes = ["大吉", "中吉", "小吉", "凶"];

  // 0〜3のランダムな数字を作る
  const randomNum = Math.floor(Math.random() * fortunes.length);
}