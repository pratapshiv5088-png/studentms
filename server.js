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

        res.json(students);

    } catch (error) {

        console.log("ERROR:", error);
        res.status(500).json({ error: error.message });

    }
});

app.post("/students", async (req, res) => {

    try {

        const student = new Student(req.body);

        await student.save();

        res.json(student);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }
});

app.delete("/students/:id", async (req, res) => {

    try {

        console.log("DELETE ID:", req.params.id);

        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student deleted successfully" });

    } catch (error) {

        console.log("DELETE ERROR:", error);

        res.status(500).json({ error: error.message });

    }

});

const PORT = process.env.PORT || 5001;

// IMPORTANT FIX: start server ONLY after DB connects
mongoose.connect(
    "mongodb+srv://shiviii:shiv1234@cluster0.brhj0if.mongodb.net/studentDB?retryWrites=true&w=majority"
)
.then(() => {

    console.log("Database connected");

    app.listen(PORT, () => {
        console.log("Server running on port", PORT);
    });

})
.catch(err => console.log("DB ERROR:", err));