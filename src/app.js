const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/router')

app.use(cors());
app.use(express.json())
app.listen(3000, () => {
    try {
        console.log("Server is running on port 9000")
    } catch (e) {
        console.log(e.message)
    }
})

routes(app)

module.exports = app;
