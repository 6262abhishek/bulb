const bulb = document.getElementById('bulb');
const onButton = document.getElementById('onButton');
const offButton = document.getElementById('offButton');

onButton.addEventListener('click', () => {
  bulb.classList.add('on');
  bulb.classList.remove('off');
});

offButton.addEventListener('click', () => {
  bulb.classList.add('off');
  bulb.classList.remove('on');
});
