import express from 'express';
import cors from 'cors';
import connectToDB from './db/index.js';
import 'dotenv/config'
import mongoose from 'mongoose';


const app = express();
app.use(express.json());

const motorsSchema = new mongoose.Schema({
    id: String,
    name: String,
    model: String,
    year: Number,
    price: Number,
    imageSrc: String,
    imageAlt: String,
    description: String,
    star: Number
});
const Motors = mongoose.model('motors', motorsSchema);


const accessoriesSchema = new mongoose.Schema({
    id: String,
    name: String,
    model: String,
    year: Number,
    price: Number,
    imageSrc: String,
    imageAlt: String,
    description: String,
    star: Number
});

const Accessories = mongoose.model('accessories', accessoriesSchema);


app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.status(200).send({ success: true });
})

app.get('/motors', async (req, res) => {
    try {
        console.log('motor');
        const motors = await Motors.find({}).exec();
        res.send(motors);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/accessories', async (req, res) => {
    try {
        console.log('accessories');
        const accessories = await Accessories.find({}).exec();
        res.send(accessories);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


Promise.all([connectToDB()])
    .then(() =>
        app.listen(3000, () =>
            console.log("Server is running on port 3000"))
    )
    .catch((error) => {
        console.log(`MongoDB connection error: ${error}`);
    });
