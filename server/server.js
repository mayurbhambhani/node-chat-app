//const config = require("./config/config.js")

const path = require("path");
const express = require("express");

let app = express();

let public_folder = path.join(__dirname, "../", "public");
app.use(express.static(public_folder));

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})