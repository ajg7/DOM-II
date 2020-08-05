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
    ele.addEventListener("mousemove", event => {
        ele.style.color = "blue";
        ele.style.fontSize = "50px"
        ele.style.fontWeight = "bold";
        setInterval(function() {
            ele.style.color = "purple";
            ele.style.fontSize = "24px";
            ele.style.fontWeight = "none";
        }, 1500)
        event.preventDefault()
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

const busImage = Array.from(document.getElementsByTagName("img"));
console.log(busImage)
busImage.forEach(ele=>{
    ele.addEventListener("dblclick", event => {
        let randomNum = Math.floor(Math.random() * 1000)
        ele.style.width = `${randomNum.toString()}px`
        ele.style.height = `${randomNum.toString()}px`
    })
})


/*6th Event Listener*/
const sunHeader = document.querySelector(".content-pick .destination h4");
console.log(sunHeader)
sunHeader.addEventListener("auxclick", event => {
    sunHeader.animate([
        {   
            fontSize: "10px",
            color: "purple",
        },
        {
            fontSize: "15px",
            color: "crimson",
        },
        {
            fontSize: "20px",
            color: "lightgreen",
        },
        {
            fontSize: "25px",
            color: "silver",
        },
        {
            fontSize: "30px",
            color: "pink"
        },
        {
            fontSize: "35px",
            color: "violet",
        },
        {
            fontSize: "40px",
            color: "white"
        },
        {
            fontSize: "45px",
            color: "black",
        },
        {
            fontSize: "50px",
            color: "blue",
        }
    ], 10000)
})

/*7th Event Listener*/
const mountainHeader = document.querySelector(".content-pick .destination:nth-child(2) h4")
const body = Array.from(document.getElementsByTagName("body"))
console.log(body)


document.addEventListener("keydown", event => {
    mountainHeader.textContent = "Surprise!";
    mountainHeader.style.color = "yellow";
    mountainHeader.style.backgroundColor = "pink";

    body[0].style.backgroundColor = "pink";
})



/*8th Event Listener*/
let islandHeader = document.querySelector(".content-pick .destination:nth-child(3) h4")
islandHeader.setAttribute("draggable", "true");

const draggingStart = event => {
    islandHeader = event.target;
    islandHeader.style.color = "orange"
}
islandHeader.addEventListener("dragstart", draggingStart, false);



/*9th Event Listener*/

const buttons = Array.from(document.getElementsByClassName("btn"));
console.log(buttons)
buttons.forEach(ele => {
    ele.addEventListener("click", event => {
        let randomColors = ["blue", "green", "red", "yellow", "orange", "brown", "black", "seagrass", "violet"];
        let randomNum = Math.floor(Math.random() * 1000)


        ele.style.width = `${randomNum.toString()}px`
        ele.style.height = `${randomNum.toString()}px`
        ele.style.backgroundColor = `${randomColors[Math.round(Math.random()*randomColors.length)]}`
    })
})

/*10th Event Listener*/

const destinationsText = Array.from(document.querySelectorAll(".content-pick .destination p"))

destinationsText.forEach(ele => {
    ele.addEventListener("wheel", event => {
        ele.textContent = "Pokem ipsum dolor sit amet Exeggutor Kecleon Wing Attack Doduo Red Unown. Sunt in culpa Drilbur Calcium Hoenn Shieldon Wynaut Charizard. Growl Venonat Scolipede Espeon Charizard Barboach Hidden Machine. Duis aute irure dolor in reprehenderit in voluptate they're comfy and easy to wear Onix what kind of Pokemon are you Fog Badge Ampharos Noctowl. Pewter City Marill Slakoth Bronzong Rattata Treecko Cottonee."
    })
})


/*Event Propogation*/

const navBar = document.querySelector ("header div");
const theHeader =document.querySelector("header");

theHeader.addEventListener("click", event =>{
    alert("Hola Terra!");
    navBar.addEventListener("click", event => {
        alert("Chaire, Ge!")
    })
})

