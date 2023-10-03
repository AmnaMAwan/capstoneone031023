// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  name: String,
  deposit: Number,
  withdraw: Number

  // Add any other fields you need here
},{timestamps:true}

);

const Transaction = mongoose.model('recods260923', transactionSchema);
//const Transaction = mongoose.model('challenge', transactionSchema);


module.exports = Transaction;
