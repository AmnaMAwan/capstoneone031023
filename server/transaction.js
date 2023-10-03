// server.js
const express = require('express');
const mongoose = require('mongoose');
const Transaction = require('./models/transaction'); // Import your Mongoose model

// ... Other server setup code ...

// Create a new transaction using the Transaction modelconst 


//

const newTransaction = new Transaction({
    name: 'John Doe',
    deposit: 100,
    withdraw: 60,
  });
  
  newTransaction.save()
    .then(savedTransaction => {
      console.log('Transaction saved successfully:', savedTransaction);
    })
    .catch(error => {
      console.error('Error saving transaction:', error);
    });
  



//


