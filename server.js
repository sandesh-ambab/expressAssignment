const express = require("express");
const cors = require("cors");

const routes = require('./routes/author');
const genreRoutes = require('./routes/genre');
const bookRoutes = require('./routes/book');



const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// content-type - application/json
app.use(express.json());

// content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/', genreRoutes);
app.use('/', bookRoutes);


// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});