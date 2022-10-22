class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();
    this.timerID = 0;
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }
  // Вроде все заработало
  timer() {
    const statusTime = document.querySelector('.status__time');
    let symbol = document.getElementsByClassName('symbol');
    let deadline = Date.now() + symbol.length * 1500;

    if (this.timerID) {
      clearInterval(this.timerID);
    }

    this.timerID = setInterval(() => {
      statusTime.textContent = ((deadline - Date.now()) / 1000).toFixed(1);
      if (statusTime.textContent <= 0) {
        this.fail();
        statusTime.textContent = 0;
        clearInterval(this.timerID);
      }
    }, 200);
  }

  registerEvents() {
    const word = document.querySelector('body');
    const testKey = e => {
      if (e.key === this.currentSymbol.textContent) {
        this.success();
        clearInterval(this.timerID);
        this.timer();
      } else {
        this.fail();
        clearInterval(this.timerID);
        this.timer();
      }
    }

    word.addEventListener('keyup', testKey);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))