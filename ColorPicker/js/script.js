document.querySelector('#colorText').textContent =
  `カラーコード： ${document.querySelector('#colorPicker').value}`;
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => (text.textContent = `カラーコード : ${color.value}`);

//カラービッカーが変更されたら、colorBgを発動させる
color.addEventListener('input', colorBg);
