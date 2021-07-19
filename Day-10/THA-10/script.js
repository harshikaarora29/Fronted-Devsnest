const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard= false;
let lockBoard= false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard) return;
    if(this===firstCard)return;

    this.classlist.toggle('flip');

    if (!hasFlippedCard){
        //first click
        hasFlippedCard= true;
        firstCard=this;

        return;
    }
    
        //second card
        secondCard=this;

 checkForMatch(); 
}

function checkForMatch(){
    let isMatch =firstCard.dataset.framework===secondCard.dataset.framework;
   
    isMatch ? disableCards(): unfipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard); 

    resetBoard();
}

function unfipCards(){
    lockBoard=true;

    setTimeout(() => {
        firstCard.classlist.remove('flip');
        secondCard.classlist.remove('flip');

       resetBoard();
    }, 1500);
}

function resetBoard(){
[hasFlippedCard, lockBoard]=[false, false];
[firstCard, secondCard]=[null, null];
}

(function shuffle() {
    card.forEach( card =>{
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order= randomPos;
    });
})();

card.forEach(card => card.addEventListener('click',flipCard));

