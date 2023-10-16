/**
 * Buatlah sebuah fungsi Javascript yang menerima sebuah array nilai numerik dan menghitung rata-rata nilai dari array tersebut.
 * Contoh:
 * Input: [80, 90, 75, 60, 85]
 * Output: 78
 */

// ! Jangan ubah nama function
function hitungRataRata(nilai) {
  // Tulis kodemu disini
  if (!Array.isArray(nilai)) {
    throw new Error("Input nilai harus berupa array");
  }

  // Mengembalikan null jika arraynya kosong
  if (nilai.length === 0) {
    return 0;
  }

  const total = nilai.reduce((sum, current) => sum + current, 0);
  const average = total / nilai.length;
  return Math.round(average);
}

module.exports = { hitungRataRata };
