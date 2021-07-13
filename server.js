// Config Express
//MONGO_URI='mongodb://localhost:27017/merndb'
const express = require('express');

const app = express();
//environement de variables
require('dotenv').config();
const connectDB=require("./config/ConnectDB")

app.use(express.json());
app.listen(process.env.PORT, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost/%s', 
        process.env.PORT);
  });
connectDB();


app.use(express.json())
app.use("/api/contact", require("./routes/contact"))

