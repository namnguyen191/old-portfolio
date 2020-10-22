import { TypeWriter } from './typeWritterEffect.js';

// Init on DOMLOAD
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  // Init TypeWriter
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}