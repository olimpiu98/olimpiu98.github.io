let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function getRandomC() {
  let calcul = Math.floor(Math.random() * 13) + 1;
  if (calcul > 10) {
    return 10;
  } else if (calcul === 1) {
    return 11;
  } else {
    return calcul;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomC();
  let secondCard = getRandomC();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
    hasBlackJack = false;
    isAlive = true;
  } else if (sum === 21) {
    message = "You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
    hasBlackJack = false;
  }
  messageEl.textContent = message;
}

function anotherCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomC();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}
