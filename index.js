const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv').config();
const port = process.env.PORT;

const route = require("./route");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(route);

app.listen(port, () => console.log(`Server is now running, open http://localhost:${port}`));