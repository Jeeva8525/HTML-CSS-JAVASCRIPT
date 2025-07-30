let orderSequence = "123456789"
/* orderSequence = "384756192" */

let storageBox = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let currenPosition = -1
function orderMaker() {
    storageBox = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    orderSequence = ""
    for (let x = 0; x < 9; x++) {
        currenPosition = Math.floor((Math.random() * (9 - x)))
        orderSequence += storageBox[currenPosition]
        storageBox.splice(currenPosition, 1)
    }
    /* console.log("Order is : ",orderSequence) */
}

let nextSeconds = 0
let timeDelay = 400
let str = ""
let countKeeper = 0
let screenProtector = document.getElementById("screenProtector")
let timeout = 0
let startButton = document.getElementById("start")
let extraSpace = document.getElementById("extraSpace")

boxes = document.querySelectorAll(".box")
console.log("Box is ", boxes)
function starter() {
    orderMaker()
    startButton.style.display = "none"
    extraSpace.style.display = "block"
    screenProtector.style.display = "block"
    loopRunner()
    countKeeper += 1
}

function loopRunner() {
    nextSeconds = 0
    for (let y = 0; y <= countKeeper; y++) {
        change(boxes[orderSequence[y] - 1], nextSeconds)
        nextSeconds += timeDelay
    }
    str = ""
    /* timeout=timeDelay*(countKeeper)+timeDelay */
    timeout = nextSeconds
    setTimeout(() => {
        screenProtector.style.display = "none"
    }, timeout);
}
function toggle(event) {
    event.target.style.backgroundColor = "blue"
    setTimeout(() => { event.target.style.backgroundColor = "violet" }, timeDelay)
}
function change(element, seconds) {
    setTimeout(() => { element.style.backgroundColor = "blue" }, seconds)
    setTimeout(() => { element.style.backgroundColor = "violet" }, seconds + timeDelay)
}
function changeRed(element) {
    element.style.backgroundColor = "red"
    setTimeout(() => { element.style.backgroundColor = "violet" }, timeDelay)
}
function changeChecker(event) {


    str += event.target.id.at(-1)
    /* console.log("String is ", str) */
    if (str.length == countKeeper && str == orderSequence.slice(0, str.length)) {
        if (str.length == orderSequence.length) {
            setTimeout(() => {
                alert("You won");
                startButton.style.display = "block"
                extraSpace.style.display = "none"
            }, 500)
            orderMaker()
            str = ""
            countKeeper = 0
            return
        }

        screenProtector.style.display = "block"
        setTimeout(() => { loopRunner(); countKeeper += 1 }, 1000)
    }
    else if (str == orderSequence.slice(0, str.length)) {
        /* console.log("loop ran away") */
    }
    else {
        screenProtector.style.display = "block"
        changeRed(event.target)
        console.log("Wrong enter")
        str = ""
        countKeeper = 0
        setTimeout(() => {
            startButton.style.display = "none"
            screenProtector.style.display = "block"
            loopRunner()
            countKeeper += 1
        }, 500)

    }

}
