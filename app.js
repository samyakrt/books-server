require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require("~routes/auth");
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(`/api/v1`,authRoutes)


const port = process.env.PORT || 4000;
app.listen(port,() => {
    console.log(`listening to port ${port}`)
})