 import app from "./app.js";
 import mongoose from 'mongoose';
 
 const port=3000;
 //const app= express();
 
 // database connection-mongodb
 //database connection may fail
 //database is in another continent
 
 //mongoose.connect('')
 (async ()=> {

   try{
      //db connection
      await mongoose.connect('dbstring')
      console.log("DB connected sucessfully");
     
      //ye express ki error k liye h
      app.on("error",(err)=> {
         console.log("Error:",err);
         throw err;
      })
      
      const onListening=()=>{
         console.log(`Listening on port : ${port}`);
      }
      app.listen(port,onListening);

   }

   
   //ye database ki error catch krra h
   catch(error){
      console.error("Error: ",err)
      throw err
   }

 })()
 