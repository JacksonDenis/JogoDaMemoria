const cards = document.querySelectorAll('.card');
let hasFlipperCard = false;
let firstCard, seconSCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlipperCard) {
        hasFlipperCard = true;
        firstCard = this;
        return;
    }
    seconSCard = this;
    hasFlipperCard = false;
    checkForMath();
}

function checkForMath() {
    if (firstCard.dataset.card === seconSCard.dataset.card) {
        resetBoard()
        return;
    }
    unflipCards()
}

function disebleCards() {
    firstCard.removeEventListener('click', flipCard);
    seconSCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        seconSCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}


function resetBoard() {
    [hasFlipperCard, lockBoard] = [false, false];
    [firstCard, seconSCard] = [null, null];

}

(function shuffle () {
    cards.forEach ((card) => {
            let ramdomPosition = Math.floor(Math.random() * 12);
            card.style.order = ramdomPosition;
        })
    })();


cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

