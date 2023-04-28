import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dashRoutes from './routes/dashboard.js';

const app = express();
app.use(cors());

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
<<<<<<< Updated upstream
=======
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

>>>>>>> Stashed changes
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/dashboard', dashRoutes);

const CONNECTION_URL = "mongodb+srv://huadmin:liberalcore@cluster0.fmycgav.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

//replace with env variables before deploying
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

