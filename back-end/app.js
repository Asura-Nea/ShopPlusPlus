import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.status(200).send({ sucess: true });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
