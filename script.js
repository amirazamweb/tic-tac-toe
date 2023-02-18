let divArr = document.querySelectorAll('#box-container>div');
let start = document.querySelector('.start');
let end = document.querySelector('.end');

// creating 3x3 array;

let arr = new Array(3);

for (let i = 0; i < 3; i++) {
    arr[i] = new Array(3);
}
let n = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arr[i][j] = divArr[n++];
    }
}

// local storage for storing the result

function storeResultInLocalStorage(data) {

    // console.log(data);

    let gameResult = JSON.parse(sessionStorage.getItem('res')) || { player1: 0, player2: 0 };
    // console.log(gameResult);

    if (data == 'cross') {
        gameResult.player1++;
        document.querySelector('#opacity').style.display = 'block';
        document.querySelector('#draw-condition').innerHTML = 'Player 1 Won';
        document.querySelector('#pop-up').style.display = 'block';
    }

    else if (data == 'circle') {
        gameResult.player2++;
        document.querySelector('#opacity').style.display = 'block';
        document.querySelector('#draw-condition').innerHTML = 'Player 2 Won';
        document.querySelector('#pop-up').style.display = 'block';
    }

    sessionStorage.setItem('res', JSON.stringify(gameResult));

}

let soundA = './mp3/ClickingSound.mp3';
let soundB = './mp3/iPhoneNotificationSound.mp3';

// game div click

start.addEventListener('click', () => {
    let num = 0;
    for (let i = 0; i < divArr.length; i++) {
        divArr[i].addEventListener('click', () => {
            if (!divArr[i].classList.contains('cross') && !divArr[i].classList.contains('circle')) {
                divArr[i].classList.add(num % 2 ? 'circle' : 'cross');
                if (num % 2 == 0) {
                    document.querySelector('audio').src = soundA;
                }
                else {
                    document.querySelector('audio').src = soundB;
                }

                // checking horizental, vertical and diagonal 


                let r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, w1 = 0, w2 = 0, z = 0, z1 = 0;
                for (let x = 0; x < 3; x++) {

                    let p = 0, q = 0;

                    for (let y = 0; y < 3; y++) {

                        if (arr[x][y].classList.contains('circle')) {
                            p++;
                        }

                        if (arr[x][y].classList.contains('cross')) {
                            q++;
                        }

                        if (x == y) {
                            if (arr[x][y].classList.contains('circle')) {
                                r++;
                            }

                            if (arr[x][y].classList.contains('cross')) {
                                s++;
                            }

                        }

                        if ((x + y) == 2) {
                            if (arr[x][y].classList.contains('circle')) {
                                t++;
                            }

                            if (arr[x][y].classList.contains('cross')) {
                                u++;
                            }
                        }
                    }


                    if (arr[x][0].classList.contains('circle')) {
                        v++;
                    }

                    if (arr[x][0].classList.contains('cross')) {
                        w++;
                    }

                    if (arr[x][1].classList.contains('circle')) {
                        w1++;
                    }

                    if (arr[x][1].classList.contains('cross')) {
                        w2++;
                    }

                    if (arr[x][2].classList.contains('circle')) {
                        z++;
                    }

                    if (arr[x][2].classList.contains('cross')) {
                        z1++;
                    }

                    // game result

                    if (p == 3) {
                        // console.log("circle");
                        storeResultInLocalStorage('circle');
                    }
                    else if (q == 3) {
                        // console.log("cross");
                        storeResultInLocalStorage('cross');
                    }
                    else if (r == 3) {
                        // console.log("circle");
                        storeResultInLocalStorage('circle');
                    }
                    else if (s == 3) {
                        // console.log("cross");
                        storeResultInLocalStorage('cross');
                    }
                    else if (t == 3) {
                        // console.log("circle");
                        storeResultInLocalStorage('circle');
                    }
                    else if (u == 3) {
                        // console.log("cross");
                        storeResultInLocalStorage('cross');
                    }
                    else if (v == 3) {
                        // console.log("circle");
                        storeResultInLocalStorage('circle');
                    }
                    else if (w == 3) {
                        // console.log("cross");
                        storeResultInLocalStorage('cross');
                    }
                    else if (w1 == 3) {
                        // console.log("circle");
                        storeResultInLocalStorage('circle');
                    }
                    else if (w2 == 3) {
                        // console.log("cross");
                        storeResultInLocalStorage('cross');
                    }
                    else if (z == 3) {
                        // console.log("circle");
                        storeResultInLocalStorage('circle');
                    }
                    else if (z1 == 3) {
                        // console.log("cross");
                        storeResultInLocalStorage('cross');
                    }

                }
                num++;

                // match draw scene

                if (num == 9) {
                    document.querySelector('#opacity').style.display = 'block';
                    document.querySelector('#pop-up').style.display = 'block';
                }
            }
        })

    }
    start.setAttribute('disabled', "");
    start.style.backgroundColor = '#badc58';
    start.style.cursor = 'auto';
})

// end button

end.addEventListener('click', () => {
    location.reload();
})

// ok button after game finished

document.querySelector('#pop-up button').addEventListener('click', () => {
    location.reload();
})


// local storage for history

let resultHistory = JSON.parse(sessionStorage.getItem('res')) || { player1: 0, player2: 0 };

document.querySelector('.history').addEventListener('click', () => {
    document.querySelector('#opacity').style.display = 'block';
    document.querySelector('#pl1').innerHTML = resultHistory.player1;
    document.querySelector('#pl2').innerHTML = resultHistory.player2;
    document.querySelector('#historyDiv').style.display = 'block';
})

// history ok button

document.querySelector('#historyDiv button').addEventListener('click', () => {
    location.reload();
})