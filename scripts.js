const cards = document.querySelectorAll('.memory-card')
const resetBtn = document.getElementById('reset')
const timeEl = document.getElementById('time');
const winTimeEl = document.getElementById('winTime')
const screens = document.querySelectorAll('.screen')
const startBtn = document.getElementById('start')

let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard
let seconds = 0
let sum = 0

// start button transitions to next screen
startBtn.addEventListener('click', () => {
  screens[0].classList.add('up')
  setInterval(increaseTime, 1000)})
// starts game
shuffle()
cards.forEach(card => card.addEventListener('click', flipCard))

function increaseTime() {
  if(sum === 8) {
    return
  } else {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
  }
}

function stopTime() {
 clearInterval(increaseTime);
}

function shuffle() {
  cards.forEach(card => {
    let randomOrderNum = Math.floor(Math.random() * 14) // generates random numbers from 0 to 13
    card.style.order = randomOrderNum // order is flex box property, each flex item defaults to 0, giving each item new number sorts them in ascending order
  })
}

function flipCard() {
  if(lockBoard) return; // locking board so cards can flip back if they do not match without letting you click on another card
  if(this === firstCard) return 

  this.classList.toggle('flip'); // this keyword represents the element that fired the event

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this; 
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
  }
}

function checkForMatch() {
  
  //do cards match?
  if (firstCard.dataset.image === secondCard.dataset.image) {  // dataset lets you check data-* attribute, in this case the data-image
    //its a match
    disableCards()
    sum = sum + 1
  } else {
    //not a match
    unFlipCards()
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard()
}

function unFlipCards() {
  lockBoard = true; // locking board so cards can flip back if they do not match without letting you click on another card

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard()
  }, 1500);
}

function resetBoard() { // after each round of flipped cards must reset value to null
  hasFlippedCard = false
  lockBoard = false

  firstCard = null
  secondCard = null
}

function resetGame() {
  winTimeEl.innerHTML = `Winning ${timeEl.innerHTML}`
  timeEl.innerHTML = `Time: 00:00`;
  cards.forEach(card => card.classList.remove('flip'))
  resetBoard()
  sum = 0
    setTimeout(() => {
      shuffle()
    }, 1000);
  cards.forEach((card) => card.addEventListener('click', flipCard))
}

resetBtn.addEventListener('click', resetGame)

