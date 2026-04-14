'use strict';
// ページの一番下を表示
window.addEventListener('load', () => {
  window.scrollTo(0, document.body.scrollHeight);
});

// Enterキー と Ctrlキー(MacはCmdキー) を押していたら送信
const formElement = document.forms['message-form'];
const textareaElement = formElement.elements['content'];
textareaElement.addEventListener('keydown', (event) => {
  // 送信キーを押したら
  if (isPressedSubmitKey(event)) {
    // キーボード入力をキャンセルして送信
    event.preventDefault();
    formElement.submit();
  }
});

// 送信キーを押しているかを判定
function isPressedSubmitKey(event) {
  if (event.key !== 'Enter') {
    return false;
  }
  if (event.ctrlKey) {
    return true;
  }
  // MacのCmdキーはmetaKeyという名前
  if (event.metaKey) {
    return true;
  }
}