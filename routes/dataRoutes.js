const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Rute untuk mengambil semua data
router.get('/', dataController.getAllData);

// Rute untuk menambah data
router.post('/add', dataController.addData);

// Rute untuk mengupdate data
router.post('/update', dataController.updateData);

// Rute untuk menghapus data
router.get('/delete/:id', dataController.deleteData);

module.exports = router;
