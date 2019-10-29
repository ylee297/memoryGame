
let gameStart = false;
let answer;
let level = 1;
let totalScore = 0;
let scoreYouGot = 0;
let numberOfChoice = 6;
let round = 1;

function randomNumberGenerator(){
    let ranArray = []
    while(ranArray.length != (5+level)){
        let ranNum = Math.floor(Math.random() * Math.pow(4+level,2));
        if(!(ranArray.indexOf(ranNum)>-1)){
            ranArray.push(ranNum);
        }
    }
    console.log(ranArray);
    return ranArray;
}

async function showBlocks(){
    answer = randomNumberGenerator();
    let blocks = document.getElementsByClassName('box');

    for(let i = 0; i < answer.length; i++){
        blocks[answer[i]].children[1].style.backgroundColor = '#37A8E8';
        flip(answer[i]);
    }
    setTimeout( () => {
        for(let i = 0; i < answer.length; i++){
            flip(answer[i]);
        }
    }, 3000)

    await setTimeout( () => {
        rotation();
    }, 3500)

    setTimeout(enableChoose, 3600);
    
}

function boxLocate(){
    let board = document.getElementById("game-board");
    for(let i = 0; i < Math.pow(4+level,2); i++){
        let box = document.createElement("div"); 
        box.classList.add("box");
        let front = document.createElement("div"); 
        front.classList.add("front");
        let back = document.createElement("div"); 
        back.classList.add("back");
        box.appendChild(front);
        box.appendChild(back);
        board.appendChild(box);
    }
}

function flip(index){
    let blocks = document.getElementsByClassName('box');
    if(blocks[index].classList.contains("is-flipped")){
        blocks[index].classList.remove("is-flipped");
    } else {
        blocks[index].classList.add("is-flipped");
    }
}

function choose(index){
    if(gameStart){
        let boxes = document.getElementsByClassName('box');
        boxes[index].removeAttribute("onclick")
        if(answer.indexOf(index) > -1){
            totalScore++;
            scoreYouGot++;
        } else {
            totalScore--;
        }

        if(totalScore < 0){
            alert('You are loser')
            window.location.href="/"
            return;
        }

        document.getElementById('score').textContent = totalScore;
        flip(index);

        numberOfChoice--;
        console.log(numberOfChoice);
        if(numberOfChoice == 0){
            disableChoose();
            setTimeout(nextGame,1000);
        }
    }
}

function rotation(){
    let board = document.getElementById("game-board");
    board.classList.add("rotation");
}

function newGame(){
    gameStart = true;
    reset()
    score = 0;
    level = 1;
    let gameBoard = document.getElementById('game-board');
    gameBoard.classList.remove('rotation');

    //set the size of updated blocks
    gameBoard.style.gridTemplateColumns = "repeat("+(level + 4)+",50px)"; 
    gameBoard.style.gridTemplateRows = "repeat("+(level + 4)+",50px)";

    var child = gameBoard.lastElementChild;  
    while (child) { 
        gameBoard.removeChild(child); 
        child = gameBoard.lastElementChild; 
    }
    boxLocate();
    setTimeout(showBlocks,500);
    setTimeout(rotation,5000);
}

function nextGame(){
    round++;
    if(scoreYouGot == level + 5){
        level++;
    } else {
        level--;
    }
    document.getElementById('level').textContent = level;
    document.getElementById('round').textContent = round;


    reset();
    let gameBoard = document.getElementById('game-board');

    gameBoard.classList.remove('rotation');
    var child = gameBoard.lastElementChild;  
    while (child) { 
        gameBoard.removeChild(child); 
        child = gameBoard.lastElementChild; 
    } 
    //set the size of updated blocks
    // gameBoard.classList.add("levelTwo");
    
    gameBoard.style.gridTemplateRows = "repeat(" + (level + 4) + ", 50px)";
    gameBoard.style.gridTemplateColumns = "repeat(" + (level + 4) + ", 50px)";

    boxLocate();
    setTimeout(showBlocks,500);
    setTimeout(rotation,5000);
}

//reset values which is used in one game temporary
function reset(){
    answer = null;
    scoreYouGot = 0;
    numberOfChoice = level + 5;
}

async function terminate(){
    let r =confirm("Do you want to terminate this game?");
    if(r == true){
        let name = await prompt("What is your name");
        const url = '/game/recordscore'
        let userScore = {"name" : name,"score" : totalScore}
        const setting = {
            method: 'POST',
            body: JSON.stringify(userScore),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        await fetch(url, setting);
    }
}

function disableChoose(){
    let boxes = document.getElementsByClassName('box');
    for(let i = 0; i < Math.pow(4+level,2); i++){
        boxes[i].removeAttribute("onclick")
    }
}
function enableChoose(){
    let boxes = document.getElementsByClassName('box');
    for(let i = 0; i < Math.pow(4+level,2); i++){
        boxes[i].setAttribute("onclick","choose("+i+");")
    }
}



boxLocate();
newGame();

