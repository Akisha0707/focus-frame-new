
// const getImg = document.querySelector(".foto-section-reviews")
// getImg.setAttribute("alt", "women")
// console.log(getImg.getAttribute("alt"))
// console.log(getImg)

// const getButton = document.querySelector(".button-section-sign-up")

// getButton.addEventListener("click",(event)=>{
// event.preventDefault()
// console.log (event)
// console.log ("Button was click")
// })
// console.log(getButton)

// const handClick = (event)=> {
//     console.log (event)
// }

// const getNavMenu = document.querySelector(".svg-nav-menu")
// const getMobileMenu = document.querySelector(".mobile-menu-landing")

// const getSum = (event) => { 
//     event.preventDefault();
//     getMobileMenu.style.display = "flex";
//     console.log("done")
// }
// getNavMenu.addEventListener("click", getSum)


// const closeMobileMenu = document.querySelector(".svg-x")

// const closeMobile = (event) => {
//     event.preventDefault();
//     getMobileMenu.style.display = "none";
// }

// closeMobileMenu.addEventListener("click", closeMobile)
"user strict"

const petya = {
  username: "Petya",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.username);
  },
};

petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
petya.showName(); // 'Petya'