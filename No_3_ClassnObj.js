class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    perkenalanDiri() {
        return `Halo, saya ${this.nama}. ${this.umur > 17 ? 'Saya sudah dewasa' : 'Saya masih di bawah umur'}`
    }
}

class Pelajar extends Orang {
    constructor(nama, umur) {
        super(nama, umur);
        this.pekerjaan = "Siswa/Mahasiswa";
    }
    perkenalanDiri() {
        return `Halo, saya ${this.nama}. Saya belum bekerja`
    }
}

class Pekerja extends Orang {
    constructor(nama, umur, pekerjaan) {
        super(nama, umur);
        this.pekerjaan = pekerjaan;
    }

    perkenalanProfesi() {
        return `Hi, Saya seorang ${this.pekerjaan}`
    }
}

const ana = new Orang('Ana', 10);
const ini = new Pelajar('Ini', 18);
const budi = new Pekerja('Budi', 28, 'Koki');

console.log(ana.perkenalanDiri());
console.log(ini.perkenalanDiri());
console.log(ini.pekerjaan);
console.log(budi.perkenalanDiri());
console.log(budi.perkenalanProfesi());
console.log(budi.pekerjaan);