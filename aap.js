// Click the light bulb to turn on/off the light.


function changeImage() {
    var image = document.getElementById('Bulb');
    if (image.src.match("bulb-on")) {
        image.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    } else {
        image.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
    }
}

// Two Button Use On & Of

function on_Bulb(){
    document.getElementById('Bulb').src='https://i.postimg.cc/6QyTynzr/bulb-on.png'
}

function off_Bulb(){
    document.getElementById('Bulb').src='https://i.postimg.cc/KjK1wL3c/bulb-off.png'
}

//One Button Use On Or Off


let btn = document.getElementById('bton')
let img = document.getElementById('Bulb')
// btn.addEventListener('click',change)
function change(){
    if(btn.textContent.includes('On')){
        img.src= "https://i.postimg.cc/6QyTynzr/bulb-on.png"
        btn.style.background = "yellow"
        btn.style. color = "black"
        btn.textContent ="Turn Off"
    }else{
        img.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
        btn.style. background = "green"
        btn.style. color = "white"
        btn.textContent = "Turn On"
    }
}
















// ONE BUTTON USE ON OR OFF

// let btn = document.getElementById('btn')
// let img = document.getElementById('bulb')
// btn.addEventListener('click',change)
// function change(e){
//     if (btn.textContent.includes('on')) {
//         img.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png"
//         btn.style.background = "green"
//         btn.style.color = "white"
//         btn.style.fontSize ="25px"
//         btn.textContent ="Turn Off"
//     }else{
//         img.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png" 
//         btn.textContent = "turn on"
//         btn.style.background = "yellow"
//         btn.style.color = "black"
//         btn.style.fontSize ="20px"
//     }
// }















































