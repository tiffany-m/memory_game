const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard

function flipCard() {
  if(lockBoard) return; // locking board so cards can flip back if they do not match without letting you click on another card
  if(this === firstCard) return //

  this.classList.toggle('flip');

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
  if (firstCard.dataset.image === secondCard.dataset.image) {  //dataset lets you check data-* attribute, in this case the data-image
    //its a match
    disableCards()
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

function resetBoard() {
  hasFlippedCard = false
  lockBoard = false

  firstCard = null
  secondCard = null
}

// wrapping function in () followed by () makes it an immediately invoked function expression, so it will be executed right after its definition
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 14) // generates random numbers from 0 to 11
    card.style.order = randomPos // order is flex box property, each flex item defaults to 0, giving each item new number sorts them in ascending order
  })
})()

cards.forEach((card) => card.addEventListener('click', flipCard));

//27min