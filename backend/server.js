console.log("SERVER FILE LOADED");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://shiviii:shiv1234@cluster0.brhj0if.mongodb.net/studentDB?retryWrites=true&w=majority")
.then(() => console.log("Database connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend working");
});

app.get("/students", async (req, res) => {
    console.log("Students route hit");
    const students = await Student.find();
    res.json(students);
});

app.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
});

app.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send("Deleted");
});

app.listen(5001, () => {
    console.log("Server running on port 5001");
});

