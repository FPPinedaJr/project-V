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
        output.textContent = "FRIENDSHIP";
    } else if (count === 2) {
        output.textContent = "LOVE";
    } else if (count === 3) {
        output.textContent = "AFFECTION";
    } else if (count === 4) {
        output.textContent = "MARRIAGE";
    } else if (count === 5) {
        output.textContent = "ENEMIES";
    } else if (count === 0) {
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

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


let background = new Image();
background.src = "./img/scratch.jpg";
background.onload = function(){
    let pattern = context.createPattern(background, "repeat");
    context.fillStyle = pattern;
    context.fillRect(0, 0, 300, 500);
}


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

if (isTouchable()) {
    canvas.addEventListener("touchstart", function (e){
        pressing = true;
    })

    canvas.addEventListener("touchmove", function (e) {
        e.preventDefault()
        if (pressing) {
            var rect = e.target.getBoundingClientRect();
            var x = e.targetTouches[0].pageX - rect.left;
            var y = e.targetTouches[0].pageY - rect.top;

            context.globalCompositeOperation = "destination-out";
            context.beginPath();
            context.arc(x, y, 25, 0, 360, false);
            context.fill()}    
        
    })

} else {
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
}

