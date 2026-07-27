const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let tasks = [];

app.get("/", (req, res) => {
    res.render("index", { tasks: tasks });
});

app.get("/add", (req, res) => {

    if (req.query.name != "") {

        let newTask = {
            id: Date.now(),
            name: req.query.name
        };

        tasks.push(newTask);
    }

    res.redirect("/");
});

app.get("/delete/:id", (req, res) => {

    tasks = tasks.filter((item) => {
        return item.id != req.params.id;
    });

    res.redirect("/");
});


app.listen(3000, () => {
    console.log("Server Running On Port 3000");
});