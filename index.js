import express from 'express';
import bodyParser from 'body-parser';
import alumniRoutes from './routes/alumni.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/alumni', alumniRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage'));

app.listen(PORT, () => {console.log(`Server running on port: http//localhost:${PORT}`)})