const db = require('../config/database');

// Fungsi untuk mendapatkan semua data
const getAllData = (callback) => {
  db.query('SELECT * FROM data', (err, results) => {
    if (err) return callback(err, null);
    return callback(null, results);
  });
};

// Fungsi untuk menambah data
const addData = (nama, alamat, callback) => {
  const query = 'INSERT INTO data (nama, alamat) VALUES (?, ?)';
  db.query(query, [nama, alamat], (err, result) => {
    if (err) return callback(err, null);
    return callback(null, result);
  });
};

// Fungsi untuk mengedit data
const updateData = (id, nama, alamat, callback) => {
  const query = 'UPDATE data SET nama = ?, alamat = ? WHERE id = ?';
  db.query(query, [nama, alamat, id], (err, result) => {
    if (err) return callback(err, null);
    return callback(null, result);
  });
};

// Fungsi untuk menghapus data
const deleteData = (id, callback) => {
  const query = 'DELETE FROM data WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return callback(err, null);
    return callback(null, result);
  });
};

module.exports = {
  getAllData,
  addData,
  updateData,
  deleteData
};
