import express from 'express';
import cors from 'cors';
import connectToDB from './db/index.js';
import 'dotenv/config'
import mongoose from 'mongoose';


const app = express();
app.use(express.json());

const cartsSchema = new mongoose.Schema({
    id: String,
    imageAlt: String,
    imageSrc: String,
    name: String,
    price: Number,
    model: String,
    autocartId: Number,
    quantity: Number
});
const Carts = mongoose.model('carts', cartsSchema);

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

app.get('/carts', async (req, res) => {
    try {
        console.log('cart');
        const carts = await Carts.find({}).exec();
        console.log(carts.name);
        res.send(carts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/carts', async (req, res) => {
    try {
        const carts = new Carts({
            id: req.body.id,
            imageAlt: req.body.imageAlt,
            imageSrc: req.body.imageSrc,
            name: req.body.name,
            price: req.body.price,
            model: req.body.model,
            autocartId: req.body.autocartId,
            quantity: req.body.quantity
        });
        await carts.save();
        res.send(carts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.put('/carts/:cartId', async (req, res) => {
    try {
        const cardId = req.params.cartId; // Ensure this matches the custom id field in your schema
        const updateResult = await Carts.updateOne(
            { id: cardId }, // Use the custom 'id' field instead of '_id'
            {
                $set: {
                    imageAlt: req.body.imageAlt,
                    imageSrc: req.body.imageSrc,
                    name: req.body.name,
                    price: req.body.price,
                    model: req.body.model,
                    autocartId: req.body.autocartId,
                    quantity: req.body.quantity
                }
            }
        );

        if (updateResult.matchedCount === 0) {
            return res.status(404).send('Cart item not found');
        }

        // Optionally, retrieve and send the updated document using the custom 'id' field
        const updatedCart = await Carts.findOne({ id: cardId });
        res.send(updatedCart);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
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
