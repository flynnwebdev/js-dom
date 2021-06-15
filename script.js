// let obj = document.querySelector("h1")
// console.log(obj.innerHTML)
// obj.innerHTML = '<span style="color:red">Hello!!!!</span>'

// let newDiv = document.createElement("div")
// newDiv.innerHTML = "Awesome DIV text!!!!"
// let parent = document.querySelector("#list")
// // let parent = document.getElementById("list")
// parent.appendChild(newDiv)

// // let obj2 = ul.querySelectorAll("li:nth-child(odd)")
// // let obj2 = ul.getElementsByTagName("li")
// console.log(obj2)

// let secondLi = ul.querySelector("li:nth-child(2)")
// // secondLi.parentNode.removeChild(secondLi)
// secondLi.remove()
// console.log(secondLi)

const items = [
    "Adding to the DOM",
    "Querying the DOM",
    "Changing the DOM",
    "Event listeners"
]

let ul = document.querySelector("ul");

for (let item of items) {
    ul.innerHTML += `<li>${item}</li>`
    // let li = document.createElement("li")
    // li.innerHTML = item
    // ul.appendChild(li)
}

let h1 = document.querySelector("h1")
h1.classList.add("blue")

console.log(window.getComputedStyle(h1).color)

let myButton = document.querySelector("#submit")

myButton.addEventListener("click", function (event) {
    event.preventDefault()
    let textInput = document.querySelector("form input[type=text]")
    ul.innerHTML += `<li>${textInput.value}</li>`;
})

let div = document.querySelector("#list")
let p = div.querySelector("p")

div.addEventListener("click", e => console.log("Div clicked"))
p.addEventListener("click", e => {
    e.stopPropagation()
    console.log("P clicked")
})
