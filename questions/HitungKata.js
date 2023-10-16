/**
 * Buatlah sebuah fungsi Javascript yang bernama hitungKata($kalimat) yang akan menerima satu parameter berupa string $kalimat.
 * Fungsi ini harus mengembalikan jumlah kata dalam kalimat tersebut.
 * Kata-kata dalam kalimat akan dipisahkan oleh spasi.
 * Contoh:
 * Input: "Halo nama saya Galih"
 * Output: 4
 */

// ! Jangan ubah nama function
function hitungKata(kalimat) {
  // Tulis kodemu disini
  if (typeof kalimat !== "string") {
    throw new Error("Input Harus Berupa String !");
  }

  if (kalimat.trim() === "") {
    return 0;
  }

  const words = kalimat.split(/\s+/).filter((words) => words !== "");
  return words.length;
}

module.exports = { hitungKata };
