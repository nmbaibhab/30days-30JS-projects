const game = ()=>{
    let pScore =0;
    let cScore = 0;

    const StartGame=()=>{
        const playbtn= document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playbtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //playmatch
    const playmatch= ()=>{
        const options = document.querySelector('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
    };

    StartGame();

};
//calling the game function
game();