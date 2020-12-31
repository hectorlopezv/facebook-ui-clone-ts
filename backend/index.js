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

//db schema
import Posts from './Post';


//Grid stuff
Grid.mongo =  mongoose.mongo;


//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(bodyParser.json());//read write json files
app.use(cors({origin: true}));

//db config stuff
const mongoURI = 'mongodb+srv://hector:lamierda2@cluster0.gzybf.mongodb.net/fbdb?retryWrites=true&w=majority';

const conn = mongoose.createConnection(mongoURI, {//for image uploading adn then drop connection after uploading
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connect(mongoURI, {//generic collection
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('db generic connected');
});

let gfs = null;
conn.once('open', () => {
    console.log('DB images connected');
    //setup for image uploadng and saving
    gfs = Grid(conn.db, mongoose.mongo);///creating connection
    //where we save the images(the collection)
    gfs.collection('images');
});

const storage = new GridFsStorage({//making storage of images posible
    url: mongoURI,
    file: (req, file)=>{
        return new Promise((resolve, reject) => {
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`;///hector.jpg
            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            };

            resolve(fileInfo);
        })
    }

});


const upload = multer({storage});//upload images and files


// api routes
app.get("/", function(req, res) {
    res.send("Hello Node.js");
});


//post for posts message
app.post('/upload/post', (req, res)=> {
    const dbPost = req.body;

    Posts.create(dbPost, (err, data) => {//create doc for collections POSTS
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});
app.get();




//post image save to mongo db
app.post('/upload/image', upload.single('file'), (req, res) => {res.status(201).json({file:req.file})});

//get image
app.get('/image/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }
  
      // Check if image
      if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      } else {
        res.status(404).json({
          err: 'Not an image'
        });
      }
    });
  });
//get image from mongodb 
//listener -- cloud function
app.listen(port, () => console.log(`listengin on localhost:${port}`));
