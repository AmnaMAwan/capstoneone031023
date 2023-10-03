const apiUrl = 'http://localhost:5050/api/add-deposit'; // Replace with your actual server URL

// Data for the new deposit record
const depositData = {
  name: 'Jamal ', // Replace with the desired nameNasir
  deposit: 1500,     // Replace with the desired deposit amount
};

// Send a POST request to add the deposit record
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(depositData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('New deposit record added:', data);
  })
  .catch((error) => {
    console.error('Error adding deposit record:', error);
  });
