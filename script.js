let totalturn=5
let currentturn=0
let computerpoints=0
let playerpoints=0


const winning=(event)=>{
    event.preventDefault()
    //ensuring only the choice trigger the event
    if(!event.target.classList.contains('c')) return

    if(currentturn>=totalturn){
        alert("Game Over ! Restart to play again")
        return
    }
    let computer_choice=['rock','paper','scissor']
    let value=Math.floor(Math.random()*3)
    let computer_choose=computer_choice[value]

    const player_choose=event.target.id

    let playerchoose=document.querySelector('.playerchoose')
    let computerchoose=document.querySelector('.computerchoose')
    let result=document.getElementById('result')
    let playerscore=document.querySelector('.playerscore')
    let computerscore=document.querySelector('.computerscore')


        if(player_choose==='rock')
            {
                playerchoose.textContent='Player: Rock'
                if(computer_choose=='rock')
                {
        
                    computerchoose.textContent='Computer: Rock'
                    result.textContent='It\'s a tie'
                    playerscore.innerHTML=`Player Points: ${playerpoints}`
                    computerscore.innerHTML=`Computer Points: ${computerpoints}`
                }
                else if(computer_choose==='paper')
                {
                    computerchoose.textContent='Computer: Paper'
                    result.textContent='Computer Wins'
                    computerpoints++
                    playerscore.innerHTML=`Player Points: ${playerpoints}`
                    computerscore.innerHTML=`Computer Points: ${computerpoints}`
                }
                else if(computer_choose==='scissor')
                {
                    computerchoose.textContent='Computer: Scissor'
                    result.textContent='Player Wins'
                    playerpoints++
                    playerscore.innerHTML=`Player Points: ${playerpoints}`
                    computerscore.innerHTML=`Computer Points: ${computerpoints}`
                }
            }
        
            if (player_choose === 'paper') {
                playerchoose.textContent = 'Player: Paper';
                if (computer_choose === 'rock') {
                    computerchoose.textContent = 'Computer: Rock';
                    result.textContent = 'Player Wins';
                    playerpoints++;
                } else if (computer_choose === 'paper') {
                    computerchoose.textContent = 'Computer: Paper';
                    result.textContent = "It's a tie";
                } else if (computer_choose === 'scissor') {
                    computerchoose.textContent = 'Computer: Scissor';
                    result.textContent = 'Computer Wins';
                    computerpoints++;
                }
                playerscore.innerHTML = `Player Points: ${playerpoints}`;
                computerscore.innerHTML = `Computer Points: ${computerpoints}`;
            }
            
            if (player_choose === 'scissor') {
                playerchoose.textContent = 'Player: Scissor';
                if (computer_choose === 'rock') {
                    computerchoose.textContent = 'Computer: Rock';
                    result.textContent = 'Computer Wins';
                    computerpoints++;
                } else if (computer_choose === 'paper') {
                    computerchoose.textContent = 'Computer: Paper';
                    result.textContent = 'Player Wins';
                    playerpoints++;
                } else if (computer_choose === 'scissor') {
                    computerchoose.textContent = 'Computer: Scissor';
                    result.textContent = "It's a tie";
                }
                playerscore.innerHTML = `Player Points: ${playerpoints}`;
                computerscore.innerHTML = `Computer Points: ${computerpoints}`;
            }

            currentturn++

            if(currentturn===totalturn)
            {
                result.textContent="Game Over!!!"
            }
            
    }
    
const form=document.querySelector('.choices')
form.addEventListener('click',winning)

// Restart the game
const restart = document.getElementById('restart');
restart.addEventListener('click', (event) => {
    event.preventDefault();

    // Reset variables
    currentturn = 0;
    computerpoints = 0;
    playerpoints = 0;

    // Clear UI
    document.querySelector('.playerchoose').textContent = 'Player: ';
    document.querySelector('.computerchoose').textContent = 'Computer: ';
    document.getElementById('result').textContent = '';
    document.querySelector('.playerscore').innerHTML = 'Player Points: ';
    document.querySelector('.computerscore').innerHTML = 'Computer Points: ';
});