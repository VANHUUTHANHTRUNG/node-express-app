const express = require("express");
const app = express();

const people = require('./routes/people')
const auth = require('./routes/auth')
const port = process.env.PORT || 5000

// Static assets
app.use(express.static("./methods-public"));
// Parse form data
app.use(express.urlencoded({ extended: false }));
// Parse json
app.use(express.json());

app.use('/api/people',people)

app.use('/login',auth)

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
