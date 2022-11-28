import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
console.log(CONNECTION_STRING);

// DB connection
mongoose.connect(CONNECTION_STRING);
console.log("Post connect")

const app = express()
app.use(cors());
app.use(express.json());

// Controllers
HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4000)

console.log("Server runnin");