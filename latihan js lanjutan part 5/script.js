/* ======================================================================
   DATA DUMMY (sudah disediakan)
   ====================================================================== */

let pemainA = "Andi";
let pemainB = "Budi";
const warnaFavorit = ["Merah", "Biru", "Hijau", "Kuning", "Ungu"];

const karyawan = {
    nama: "Sari Wulandari",
    divisi: "Marketing",
    gajiPokok: 6500000,
};

const pesanan = {
    pembeli: {
        nama: "Doni Pratama",
        alamat: {
            kota: "Bandung",
            kodePos: "40123",
        },
    },
    items: [
        { namaProduk: "Sepatu Lari", harga: 350000 },
        { namaProduk: "Kaos Olahraga", harga: 120000 },
    ],
};

const nilaiUjian = [100, 70, 85, 90, 60, 75];

const dataSiswa = {
    nama: "Sinta",
    kelas: "12A",
    nilaiMatematika: 95,
    nilaiFisika: 88,
    nilaiKimia: 92,
};


/* ======================================================================
   SOAL 1 — ARRAY DESTRUCTURING (swap & ambil elemen)
   ====================================================================== */

document.getElementById("btn-swap").addEventListener("click", () => {
    [pemainA, pemainB] = [pemainB, pemainA];

    [warnaUtama, , warnaKetiga] = warnaFavorit;

    const textProperti = `pemain A: ${pemainA} warna favorit : ${warnaUtama} | pemain B : ${pemainB} warna favorit : ${warnaKetiga}`;

    document.getElementById("output-array").textContent = textProperti;
});


/* ======================================================================
   SOAL 2 — OBJECT DESTRUCTURING (alias & default value)
   ====================================================================== */

document.getElementById("btn-object").addEventListener("click", () => {
    const { nama, divisi, gajiPokok: gaji, bonus = 0 } = karyawan;

    document.getElementById("output-object").textContent = ` nama : ${nama} | divisi : ${divisi} | gajih Pokok : ${gaji} | bonus : ${bonus}
`;
});


/* ======================================================================
   SOAL 3 — NESTED DESTRUCTURING
   ====================================================================== */

document.getElementById("btn-nested").addEventListener("click", () => {
    const { pembeli: { nama, alamat: { kota } } } = pesanan;
    const [{ namaProduk, harga }] = pesanan.items;

    document.getElementById("output-nested").textContent = ` nama : ${nama} | alamat : ${kota} 
    nama produk : ${namaProduk} | harga : ${harga}
`;
});


/* ======================================================================
   SOAL 4 — DESTRUCTURING PARAMETER FUNGSI
   ====================================================================== */

function buatKartuUser({ nama, umur = 18, kota = "Tidak diketahui" }) {
    return `nama : ${nama} | umur : ${umur} | kota : ${kota}`
}

document.getElementById("btn-buat-kartu-user").addEventListener("click", () => {
    const nama = document.getElementById("input-nama-user").value;
    const umurInput = document.getElementById("input-umur-user").value;
    const kotaInput = document.getElementById("input-kota-user").value;

    const data = {
        nama: nama,
        umur: umurInput,
        kota: kotaInput
    }
    document.getElementById("user-card-output").textContent = buatKartuUser(data);
});


/* ======================================================================
   SOAL 5 — REST PATTERN
   ====================================================================== */

document.getElementById("btn-rest").addEventListener("click", () => {
    const [nilaiPercobaan, ...nilaiAsli] = nilaiUjian;
    const total = nilaiAsli.reduce((total, nilai) => total + nilai, 0);
    const nilaiRataRata = total / nilaiAsli.length;

    const { nama, kelas, ...nilaiMapel } = dataSiswa;
    const nilaiIndividu = Object.values(nilaiMapel);
    const totalNilaiIndividu = nilaiIndividu.reduce((total, nilai) => total + nilai, 0);
    const nilaiRataRataIndividu = totalNilaiIndividu / nilaiIndividu.length;

    const textProperti = `batas nilai rata rata : ${nilaiRataRata} | nilai rata rata sodari ${nama} : ${nilaiRataRataIndividu}`;

    document.getElementById("output-rest").textContent = textProperti;
});
