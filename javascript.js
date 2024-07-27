
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random()*3+1);
    if(random === 1){
        return "rock"
    }
    else if(random ===2){
        return "paper"
    }
    else if(random === 3){
        return "scissors"
    }
    
}

function getHumanChoice(){
    let choice = prompt("enter choice between: rock,paper,scissors")
    let choiceLow = choice.toLowerCase()   
    if(choiceLow != "rock" && choiceLow != "paper" && choiceLow != "scissors"){
        alert("invalid choice")
    }
    else{
        return choiceLow
    }
    
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
    console.log(`Human score is: ${humanScore}`)
    console.log(`Computer score is: ${computerScore}`)
}


function playGame(){
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

playGame()