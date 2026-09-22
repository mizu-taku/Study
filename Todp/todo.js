// HTMLの要素（文字とボタン）をJavascript側で取得して変数に入れる
const resultText = document.getElementById('result');
const drawButton = document.getElementById('draw-btn');
//追加
const luckyItemText = document.getElementById('lucky-item');

// ボタンが「クリック(click)」されたら、波括弧 {} の中身を実行する
drawButton.addEventListener('click', function () {
  // おみくじの結果を「配列」で用意する
  const fortunes = ['大吉', '中吉', '小吉', '凶'];

  // 0〜3のランダムな数字を作る
  const randomNum = Math.floor(Math.random() * fortunes.length);

  // ランダムな数字を使って、配列から結果を取り出す
  const todayFortune = fortunes[randomNum];

  // 画面の文字を、取り出した結果に書き換える
  resultText.textContent = todayFortune;

  //条件分岐によって、結果の文字の色を変える
  if (todayFortune === '大吉') {
    resultText.style.color = 'red';
  } else if (todayFortune === '凶') {
    resultText.style.color = 'skyblue';
  } else {
    resultText.style.color = 'black';
  }

  //追加 ラッキーアイテムの処理
  const items = [
    '赤いペン',
    '五円玉',
    'お気に入りの靴',
    'コーヒー',
    'ハンカチ',
  ];
  const randomItemNum = Math.floor(Math.randomu() * items.length);
  const todayItem = items[randomItemNum];

  //文字同士を[+]でくっつけ表示する
  luckyItemText.textContent = 'ラッキーアイテム' + todayItem;

  //ボタンを無効化する処理
  drawButton.disabled = true;
  drawButton.textContent = '今日はもう引けない';
});
