const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Contact = require('./models/Contact');
const Category = require('./models/Category');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/deviartfactory', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React.js app's URL
}));
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/deviartfactory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("connected to db successfully.....")).catch((err) => console.log(err));



app.use(bodyParser.json());
// Enable CORS for all routes
// app.use(cors());

// Dummy user data (replace with your actual data source)
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // Add more user data as needed
];

// Define a route to get user data
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Replace these with your actual username and password
const correctUsername = 'saranya';
const correctPassword = 'flowingriver';

// Authentication endpoint
app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided username and password match the correct credentials
  if (username === correctUsername && password === correctPassword) {
    // If they match, send a 200 OK response
    res.status(200).json({ status: 200, message: 'Authentication successful' });
  } else {
    // If they don't match, send a 401 Unauthorized response
    res.status(401).json({ status: 401, message: 'Authentication failed' });
  }
});


// Define a route to get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Error fetching contacts' });
  }
});

app.get('/api/category', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Define a route to add a new category
app.post('/api/categories', async (req, res) => {
  try {
    const { category,active } = req.body;

    // Create a new category
    const newCategory = new Category({ category,active });

    // Save the category to the database
    await newCategory.save();

    res.status(200).json(newCategory);
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Define the API route to toggle the "noted" field
app.put('/api/toggle-noted/:contactId', async (req, res) => {
  try {
    const contactId = req.params.contactId;

 
    // Find the contact by ID
    const contact = await Contact.findOne({ _id: contactId });

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Toggle the "noted" field
    const updatedNoted = !contact.noted;

    // Update the contact in the database
    await Contact.updateOne({ _id: contactId }, { $set: { noted: updatedNoted } });

    res.status(200).json({ message: 'Noted field toggled successfully' });
  } catch (error) {
    console.error('Error toggling noted field:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// API endpoint for handling form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, mobile, email, interest, message } = req.body;

    // Create a new contact entry
    const contact = new Contact({ name, mobile, email, interest, message });

    // Save the contact form data to the database
    await contact.save();

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
