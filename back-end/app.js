import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';



const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const logFile = join(__dirname, '../front');


app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
