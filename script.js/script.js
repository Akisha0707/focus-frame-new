
const getImg = document.querySelector(".foto-section-reviews")
getImg.setAttribute("alt", "women")
console.log(getImg.getAttribute("alt"))
console.log(getImg)

const getButton = document.querySelector(".button-section-sign-up")

getButton.addEventListener("click",(event)=>{
event.preventDefault()
console.log (event)
console.log ("Button was click")
})
console.log(getButton)

const handClick = (event)=> {
    console.log (event)
}

