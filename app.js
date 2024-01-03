const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#your-points");
const compScore = document.querySelector("#comp-points");

let userScoreCount=0;
let compScoreCount=0;

const showWinner =(userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        msg.innerText = `You win! Your ${userChoice} beats Comp ${compChoice}`;
        userScoreCount++;
        userScore.innerText = userScoreCount;
        msg.style.backgroundColor = "#52b788";
        msg.style.color ="#344e41"
    }else{
        compScoreCount++;
        compScore.innerText = compScoreCount;
        msg.style.backgroundColor = "#a4161a";
        msg.style.color ="#344e41"
        msg.innerText =`You lost. Comp ${compChoice} beats your ${userChoice}`;
    }
}
const drawGame =() =>
{
    msg.innerText = "Game was Draw.Play again";
    msg.style.backgroundColor ="#fefae0";
    msg.style.color ="#344e41"
}

const genCompChoice = ()=>
{
    const options =["rock","paper","scissor"];

    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame = (userChoice)=>
{
    const compChoice = genCompChoice();

    if(userChoice === compChoice)
    {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock")
        {
            //paper and scissor
            if(compChoice === "paper")
            {
                userWin = false;//paper covers rock
            }else{//scissor
                userWin = true;//rock break scissor
            }
        }else if(userChoice === "paper")
        {
            //rock and scissor
            if(compChoice === "rock")
            {
                userWin = true;
            }else{
                //scissor
                userWin = false;
            }
        }else{
            //userchoice = scissor
            if(compChoice === "paper")
            {
                userWin = true;
            }else{
                userWin = false;
            }
            
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

