import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';

//import exampleRoutes from './routes/example';



const app = express();

app.use(cors());
app.use(express.json());

//app.use('/',exampleRoutes)


export const api = functions.https.onRequest(app);

//this came directly from slide 79 in the Modern Web slides. If you think or find that it is missing something, you might start by referencing that slide.


// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
