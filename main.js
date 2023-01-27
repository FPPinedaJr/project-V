function flames() {
    let output = document.getElementById('output');
    const input1 = document.getElementById('yourname').value;
    const input2 = document.getElementById('theirname').value;

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
    } else if (count === 6) {
        console.log("SIBLINGS");
        output.textContent = "SIBLINGS";

    }




// FLIP
    const card = document.querySelector(".inner");
    card.classList.toggle("is-flipped");
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

