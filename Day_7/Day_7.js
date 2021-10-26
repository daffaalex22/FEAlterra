var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

terdaftar = true;
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

console.log("array = " + lengkap_arr[2]);
// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

perkenalan();

// NOMOR 2
// 2a.  Karena nilai variabel terdaftar adalah false
// 2b.  nama dideklarasikan sebagai suatu konstanta yang berarti nilainya
//      tidak boleh/tidak akan berubah sepanjang code dijalankan. Assignment
//      terhadap suatu konstanta (setelah inisialisasi) inilah yang menyebabkan error
// 2c.  variabel asal dideklarasikan di dalam fungsi perkenalan(). Hal
//      ini menyebabkan variabel asal tidak dapat diakses di luar fungsi tsb.

// NOMOR 3
const foo = ['Budi', 'Sita', 'Ayu'];
[a, b, c] = foo;
console.log(a);
console.log(b);
console.log(c);

// FUNCTION TO RETURN ARRAY VALUE
function ReturnArray(array) {
    var res = '['
    for (let i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            res = res + array[i] + ']'
        }
        else {
            res = res + array[i] + ', '
        }
    }

    console.log(res)
}


// NOMOR 4
let bdays = ['10-17', '05-19', '20-19'];

// Changing the dash to a forward slash
for (let i = 0; i < bdays.length; i++) {
    bdays[i] = bdays[i].replace(/-/g, '/')
}

// Calling each element of bdays
ReturnArray(bdays)

// NOMOR 5
let value = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < value.length; i++) {
    value[i] = value[i] * 2;
}

ReturnArray(value)

// NOMOR 6
let arr = [1.5, 2.56, 5.1, 12.33];

for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.ceil(arr[i]);
}

ReturnArray(arr)