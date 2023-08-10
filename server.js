const express = require('express');
const dotenv = require('dotenv').config(); 
const app = express();
const {connectDb}=require('./config/dbConnection')
const port = process.env.PORT || 3000;

connectDb();
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
