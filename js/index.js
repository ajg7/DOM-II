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


/*3rd Event Listener*/

const header2s = Array.from(document.getElementsByTagName("h2"));
const delay = (ele, color, time) => {
    setInterval (() => {
        ele.style.color = color;
    }, time)
}

header2s.forEach(ele => {
    ele.addEventListener("mouseleave", event => {
        ele.style.textAlign = "center"
        ele.style.backgroundColor = "crimson"
        delay(ele, "yellow", 3000);
    })
})

/*4th Event Listener*/
const p = Array.from(document.getElementsByTagName("p"));

p.forEach(ele => {
    ele.addEventListener("copy", event => {
        ele.style.fontSize = "35px"
    })
})

/*5th Event Listener*/

const busImage = document.querySelector(".container .intro img");
console.log(busImage)
busImage.addEventListener("dblclick", event => {
    busImage.style.width = "100px"
    busImage.style.height = "250px"
})