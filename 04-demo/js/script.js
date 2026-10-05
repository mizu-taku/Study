const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

//もしボタンのテキストがダークモードにするになっているなら
if(btn.textContent === 'ダークモードにする'){
  //クリックされたときにライトモードにするに変更
  btn.textContent = 'ライトモードにする';

  //そうでないならライトモードにと表示されているなら
  } else {
    //クリックされた時にダークモードにする
    btn.textContent = 'ダークモードにする'
  }
});