function flames() {
    let output = document.getElementById('output');
    const input1 = document.getElementById('yourname').value;
    const input2 = document.getElementById('theirname').value;

    if (input1 == "" || input2 == "") {
        alert("Please write your name and his/her name!")
    } else {

    let name1 = input1;
    let name2 = input2;

    // --/ /g like /text/g, it will search for all(g) of "text". see regular-expressions for more info
    name1 = name1.toLowerCase().replace(/ /g, '');
    name2 = name2.toLowerCase().replace(/ /g, '');

    const commonLetterArr = [];
    for (let i = 0; i < name1.length; i++) {
        let letter1 = name1[i];
        for (let i = 0; i < name2.length; i++) {
            let letter2 = name2[i];
            
            if (letter1 === letter2) {
                commonLetterArr.push(letter1);
            }
        }
    }

    for (let i = 0; i < commonLetterArr.length; i++) {
        let commonLetter = commonLetterArr[i];
        name1 = name1.replace(commonLetter, "");
        name2 = name2.replace(commonLetter, "");
    }

    let name = name1 + name2;
    let count = name.length;
    count = count % 6;

    if (count === 1) {
        console.log("FRIENDSHIP");
        output.textContent = "FRIENDSHIP";
    } else if (count === 2) {
        console.log("LOVE");
        output.textContent = "LOVE";
    } else if (count === 3) {
        console.log("AFFECTION");
        output.textContent = "AFFECTION";
    } else if (count === 4) {
        console.log("MARRIAGE");
        output.textContent = "MARRIAGE";
    } else if (count === 5) {
        console.log("ENEMIES");
        output.textContent = "ENEMIES";
    } else if (count === 0) {
        console.log("SIBLINGS");
        output.textContent = "SIBLINGS";

    }

// FLIP
    const card = document.querySelector(".inner");
    card.classList.toggle("is-flipped");

}
}

function show() {
    let show = document.getElementById("theirname");
    let checkbox = document.getElementById("show");
    if (show.type == "text") {
        show.type = "password";
        checkbox.classList.add("fa-eye-slash")
        checkbox.classList.remove("fa-eye")

    } else {
        show.type = "text";
        checkbox.classList.add("fa-eye")
        checkbox.classList.remove("fa-eye-slash")
    }
}


// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");
// context.fillStyle = "#515151";
// context.fillRect(0, 0, 300, 500);

// canvas.addEventListener("mousemove", function(e) {
//     const x = e.offsetX;
//     const y = e.offsetY;
//     context.globalCompositeOperation = "destination-out";
//     context.beginPath();
//     context.arc(x, y, 25, 0, 360, false);
//     context.fill()})




const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


let background = new Image();
background.src = "./img/scratch01.png";
background.onload = function(){
    let pattern = context.createPattern(background, "repeat");
    context.fillStyle = pattern;
    context.fillRect(0, 0, 300, 500);
}




let pressing = false;
canvas.addEventListener("mousedown", e => {
    pressing = true;
});

canvas.addEventListener("mousemove", function move(e) {
    if (pressing) {
        const x = e.offsetX;
        const y = e.offsetY;
        context.globalCompositeOperation = "destination-out";
        context.beginPath();
        context.arc(x, y, 25, 0, 360, false);
        context.fill()}    
    }
);
    
document.addEventListener("mouseup", function stop(e) {
    pressing = false;
});





let deviceType = "";
const isTouchable = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch(e) {
        deviceType = "mouse"
        return false
    }
}

console.log(isTouchable())