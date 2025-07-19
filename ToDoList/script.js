let toDoItem = document.getElementById("toDoItem")
let ul = document.querySelector(".items")
let text
let arr = []
arr = JSON.parse(localStorage.getItem("myList")) || []
checkStarter = JSON.parse(localStorage.getItem("myCheckBox")) || []
console.log(arr)
for (let x = 0; x < arr.length; x++) {
    text = arr[x]
    liTag = document.createElement("li")
    if (checkStarter[x]) {
        liTag.innerHTML = `<label class="labeller"><input type="checkbox" onclick="checkBoxChecker()" checked><p class="unit">${text}</p></label><button onclick="closeButton(event)">x</button>`
    }
    else {
        liTag.innerHTML = `<label class="labeller"><input type="checkbox" onclick="checkBoxChecker()"><p class="unit">${text}</p></label><button onclick="closeButton(event)">x</button>`
    }
    liTag.style = "list-style-type: none;"
    ul.append(liTag)
    checkBoxChecker()
}
function adder() {
    text = toDoItem.value
    liTag = document.createElement("li")
    liTag.innerHTML = `<label class="labeller"><input type="checkbox" onclick="checkBoxChecker()"><p class="unit">${text}</p></label><button onclick="closeButton(event)">x</button>`
    liTag.style = "list-style-type: none;"
    ul.append(liTag)
    arr.push(text)
    console.log(arr)
    localStorage.setItem("myList", JSON.stringify(arr))
    toDoItem.value = ""
}

let labeller
function closeButton(event) {
    arr = []
    event.target.parentElement.remove()
    labeller = document.querySelectorAll(".labeller")
    for (let x = 0; x < labeller.length; x++) {
        arr.push(labeller[x].textContent)
    }
    localStorage.setItem("myList", JSON.stringify(arr))
    console.log(arr)
    checkBoxChecker()
}
function checkBoxChecker() {
    checkTexts = document.querySelectorAll('.unit')
    console.log(checkTexts)
    tickMarks = []
    inputers = document.querySelectorAll('input[type="checkbox"]')
    for (let x = 0; x < inputers.length; x++) {
        if (inputers[x].checked) {
            tickMarks.push(1)
            checkTexts[x].style.textDecoration = "line-through"
        }
        else {
            tickMarks.push(0)
            checkTexts[x].style.textDecoration = ""
        }
    }
    localStorage.setItem("myCheckBox", JSON.stringify(tickMarks))
    console.log(tickMarks)
}
