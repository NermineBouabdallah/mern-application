const mongoose= require('mongoose');
require('dotenv').config();
const ConnectDB = async() => {
  //mongoose.connect('mongodb://localhost:27017/test')
   
      
       try {
         let result=await  mongoose.connect(
          process.env.MONGO_URI,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
          }); console.log("database connected")}
        
       catch(error){ res.send(error)
      }
    
    }
    module.exports = ConnectDB;