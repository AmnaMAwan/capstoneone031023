// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Transaction = require('./models/transaction'); // Import your Mongoose model

const app = express();
const port = process.env.PORT || 5050; // Use your desired port

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://amnamunawarawan:w3kXMbVCdgHYMCvx@cluster0.daivfsy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// ... Other server setup code ...
// code for adding record 
app.post('/api/add-deposit', async (req, res) => {
  try {
    const { name, deposit } = req.body; // Assuming you send 'name' and 'deposit' in the request body
    const newTransaction = new Transaction({
      name,
      deposit,
    });

    const savedTransaction = await newTransaction.save();
    res.json(savedTransaction);
  } catch (error) {
    console.error('Error adding deposit:', error);
    res.status(500).json({ error: 'Failed to add deposit' });
  }
});



//
//--- withdrawls
// code for adding record 
app.post('/api/add-withdraw', async (req, res) => {
  console.log('api/add-withdraw is accessed')
  try {
    const { name, withdraw } = req.body; // Assuming you send 'name' and 'dwithdraw' in the request body
    const {times}=new Date()
    const newTransaction = new Transaction({
      name,
      withdraw,
      times
      
    });

    const savedTransaction = await newTransaction.save();
    res.json(savedTransaction);
  } catch (error) {
    console.error('Error adding deposit:', error);
    res.status(500).json({ error: 'Failed to add deposit' });
  }
});



//


// Create an API endpoint to calculate and send the total sum of deposits
app.get('/api/total-deposits', async (req, res) => {
  console.log('API endpoint /api/total-deposits accessed.'); // Add this line
  try {
    const totalDeposits = await Transaction.aggregate([
      {
        $group: {
          _id: null,
          totalDeposits: { $sum: '$deposit' } // Assuming 'deposit' is the field name
        }
      }
    ]);

    res.json({ sum: totalDeposits[0]?.totalDeposits || 0 });
  } catch (error) {
    console.error('Error calculating total deposits:', error);
    res.status(500).json({ error: 'Failed to calculate total deposits' });
  }
});
//
// Fetch individual deposits by name
// Create an API endpoint to calculate and send the total sum of deposits
app.get('/api/total-withdraws', async (req, res) => {
  console.log('API endpoint /api/total-withdraws accessed.'); // Add this line
  try {
    const totalWithdraws = await Transaction.aggregate([
      {
        $group: {
          _id: null,
          totalWithdraws: { $sum: '$withdraw' } // Assuming 'deposit' is the field name
        }
      }
    ]);

    res.json({ sum: totalWithdraws[0]?.totalWithdraws || 0 });
  } catch (error) {
    console.error('Error calculating total deposits:', error);
    res.status(500).json({ error: 'Failed to calculate total deposits' });
  }
});
//
app.get('/api/deposits/:name', async (req, res) => {
  console.log('API endpoint /api/deposits-name accessed.');
  try {
    const deposits = await Transaction.find({ name: req.params.name });
    res.json(deposits);
  } catch (error) {
    console.error('Error fetching deposits:', error);
    res.status(500).json({ error: 'Failed to fetch deposits' });
  }
});
//
// Fetch individual withdrawl by name
app.get('/api/withdraws/:name', async (req, res) => {
  console.log('API endpoint /api/withdraws name accessed.');
  const name=req.params.name;
  try {
    console.log('fetching records for  name ${name} ')
    const withdraws = await Transaction.find({ name: req.params.name });
    console.log('withdrwan found',withdraws)
    res.json(withdraws);
  } catch (error) {
    console.error('Error fetching withdraws:', error);
    res.status(500).json({ error: 'Failed to fetch withdraws' });
  }
});



//
// sum of withdraws by a name

//


// Calculate and send the sum of deposits for a specific name
app.get('/api/total-deposits/:name', async (req, res) => {
  console.log('/api/total-deposit/:name is accessed')
  try {
    const totalDeposits = await Transaction.aggregate([
      {
        $match: {
          name: req.params.name,
        },
      },
      {
        $group: {
          _id: null,
          totalDeposits: { $sum: '$deposit' },
        },
      },
    ]);

    res.json({ sum: totalDeposits[0]?.totalDeposits || 0 });
  } catch (error) {
    console.error('Error calculating total deposits:', error);
    res.status(500).json({ error: 'Failed to calculate total deposits' });
  }
});
//
// total withdraws by name
// Calculate and send the sum of deposits for a specific name
app.get('/api/total-withdraws/:name', async (req, res) => {
  console.log('/api/total-withdraws/:name is accessed')
  try {
    const totalWithdraws = await Transaction.aggregate([
      {
        $match: {
          name: req.params.name,
        },
      },
      {
        $group: {
          _id: null,
          totalWithdraws: { $sum: '$withdraw' },
        },
      },
    ]);

    res.json({ sum: totalWithdraws[0]?.totalWithdraws || 0 });
  } catch (error) {
    console.error('Error calculating total deposits:', error);
    res.status(500).json({ error: 'Failed to calculate total deposits' });
  }
});
//





//
// Server-side code (Node.js/Express)

// Route to fetch deposits by name
app.get('/api/deposits/:name', async (req, res) => {
  try {
    const name = req.params.name;
    calculating 
    const deposits = await Transaction.find({ name }); // Assuming 'Deposit' is your Mongoose model

    res.json(deposits);
  } catch (error) {
    console.error('Error fetching deposits:', error);
    res.status(500).json({ error: 'Failed to fetch deposits' });
  }
});

// balance
//const Deposit = require('./models/deposit'); 
// Calculate and send the balance for a specific name

app.get('/api/balance/:name', async (req, res) => {
  try {
    const name = req.params.name;
    //const Deposits = req.params.deposit;

    console.log(`Calculating balance for name: ${name}`);
    // Calculate total deposits for the name
    const deposits = await Transaction.aggregate([
      {
        $match: { name: name },
      },
      {
        $group: {
          _id: null,
          totalDeposits: { $sum: '$deposit' },
        },
      },
    ]);

    // Calculate total withdrawals for the name
    const withdrawals = await Transaction.aggregate([
      {
        $match: { name: name },
      },
      {
        $group: {
          _id: null,
          totalWithdrawals: { $sum: '$withdraw' },
        },
      },
    ]);

    // Calculate the balance by subtracting withdrawals from deposits
    const balance = (deposits[0]?.totalDeposits || 0) - (withdrawals[0]?.totalWithdrawals || 0);

    res.json({ balance });
  } catch (error) {
    console.error('Error calculating balance:', error);
    res.status(500).json({ error: 'Failed to calculate balance' });
  }
});




//





// ... Other routes and server logic ...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
