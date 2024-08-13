import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { connect } from "mongoose";
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

// middleware for parsing request body
app.use(express.json());

//middleware for handling CORS POLICY
//opt1: allow all origins with default of cors(*)
app.use(cors());
//opt2: allow custom origins
//app.use(
  //  cors({
    //    origin: 'http://localhost:3000',
      //  methods: ['GET','POST','PUT','DELETE'],
        //allowedHeaders: ['Content-Type'],
    //})
//);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('MERN stack tutorial.')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connnet to database.');
        app.listen(PORT, () => {
            console.log(`App listening the port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });