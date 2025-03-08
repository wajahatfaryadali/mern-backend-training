import { configDotenv } from "dotenv";
import configDB from "./db/index.js";

configDotenv();

configDB();



// below is method one to connect to db and start app
// =>>>> above method is better where we are connecting db in seprate file


// import mongoose from 'mongoose';
// import express from "express"
// import { configDotenv } from 'dotenv';


// const app = express();
// configDotenv();



// // ; (async () => {
// //     try {
// //         await mongoose.connect(`${process.env.MONGO_DB_URI}`).then(() => {
// //             console.log("********** mongodb connection is working **********")
// //         })
// //         app.on('error', (error) => {
// //             console.log('Error: ', error)
// //             throw error;
// //         })

// //         app.listen(process.env.PORT, () => {
// //             console.log('********** app is listening : on port :', process.env.PORT, " **********")
// //         })

// //     } catch (error) {
// //         console.log('Error: ', error);
// //         throw error
// //     }
// // })()