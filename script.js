const cards = document.querySelectorAll('.card');
let hasFlipperCard = false;
let firstCard, seconSCard

function flipCard() {
    this.classList.add('flip');
    if(!hasFlipperCard) {
        hasFlipperCard = true;
        firstCard = this;
        return;
    }
    seconSCard = this;
    hasFlipperCard = false;
    checkForMath();
}

function checkForMath() {
    if(firstCard.dataset.card === seconSCard.dataset.card) {
        disebleCards();
        return;
    }
    unflipCards()
}

function disebleCards() {
    firstCard.removeEventListener('click', flipCard);
    seconSCard.removeEventListener('click', flipCard);
}
function unflipCards() {
    setTimeout (() =>{
        firstCard.classList.remove('flip');
        seconSCard.classList.remove('flip');


    },1500);
}

cards.forEach((card) => {
    card.addEventListener ('click' , flipCard)
})

