const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes") // new
const PORT = process.env.PORT || 3000;
const ejs = require('ejs')
    //const bodyParser = require('body-parser');

mongoose
    .connect("mongodb+srv://Student:abc123+@gengdatabase.qzhlp.mongodb.net/fullstack_lab1?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
        const app = express()

        app.use(express.json()) //middle ware
            //app.use(bodyParser.json());
            //app.use(bodyParser.urlencoded({ extended: true }));
        app.set('view engine', 'ejs')
        app.use(express.static('public')); //connect to index.html
        app.use("/api", routes)
        app.listen(PORT, () => {
            console.log("Server has started at PORT: " + PORT)
        })
    })