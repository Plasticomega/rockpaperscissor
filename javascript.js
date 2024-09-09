
let humanScore = 0;
let computerScore = 0;
let totalrounds = 0;
let computerwin 
let humanwin 
let draw 

let computerChoice
function getComputerChoice(){
    let random = Math.floor(Math.random()*3+1);
    if(random === 1){
        computerChoice = "rock"
        return "rock"
    }
    else if(random ===2){
        computerChoice = "paper"
        return "paper"
    }
    else if(random === 3){
        computerChoice = "scissors"
        return "scissors"
    }  
}

function changeComputer(){
    let computerimg = document.querySelector('.computerimg')

    const rockchoice = document.createElement('img')
    rockchoice.src = 'rock.png'
    rockchoice.classList.add('computerimg')

    const paperchoice = document.createElement('img')
    paperchoice.src = 'paper.png'
    paperchoice.classList.add('computerimg')
    
    const scissorschoice = document.createElement('img')
    scissorschoice.src = 'scissors.png'
    scissorschoice.classList.add('computerimg')

    if(computerChoice == 'rock'){
        computerimg.replaceWith(rockchoice)
    }
    else if(computerChoice == 'paper'){
        computerimg.replaceWith(paperchoice)
    }
    else if(computerChoice == 'scissors'){
        computerimg.replaceWith(scissorschoice)
    }
}

changeComputer()





let humanChoice
function getHumanChoice(){
    let rock = document.querySelector(".rock")
    rock.addEventListener("click", choicerock)
    
    let paper = document.querySelector(".paper")
    paper.addEventListener("click", choicepaper)
    
    let scissors = document.querySelector(".scissors")
    scissors.addEventListener("click", choicescissors)
}

 getHumanChoice()
 function choicerock(){
    humanChoice = "rock"
    playRound(getComputerChoice(),humanChoice)
 }

 function choicepaper(){
    humanChoice = "paper"
    playRound(getComputerChoice(),humanChoice)
 } 
 function choicescissors(){
    humanChoice = "scissors"
    playRound(getComputerChoice(),humanChoice)
 }

function playRound(computerChoice,humanChoice){
    computerwin = false
    humanwin = false
    draw = false
    if(computerChoice == humanChoice){
        draw = true
    }else if(computerChoice === 'rock' && humanChoice ==='paper'){
        humanwin = true
        humanScore += 1
    }else if(computerChoice === 'rock' && humanChoice ==='scissors'){
        computerwin = true
        computerScore += 1
    }else if(computerChoice === 'paper' && humanChoice ==='rock'){
        computerwin = true
        computerScore += 1
    }else if(computerChoice === 'paper' && humanChoice ==='scissors'){
        humanwin = true
        humanScore += 1
    }else if(computerChoice=== 'scissors' && humanChoice ==='rock'){
        humanwin = true
        humanScore += 1
    }else if(computerChoice === 'scissors' && humanChoice ==='paper'){
        computerwin = true
        computerScore += 1
    }
    changeComputer()
    updateScore()
    whowon()
    
    totalrounds += 1;
    if(totalrounds === 5){
        wincondition()
    }else{
        changekirby()
    }
    
}


function updateScore(){
 let compscr = document.querySelector('.computerscore')
 let humscr = document.querySelector('.humanscore')
 compscr.textContent = `Computer Score : ${computerScore}`
 humscr.textContent = `Your Score : ${humanScore}`
}
updateScore()

function whowon(){
    let winner = document.querySelector('.winner')
    if(computerwin){
        winner.textContent = `Computer Wins ${computerChoice} beats ${humanChoice}`
    }else if(humanwin){
        winner.textContent = `Human Wins ${humanChoice} beats ${computerChoice}`
    }else if(draw){
        winner.textContent = `It's a draw!`
    }
    
}

function changekirby(){
    let kirbyComputer = document.querySelector('.kirbycomp')
    let kirbyHuman = document.querySelector('.kirbyhuman')
    if(computerwin){
        kirbyComputer.src = 'kirby1up.gif'
        setTimeout(() => {
        kirbyComputer.src = 'kirbyidle.gif';
    }, 2000);
    }
    if(humanwin){
        kirbyHuman.src = 'kirby1up.gif'
        setTimeout(() => {
        kirbyHuman.src = 'kirbyidle.gif';
    }, 2000);
    }
}

function wincondition(){
    let kirbyComputer = document.querySelector('.kirbycomp')
    let kirbyHuman = document.querySelector('.kirbyhuman')
    let computerwinner = false
    let humanwinner = false
    if(computerScore > humanScore){
        console.log('computer won')
        computerwinner = true
    }else if(computerScore < humanScore){
        console.log('human won')
        humanwinner = true
    }else{
        draw = true
    }
    computerScore = 0
    humanScore = 0
    updateScore()
    if(computerwinner){
        kirbyComputer.src = 'kirbywin.gif'
        kirbyHuman.src = 'kirbyloss.gif'
    }
    if(humanwinner){
        kirbyHuman.src = 'kirbywin.gif'
        kirbyComputer.src = 'kirbyloss.gif'
    }
    if(draw){
        kirbyComputer.src = ''
        kirbyHuman.src = ''
    }

    
}




/*function playGame(){
    for(let i=0;i <= 5;i++){
        console.log(`Its round ${i}`)
        playRound(getComputerChoice(),getHumanChoice())
    }
    if(computerScore > humanScore){
        console.log("Computer wins")
    }else if(humanScore > computerScore){
        console.log("Human wins")
    }else{
        console.log("It's a draw")
    }
}

playGame()*/


