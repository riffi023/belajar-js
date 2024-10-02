const readline = require("readline-sync");

const angkaPertama = parseFloat(readline.question("Masukkan angka pertama :"));
const operator = readline.question("Masukkan operator (+, -, *, /, %) :");
const angkaKedua = parseFloat(readline.question("Masukkan angka kedua :"));

if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
    // Tampilkan error jika inputan bukan angka
    return console.log("Inputan tidak sesuai !!!");
} else {
    // Lanjutkan eksekusi kode
    const hasil = execute(angkaPertama, angkaKedua, operator);
    if (hasil !== undefined) {
        console.log(`Hasilnya adalah ${hasil}`);
    }
}

function execute(angkaPertama, angkaKedua, operator) {
    switch (operator) {
        case "+":
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            // Pembagian, cek pembagian dengan nol
            if (angkaKedua === 0) {
                console.log("Error: Pembagian dengan nol tidak diizinkan!");
                return;
            }
            return angkaPertama / angkaKedua;
        case "%":
            // Modulus, cek modulus dengan nol
            if (angkaKedua === 0) {
                console.log("Error: Modulus dengan nol tidak diizinkan!");
                return;
            }
            return angkaPertama % angkaKedua;
        default:
            console.log("Operator tidak valid");
            return;
    }
}
