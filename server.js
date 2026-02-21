console.log("SERVER STARTING...");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Student = require("./models/Student");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("ROOT ROUTE HIT");
    res.send("Backend working");
});

app.get("/students", async (req, res) => {
    console.log("STUDENTS ROUTE HIT");

    try {
        const students = await Student.find();
        console.log("Students:", students);

        res.json(students);

    } catch (error) {

        console.log("ERROR:", error);
        res.status(500).json({ error: error.message });

    }
});

app.post("/students", async (req, res) => {

    console.log("POST DATA:", req.body);

    try {

        const student = new Student(req.body);

        await student.save();

        res.json(student);

    } catch (error) {

        console.log(error);
        res.status(500).json({ error: error.message });

    }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});

mongoose.connect("mongodb+srv://shiviii:shiv1234@cluster0.brhj0if.mongodb.net/studentDB")
.then(() => console.log("Database connected"))
.catch(err => console.log("DB ERROR:", err));
