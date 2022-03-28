require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require("~routes/auth");
const authorRoutes = require('~routes/author')
const BookRoutes = require('~routes/book');
const errorMiddleware = require('~middleware/error')
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(`/api/v1`,authRoutes)
app.use(`/api/v1/authors`,authorRoutes)
app.use(`/api/v1/books`,BookRoutes)
app.use(errorMiddleware)


const port = process.env.PORT || 4000;
app.listen(port,() => {
    console.log(`listening to port ${port}`)
})