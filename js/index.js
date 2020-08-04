// Your code goes here

/*1st Event Listener*/
const logoHeading = document.querySelector("header .logo-heading");
logoHeading.addEventListener("mouseover", event => {
    logoHeading.textContent = "Bonjour Monde! C'est le bus amusant!"
    logoHeading.style.color = "green"
})

/*2nd Event Listener*/

const nav = document.querySelectorAll("header nav a");
nav.forEach(ele => {
    ele.addEventListener("click", event => {
        ele.style.color = "blue";
        ele.style.fontSize = "50px"
        ele.style.fontWeight = "bold";
        setInterval(function() {
            ele.style.color = "purple";
            ele.style.fontSize = "24px";
            ele.style.fontWeight = "none";
        }, 1500)
    })
})
