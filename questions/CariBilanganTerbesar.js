/**
 * Buatlah sebuah fungsi Javascript yang menerima sebuah array bilangan bulat dan mengembalikan bilangan terbesar dalam array tersebut.
 * Contoh:
 * Input: [5, 8, 2, 10, 3]
 * Output: 10
 */

// ! Jangan ubah nama function
function cariBilanganTerbesar(array) {
  // Tulis kodemu disini

  // Mengembalikan null jika arraynya kosong
  if (array.length === 0) {
    return null;
  }

  let angkaTerbesar = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > angkaTerbesar) {
      angkaTerbesar = array[i];
    }
  }

  return angkaTerbesar;
}

module.exports = cariBilanganTerbesar;
