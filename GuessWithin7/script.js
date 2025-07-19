let score = document.getElementById("score")
let attempts = 7
let hintTag = document.getElementById("hint")
let noOfAttempts = document.getElementById("noOfAttempts")
let textTag = document.querySelector('input[type="number"]')
let text
let answer = Math.floor((Math.random() * 100) + 1)
console.log("Answer is ", answer)

let downArrow=document.getElementById("downArrow")
let upArrow=document.getElementById("upArrow")

let form = document.getElementById("form")
form.addEventListener("keydown",(e)=>{
    if(e.key ==="Enter"){
        e.preventDefault()
        check()
    }
})

function check() {
    attempts -= 1
    text = Number(textTag.value)
    if (text <= 0 || text > 100) {
        alert("Please enter a number between 1 and 100 (both inclusive)")
        attempts += 1
        return
    }
    else if (text == answer) {
        console.log(score.textContent.slice(8))
        score.textContent = "SCORE : " + (Number(score.textContent.slice(8)) + 1)
        hintTag.textContent = "The number is " + text + ", You won!!"
        attempts = 7
        answer = Math.floor((Math.random() * 100) + 1)
        console.log("Answer is ", answer)
        noOfAttempts.textContent = "The number is reseted . You can continue the game"
    }
    else if (attempts <= 0) {
        hintTag.textContent = "You have lost , Try again"
        upArrow.style.display="block"
        downArrow.style.display="none"
        attempts = 7
        answer = Math.floor((Math.random() * 100) + 1)
        console.log("Answer is ", answer)
        noOfAttempts.textContent = "The number is reseted"
    }
    else if (text < answer) {
        hintTag.textContent = "Your number is lower!"
        downArrow.style.display="block"
        upArrow.style.display="none"
        noOfAttempts.textContent = "No. of attempts left: " + attempts
    }
    else if (text > answer) {
        hintTag.textContent = "Your number is higher!"
        upArrow.style.display="block"
        downArrow.style.display="none"
        noOfAttempts.textContent = "No. of attempts left: " + attempts
    }

    textTag.value = ""
    textTag.placeholder = text
}