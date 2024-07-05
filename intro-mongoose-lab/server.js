require('dotenv').config();
const mongoose = require('mongoose');
const prompt = require('prompt-sync')();
const Customer = require('./models/task.js');


// const startConnection = async () => {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Connected to MongoDB');
// };

// startConnection();


// const createCustomer = async () => {
//     const name = prompt('Enter customer name: ');
//     const phoneNumber = prompt('Enter customer phone number: ');

//     const customer = new Customer({name, phoneNumber});
//     await customer.save();
//     console.log('Customer created:', customer);
// }

// const viewAllCustomers = async () => {
//     const customers = await Customer.find();
//     console.log('Custromers: ');
//     customers.forEach(customer => console.log(customer));
// };

// const updateCustomer = async () => {
//     const id = prompt('Enter customer ID to update: ');
//     const customer = await Customer.findById(id);
  
//     if (!customer) {
//       console.log('Customer not found');
//       return;
//     }

//     const name = prompt(`Enter new name (${customer.name}): `) || customer.name;
//     const phone = prompt(`Enter new phone (${customer.phone}): `) || customer.phone;
  
//     customer.name = name;
//     customer.phone = phone;
//     await customer.save();
//     console.log('Customer updated:', customer);
//   };

// const deleteCustomer = async () => {
//     const id = prompt('Enter customer ID to delete: ');
//     const result = await Customer.deleteOne({ _id: id });
  
//     if (result.deletedCount === 0) {
//       console.log('Customer not found');
//     } else {
//       console.log('Customer deleted');
//     }
//   }
  

// const mainMenu = async () => { 
//     console.log('menu active');

//     while (true) {
//         console.log(`
//         What would you like to do? 
//         1. Create a customer
//         2. View all customers
//         3. Update a customer
//         4. Delete a customer
//         5. Quit`);

//         const action = parseInt(prompt('Number of action to run: '), 10);

//         switch (action) {
//             case 1:
//               await createCustomer();
//               break;
//             case 2:
//               await viewAllCustomers();
//               break;
//             case 3:
//               await updateCustomer();
//               break;
//             case 4:
//               await deleteCustomer();
//               break;
//             case 5:
//               console.log('Goodbye!');
//               closeConnection(); // Gracefully close the MongoDB connection and exit
//               return;
//             default:
//               console.log('Invalid option, please try again.');
//           }
//         }
//       }
      
//       // Capture Ctrl + C event and close the connection gracefully
//       process.on('SIGINT', () => {
//         console.log('\nGracefully shutting down...');
//         closeConnection();
//       });
      
//       // Start the main menu
//       mainMenu();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Function to create a new customer
async function createCustomer() {
  const name = prompt('Enter customer name: ');
  const email = prompt('Enter customer email: ');
  const phone = prompt('Enter customer phone: ');

  const customer = new Customer({ name, email, phone });
  await customer.save();
  console.log('Customer created:', customer);
}

// Function to view all customers
async function viewAllCustomers() {
  const customers = await Customer.find();
  console.log('Customers:');
  customers.forEach(customer => console.log(customer));
}

// Function to update an existing customer
async function updateCustomer() {
  const id = prompt('Enter customer ID to update: ');
  const customer = await Customer.findById(id);

  if (!customer) {
    console.log('Customer not found');
    return;
  }

  // Update only the fields provided by the user, keep others unchanged
  const name = prompt(`Enter new name (${customer.name}): `) || customer.name;
  const email = prompt(`Enter new email (${customer.email}): `) || customer.email;
  const phone = prompt(`Enter new phone (${customer.phone}): `) || customer.phone;

  customer.name = name;
  customer.email = email;
  customer.phone = phone;
  await customer.save();
  console.log('Customer updated:', customer);
}

// Function to delete a customer
async function deleteCustomer() {
  const id = prompt('Enter customer ID to delete: ');
  const result = await Customer.deleteOne({ _id: id });

  if (result.deletedCount === 0) {
    console.log('Customer not found');
  } else {
    console.log('Customer deleted');
  }
}

// Function to close the MongoDB connection
function closeConnection() {
  mongoose.disconnect()
    .then(() => {
      console.log('Disconnected from MongoDB');
      process.exit(0);
    })
    .catch(err => {
      console.error('Error while disconnecting from MongoDB', err);
      process.exit(1);
    });
}

// Main menu function to display options and handle user input
async function mainMenu() {
  console.log('Welcome to the CRM');
  
  while (true) {
    console.log(`
    What would you like to do?
    1. Create a customer
    2. View all customers
    3. Update a customer
    4. Delete a customer
    5. Quit
    `);

    const action = parseInt(prompt('Number of action to run: '), 10);

    // Execute the corresponding function based on user input
    switch (action) {
      case 1:
        await createCustomer();
        break;
      case 2:
        await viewAllCustomers();
        break;
      case 3:
        await updateCustomer();
        break;
      case 4:
        await deleteCustomer();
        break;
      case 5:
        console.log('Goodbye!');
        closeConnection(); // Gracefully close the MongoDB connection and exit
        return;
      default:
        console.log('Invalid option, please try again.');
    }
  }
}

// Capture Ctrl + C event and close the connection gracefully
process.on('SIGINT', () => {
  console.log('\nGracefully shutting down...');
  closeConnection();
});

// Start the main menu
mainMenu();