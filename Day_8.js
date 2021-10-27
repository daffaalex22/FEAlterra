
console.log("=============================== no1 ===============================")
const nilai1 = [1, 2, 3, 4, 5];
let nilai2 = nilai1.reduce((accumulator, item) => {
    // console.log(accumulator, item)
    accumulator = accumulator + item;
    return accumulator
}, 0)

console.log("array  : [" + nilai1 + "]")
console.log("sum    : " + nilai2)

console.log("=============================== no2 ===============================")
var filterValue = [-4, 3, 2, -21, 1];

filterValue = filterValue.filter((item) => {
    return item > 0
})
console.log(filterValue)

console.log("=============================== no3 ===============================")
var data = [
    { name: 'daniel', age: 45 },
    { name: 'john', age: 30 },
    { name: 'robert', age: null },
    { name: 'jen', age: undefined },
    { name: null, age: undefined },
]

data = data.reduce((accumulator, item) => {
    // console.log(accumulator, item);
    if (typeof (item.name) == 'string' && typeof (item.age) == 'number') {
        accumulator.push(item)
        return accumulator
    }
    return accumulator
}, [])

console.log(data)

console.log("=============================== no4 ===============================")
konfersiMenit = (number) => {
    // Dividing the input with 60 seconds
    fraction = number / 60;
    // Taking the minutes out of the input
    minutes = Math.floor(fraction);
    // Taking the seconds out of the input
    seconds = Math.round((fraction % minutes) * 60);

    // Condition when the input is less than 1 minute
    if (minutes == 0) {
        seconds = number
    }

    // Condition when the seconds is one digit
    if (seconds < 10) {
        seconds = '0' + seconds.toString()
    }
    return minutes + ":" + seconds
}

console.log(konfersiMenit(88))
console.log(konfersiMenit(53))
console.log(konfersiMenit(120))
console.log(konfersiMenit(124))

console.log("=============================== no5 ===============================")
function inputHarusGenap(angka) {
    if (angka & 2 != 0) {
        throw 'Invalid'
    } else {
        return 'Valid'
    }
}

try {
    console.log(inputHarusGenap(7));
} catch (e) {
    console.log(e);
}

try {
    console.log(inputHarusGenap(4));
} catch (e) {
    console.log(e);
}


console.log("=============================== no6 ===============================")
function perkalianUnik(arr) {
    let res = arr.map((_, index) => {
        let resItem = arr.reduce((accumulator, item, indexR) => {
            if (index != indexR) {
                accumulator *= item
                return accumulator
            }
            return accumulator
        }, 1)

        return resItem
    });
    return res
}

console.log(perkalianUnik([2, 4, 6]))
console.log(perkalianUnik([1, 2, 3, 4, 5]))
console.log(perkalianUnik([1, 4, 3, 2, 5]))
console.log(perkalianUnik([1, 3, 3, 1]))
console.log(perkalianUnik([2, 1, 8, 10, 2]))
