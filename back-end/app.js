import express from 'express';
import cors from 'cors';
import connectToDB from './db/index.js';


const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.status(200).send({ success: true });
})

app.get('/motors', (req, res) => {
    console.log('motor');
    res.status(200).send(motor);
})

Promise.all([connectToDB()])
    .then(() =>
        app.listen(3000, () =>
            console.log("Server is running on port 3000"))
    )
    .catch((error) => {
        console.log(`MongoDB connection error: ${error}`);
    });

const motor =
    [
        {
            "id": "1",
            "name": "BMW",
            "model": "X5",
            "year": 2019,
            "price": 800000,
            "imageSrc": "https://c.pxhere.com/photos/89/03/motorcycles_race_helmets_pilots_competition_sport_extreme_speed-533986.jpg!d",
            "imageAlt": "Alt image",
            "description": "this is a description of the motors",
            "star": 4
        },
        {
            "id": "2",
            "name": "Mercedes",
            "model": "X5",
            "year": 2019,
            "price": 800000,
            "imageSrc": "https://c.pxhere.com/photos/89/03/motorcycles_race_helmets_pilots_competition_sport_extreme_speed-533986.jpg!d",
            "imageAlt": "Alt image",
            "description": "this is a description of the motors",
            "star": 4
        },
        {
            "id": "3",
            "name": "Audi",
            "model": "X5",
            "year": 2019,
            "price": 800000,
            "imageSrc": "https://c.pxhere.com/photos/89/03/motorcycles_race_helmets_pilots_competition_sport_extreme_speed-533986.jpg!d",
            "imageAlt": "Alt image",
            "description": "this is a description of the motors",
            "star": 4
        }
    ]