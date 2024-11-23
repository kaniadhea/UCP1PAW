const dataModel = require('../models/dataModel');

// Mengambil semua data
const getAllData = (req, res) => {
  dataModel.getAllData((err, data) => {
    if (err) return res.status(500).send(err);
    res.render('index', { data: data });
  });
};

// Menambah data
const addData = (req, res) => {
  const { nama, alamat } = req.body;
  dataModel.addData(nama, alamat, (err, result) => {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  });
};

// Mengupdate data
const updateData = (req, res) => {
  const { id, nama, alamat } = req.body;
  dataModel.updateData(id, nama, alamat, (err, result) => {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  });
};

// Menghapus data
const deleteData = (req, res) => {
  const { id } = req.params;
  dataModel.deleteData(id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  });
};

module.exports = {
  getAllData,
  addData,
  updateData,
  deleteData
};
