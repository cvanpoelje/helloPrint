export const getRandomNumber = () => {
    return Math.ceil(Math.random() * 100);
};

const playerInputs = document.querySelectorAll(".playerCard__input"),
    playerSubmits = document.querySelectorAll(".playerCard__submit"),
    playerMessages = document.querySelectorAll(".playerCard__message");

const theNumber = getRandomNumber();
let playerGuesses = {
    1: {
        guess: null,
        status: null,
    },
    2: {
        guess: null,
        status: null,
    },
    3: {
        guess: null,
        status: null,
    },
};

playerSubmits.forEach((playerSubmit) => {
    playerSubmit.addEventListener("click", () => {
        const playerIndex = parseInt(playerSubmit.dataset.player, 10);
        playerGuesses[playerIndex].guess = playerInputs[playerIndex - 1].value;

        if (playerGuesses[playerIndex].guess > theNumber) {
            playerGuesses[playerIndex].status = "Lower";
        }
        if (playerGuesses[playerIndex].guess < theNumber) {
            playerGuesses[playerIndex].status = "Higher";
        }

        if (parseInt(playerGuesses[playerIndex].guess) === theNumber) {
            playerGuesses[playerIndex].status = "Bingo!";
            playerSubmits.forEach((playerSubmit) => {
                playerSubmit.setAttribute('disabled', true);
            })
        }
        playerMessages.forEach((playerMessage) => {
            if (playerGuesses[playerMessage.dataset.player].status !== null) {
                playerMessage.innerHTML = playerGuesses[playerMessage.dataset.player].status;
            }
        })
    });
});


