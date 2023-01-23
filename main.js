function flames() {
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
    } else if (count === 2) {
        console.log("LOVE");
    } else if (count === 3) {
        console.log("AFFECTION");
    } else if (count === 4) {
        console.log("MARRIAGE");
    } else if (count === 5) {
        console.log("ENEMIES");
    } else if (count === 6) {
        console.log("SIBLINGS");
    }
}