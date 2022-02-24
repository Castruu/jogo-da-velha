let index = 0;
let gameOver = false;

let boxes = document.querySelectorAll(".box");
let restartButton = document.getElementById("restart");

restartButton.onclick = () => document.location.reload();

let winning = [
    [
        0, 1, 2
    ],
    [
        3, 4, 5
    ],
    [
        6, 7, 8
    ],
    [
        0, 3, 6
    ],
    [
        1, 4, 7
    ],
    [
        2, 5, 8
    ],
    [
        0, 4, 8
    ],
    [
        2, 4, 6
    ]
]

function loadPage() {
    for (box of boxes) {
        box.onclick = draw;
    }
}


function verify() {
    for (arr of winning) {
        let colors = [];
        for (i of arr) {
            box = boxes[i]
            let backgroundColor = box.style.backgroundColor;
            if (!backgroundColor) continue;
            colors.push(backgroundColor);
        }
        console.log(colors);
        console.log(arr);
        for (color in colors) {
            if (color == 0) continue;
            console.log(color)
            if (colors[color] == colors[color - 1]) {
                console.log(colors[color], colors[color - 1]);
                if (color == 2) {
                    alert(`O jogador ${colors[color]} ganhou!`);
                    gameOver = true;
                    return;
                }
            } else {
                break;
            }
        }
    }
}

function draw() {
    if(gameOver) return;
    if (this.style.backgroundColor) {
        return;
    }
    if (index == 0) {
        this.style.backgroundColor = "black"
        index = 1;
    } else {

        this.style.backgroundColor = "blue"
        index = 0;
    }
    verify();
}