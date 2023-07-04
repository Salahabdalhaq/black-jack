const player = {
    name: "Salah",
    chips: 250,
  };
  
  let cards = [];
  let sum = 0;
  let hasBlackJack = false;
  let isAlive = false;
  let message = "";
  const messageEl = document.getElementById("game-message");
  const sumEl = document.getElementById("sum-info");
  const cardsEl = document.getElementById("cards-info");
  const playerEl = document.getElementById("player-info");
  
  playerEl.textContent = `${player.name}: $${player.chips}`;
  
  function getRandomCard() {
    const randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber > 10 ? 10 : randomNumber === 1 ? 11 : randomNumber;
  }
  
  function startGame() {
    isAlive = true;
    const firstCard = getRandomCard();
    const secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
  
  function renderGame() {
    cardsEl.textContent = "Cards: ";
    cards.forEach((card) => {
      cardsEl.textContent += card + " ";
    });
  
    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "You've got Blackjack!";
      hasBlackJack = true;
    } else {
      message = "You're out of the game!";
      isAlive = false;
    }
    messageEl.textContent = message;
  }
  
  function newCard() {
    if (isAlive && !hasBlackJack) {
      const card = getRandomCard();
      sum += card;
      cards.push(card);
      renderGame();
    }
  }
  
  