//import
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';//cors middleware
import multer from 'multer';//upload images
import GridFsStorage from 'multer-gridfs-storage';//upload imaes to and store from mongodb
import Grid from 'gridfs-stream';//streaming
import bodyParser from 'body-parser';//json middleware
import path from 'path';
import Pusher from 'pusher';//listener pattern

//Grid stuff
Grid.mongo =  mongoose.mongo;


//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(bodyParser.json());//read write json files
app.use(cors({origin: true}));

//db config stuff

// api routes
app.get("/", function(req, res) {
    res.send("Hello Node.js");
});


//listener -- cloud function
app.listen(port, () => console.log(`listengin on localhost:${port}`));
