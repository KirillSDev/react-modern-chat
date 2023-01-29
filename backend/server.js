import express from 'express';
import path from 'path';
const DEFAULT_PORT = 3000;
import ChatRoute from './Routes/ChatRoute.js';
import mongoose from 'mongoose';

const app = express();
const PORT = DEFAULT_PORT;

// app.use(express.static(path.join(__dirname + '../build/')));

app.use('/chat', ChatRoute);
const CONNECTION = process.env.MONGODB_CONNECTION;
mongoose
	.connect(CONNECTION)
	.then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));
