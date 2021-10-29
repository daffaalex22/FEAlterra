const lodash = require("lodash");

function valCounter(string) {
    let prevPos = 0;
    let curPos = 0;
    let valCount = 0;
    let extremePoint = 0;
    // let sketch = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] == "U") {
            prevPos = curPos;
            curPos += 1;
            // if (prevPos == curPos) {
            //     for (let j = 0; j <= i; j++) {
            //         sketch.push()
            //     }
            // }
            // // sketch = sketch + "/";
        } else {
            prevPos = curPos;
            curPos -= 1;
            // sketch = sketch + "\\";
        }
        if (Math.abs(curPos) > Math.abs(extremePoint)) {
            extremePoint = curPos
        }
        if (curPos == 0 && extremePoint < 0) {
            valCount += 1;
            extremePoint = 0;
        }
    }

    return valCount
}

console.log(valCounter("DDUUDDUDUUUD")); //2
console.log(valCounter("UDDDUDUU")); //1
console.log(valCounter("DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD")); //2

// string = " ";
// while (string != 999) {
//     var string = window.prompt("Enter your string: ");
//     console.log("That path goes through: " + valCounter("DDUUDDUDUUUD") + "valley(s)");
// }

// var linem1 = "\\"
// var linem2 = "\\"
// var d3 = "/"
// var d4 = "/"

// line0 = linem1 + "  " + d4;
// linem1 = " \n" + " " + line2;
// linem1 = " \n\n" + " " + line2;
// console.log(line0 + linem1 + linem2);