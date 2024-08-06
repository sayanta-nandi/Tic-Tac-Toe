let boxes = document.querySelectorAll(".box");
let wins = document.querySelector("#winner");
let msg = document.querySelector(".msg");
let button = document.querySelectorAll(".button");
let resetButton = document.querySelector("#reset-button");
let firstName = document.querySelector("#player1");
let secondName = document.querySelector("#player2");
let firstScore = document.querySelector("#player1-score");
let secondScore = document.querySelector("#player2-score");

let player1 = prompt("Enter the name of first player");
let player2 = prompt("Enter the name of second player");
let player1Score = 0;
let player2Score = 0;

firstName.innerText = player1;
secondName.innerText = player2;

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turn = "X";
let count = 0;

const draw = () => {
    wins.innerText = `Draw`;
    msg.classList.remove("hide");
}

const winner = () => {
    win.forEach((el) => {
        let a = boxes[el[0]];
        let b = boxes[el[1]];
        let c = boxes[el[2]];
        if(a.innerText != "" && b.innerText != "" && c.innerText != ""){
            if(a.innerText == b.innerText && b.innerText == c.innerText){
                if(a.innerText == "X"){
                    wins.innerText = `The Winner is ${player1}`;
                    player1Score++;
                    firstScore.innerText = player1Score;
                }else{
                    wins.innerText = `The Winner is ${player2}`;
                    player2Score++;
                    secondScore.innerText = player2Score;
                }
                msg.classList.remove("hide");
                boxes.forEach((box) => {
                box.disabled = true;
                count = 0;
                })
            }
        }
    })
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn === "X"){
            box.classList.remove("newclr");
            box.innerText = "X";
            turn = "O";
        }else{
            box.classList.add("newclr");
            box.innerText = "O";
            turn = "X";
        }
        box.disabled = true;
        winner();
        count++;
        console.log(count);
        
        if(count == 9){
            draw();
        }
    });
});


button.forEach((but) => {
    but.addEventListener("click", () => {
        turn = "X";
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
        });
        msg.classList.add("hide");
        count = 0;
    });
});

resetButton.addEventListener("click", () => {
    player1Score=0;
    player2Score=0;
    firstScore.innerText = player1Score;
    secondScore.innerText = player2Score;

});