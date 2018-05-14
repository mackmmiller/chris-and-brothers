import './index.scss';

const words = ['Laptops', 'Desktops', 'MacBooks', 'Networks', 'Servers'];
const cycler = document.querySelector('.bubble');

function cycleWords(words) {
  let i = 1;
  setInterval(() => {
    if (i === words.length) i = 0;
    cycler.innerHTML = words[i];
    i++;
  }, 2000);
}

cycleWords(words);