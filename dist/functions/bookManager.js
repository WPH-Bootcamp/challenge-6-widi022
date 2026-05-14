"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
function addBook(newBook) {
    books_1.books.push(newBook);
    console.log(`Buku "${newBook.title}" berhasil ditambahkan.`);
}
// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
function listBooks() {
    console.log("\n===Daftar Buku:===");
    if (books_1.books.length === 0) {
        console.log("Tidak ada buku yang tersimpan.");
        return;
    }
    else {
        books_1.books.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" oleh ${book.author} (${book.publicationYear})`);
        });
    }
}
// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
function searchBook(title) {
    if (!title) {
        console.log("\nMenampilkan semua buku karena judul kosong");
        listBooks();
        return;
    }
    const hasil = books_1.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
    console.log(`\n==Hasil Pencarian untuk "${title}"==+`);
    if (hasil.length === 0) {
        console.log(`Buku dengan judul "${title}" tidak ditemukan.`);
    }
    else {
        hasil.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" oleh ${book.author} (${book.publicationYear})`);
        });
    }
}
