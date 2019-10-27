
function randomNumberGenerator(){
    let ranArray = []
    while(ranArray.length != 5){
        let ranNum = Math.floor(Math.random() * 25);
        if(!(ranArray.indexOf(ranNum)>-1)){
            ranArray.push(ranNum);
        }
    }
    console.log(ranArray);
    return ranArray;
}

function showBlocks(){
    let random = randomNumberGenerator();
    let blocks = document.getElementsByClassName('box');

    for(let i = 0; i < random.length; i++){
        blocks[random[i]].children[1].style.backgroundColor = '#37A8E8';
        flip(random[i]);
    }
    setTimeout( () => {
        for(let i = 0; i < random.length; i++){
            flip(random[i]);
        }
    }, 3000)

    setTimeout( () => {
        rotation();
    }, 3500)
}

function boxLocate(){
    let board = document.getElementById("game-board");
    for(let i = 0; i < 25; i++){
        let box = document.createElement("div"); 
        box.className = "box";
        box.setAttribute("onclick","flip("+ i +");");
        let front = document.createElement("div"); 
        front.className = "front";
        let back = document.createElement("div"); 
        back.className = "back"
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

function rotation(){
    let board = document.getElementById("game-board");
    board.classList.add("rotation");
}

function newGame(){
    setTimeout(showBlocks,500);
    setTimeout(rotation,5000);
}

boxLocate();

