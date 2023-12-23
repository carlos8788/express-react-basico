import express from "express";
import cors from "cors";


const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    return res.json({ hola: 'api express' })
})



app.listen(3000, () => console.log('PORT 3000'))