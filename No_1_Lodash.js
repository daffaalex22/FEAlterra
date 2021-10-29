console.log("=============================== no1 ===============================")
const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let mengumpulkan_tugas = ["rena", "omen"];

const _ = require("lodash");
console.log("============== 1a ==============")
var belum_ngumpul = _.difference(anggota_kelas, mengumpulkan_tugas);
console.log(belum_ngumpul);

console.log("============== 1b ==============")
var grouping = _.chunk(anggota_kelas, 2)
console.log(grouping);

console.log("============== 1c ==============")
var joining = _.join(anggota_kelas, '-')
console.log(joining);

console.log("============== 1d ==============")
var tail = _.tail(anggota_kelas)
console.log(tail);

console.log("============== 1e ==============")
var reversed = _.reverse(anggota_kelas)
console.log(reversed);