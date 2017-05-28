const path = require("path");
const express = require("express");

let app = express();

let public_folder = path.join(__dirname, "../", "public");
app.use(express.static(public_folder));

app.listen(3000, () => {
    console.log("listening on port 3000");
})