

let screen = document.getElementById("screen")
screen.textContent = "" //Initially, set as empty string 

function isOperator(c){
    switch(c){
        case '+':
        case '-':
        case '*':
        case '\\':
        case '^':
        case '.':
        case '%':
            return true // no break required
        default:
            return false
    }
}
let decimalPointCounter = 0
function changer(event) {
    // console.log(isOperator(screen.textContent.slice(-1)))

    let eventContent = event.target.textContent
    //c1 - Checking whether already a decimal point is present or not 
    if(screen.textContent == ""){
        if(!(eventContent == '+' || eventContent == '-') && isOperator(eventContent)){
            return
        }
    }
    if(event.target.textContent == '.'){  
        if(decimalPointCounter == 1){
            return;
        }
        else
            decimalPointCounter++;
    }
    else if(isOperator(event.target.textContent)){
        decimalPointCounter = 0
    }
    //end c1
    
    if(isOperator(event.target.textContent) && isOperator(screen.textContent.slice(-1))){ //if two operators are encountered consecutively 
        if(!(screen.textContent.length == 1))
            screen.textContent = screen.textContent.slice(0,-1) + event.target.textContent
        return
    }
    screen.textContent += event.target.textContent
}
function refresh() {
    screen.textContent = ""
}
function backspace() {
    screen.textContent = screen.textContent.slice(0, -1)
}
function result() {
   
    let inp = screen.textContent + "+"  //An extra sign is required at end so that the final number is also operated
    let leftOperand = "", rightOperand = ""
    let marker = "" //stores the sign
    for (var x = 0; x < inp.length; x++) {
        if (!isNaN(inp[x]) || inp[x] == ".") {
            leftOperand += inp[x]
        }
        else {
            // console.log("Right is ", rightOperand)
            leftOperand = Number(leftOperand)
            marker = inp[x]
            x++
            break
        }
    }
    // console.log("Left is ", leftOperand)


    for (; x < inp.length; x++) {
        if (!isNaN(inp[x]) || inp[x] == ".") {
            rightOperand += inp[x]
        }
        else {
            leftOperand = calculate(leftOperand, marker, rightOperand)
            rightOperand = ""
            marker = inp[x]
        }
    }

    if (isNaN(leftOperand)) {
        screen.textContent = "Syntax Error"
    }
    else {
        screen.textContent = leftOperand
    }

}

function calculate(left, temp, right) {  //left is a num , temp is the operator , right is a string
    if (temp == "+") {
        left += Number(right)
    }
    else if (temp == "-") {
        left -= Number(right)
    }
    else if (temp == "*") {
        left *= Number(right)
    }
    else if (temp == "/") {
        left /= Number(right)
    }
    else if (temp == "%") {
        left %= Number(right)
    }
    else if (temp == "^") {
        left = Math.pow(left, Number(right))
    }
    left = Number(left.toFixed(7))
    return left
}

