// function clock(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minuts = date.getMinutes();
//     let seconds = date.getSeconds();
//     let year = date.getFullYear();
//     let mount = date.getMonth();
//     let day = date.getDate();

//     if(hours < 10){
//         hours = `0${hours}`
//     }
//     if(minuts < 10){
//         minuts = `0${minuts}`
//     }
//     if(seconds < 10){
//         seconds = `0${seconds}`
//     }
//     if(mount < 10){
//         mount = `0${mount}`
//     }
//     if(day < 10){
//         day = `0${day}`
//     }
//     document.getElementById("block_moth").innerHTML = `${hours}: ${minuts}: ${seconds}`
//     document.getElementById("block_day").innerHTML =   `${year}: ${mount}: ${day}`
// }

// setInterval(clock, 1000);



const redS = document.getElementById("red")
const yellowS = document.getElementById("yellow")
const greenS = document.getElementById("green")
let showColor = "red"



red()

function red(){
    redS.style.backgroundColor = "red"
    setTimeout(()=>{
        redS.style.backgroundColor = "rgb(19,11,11)"
        showColor === "red"
        yellow()
    },5000)
}

function yellow(){
    yellowS.style.backgroundColor = "yellow"
    setTimeout(()=>{
        yellowS.style.backgroundColor = "rgb(19,11,11)"
        if(showColor === "red"){
            green()
        }
        else{
            red()
        }
    },1000)
}

function green(){
    greenS.style.background = "green"
    setTimeout((
    )=>{
        greenS.style.backgroundColor = "rgb(19,11,11)"
        showColor = "green"
        yellow()
    },5000)
}