// Dependencies
const express = require('express');

const router = express.Router();

const table1Controller = require('../controller/table1Controller');

router.get('/total-expences', table1Controller.totalExpences);

router.post('/savedata', table1Controller.saveData);

router.get('/all-expences', table1Controller.allExpences);

router.put('/update-expences', table1Controller.updateExpences);

router.delete('/delete-expences', table1Controller.deleteExpences);

module.exports = router;
