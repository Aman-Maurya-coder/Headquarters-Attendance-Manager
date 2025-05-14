import express from "express";
import mongoose from "mongoose";
import { user } from "./models/users.js"
import { attendanceSchema } from "./models/attendance.js";
const app = express();
const port = 3000;

let db = await mongoose.connect("mongodb://localhost:27017/Headquarters-Attendance-Manager-DB")

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/login",async (req, res) => {
    let user_in_db = await user.findOne({})
    res.json({"firstName": user_in_db.firstName,
        lastName: user_in_db.lastName,
        email: user_in_db.email,
        password: user_in_db.password
    });
});

// app.post("/signup", (req, res) => {
app.get("/signup", (req, res) => {
    const userData = new user({
        u_id: "abc123",
        firstName: "Aman",
        lastName: "Maurya",
        email: "amankashipur1234@gmail.com",
        password: "computer"
    });
    userData.save();
    res.send("User signed in");
})

app.get("/setAttendance", (req, res) => {
    const userAttendance = new attendanceSchema({
        u_id: "abc123",
        subjects: [
            {
                subjectName: "Maths",
                attendance: {
                    date: "2025-05-15",
                    state: true
                }
            }
        ]
    })
    userAttendance.save();
    res.send("User Attendance succesfully marked");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
