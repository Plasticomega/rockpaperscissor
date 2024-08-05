
let humanScore = 0;
let computerScore = 0;

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
    console.log(humanChoice)
    console.log(computerChoice)
    if(computerChoice == humanChoice){
        console.log("It's a draw")
    }else if(computerChoice === 'rock' && humanChoice ==='paper'){
        console.log("Human wins ,Paper beats rock ")
        humanScore += 1
    }else if(computerChoice === 'rock' && humanChoice ==='scissors'){
        console.log("Computer wins,Rock beats scissors")
        computerScore += 1
    }else if(computerChoice === 'paper' && humanChoice ==='rock'){
        console.log("Computer wins, Paper beats rock")
        computerScore += 1
    }else if(computerChoice === 'paper' && humanChoice ==='scissors'){
        console.log("Human wins, Scissors beat paper")
        humanScore += 1
    }else if(computerChoice=== 'scissors' && humanChoice ==='rock'){
        console.log("Human wins,Rock beats scissors")
        humanScore += 1
    }else if(computerChoice === 'scissors' && humanChoice ==='paper'){
        console.log("Computer wins, Scissors beats paper")
        computerScore += 1
    }
    changeComputer()
    console.log(`Human score is: ${humanScore}`)
    console.log(`Computer score is: ${computerScore}`)
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


