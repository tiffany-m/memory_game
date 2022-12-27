const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let firstCard, secondCard

function flipCard() {
  this.classList.toggle('flip');
  
  if(!hasFlippedCard){
    //first click
    hasFlippedCard = true
    firstCard = this
  } else {
    //second click
    hasFlippedCard = false
    secondCard = this

    checkForMatch()
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
}

function unFlipCards() {
  setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  }, 1500);
}

cards.forEach((card) => card.addEventListener('click', flipCard));


27.33