import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectName: {type: String, required: true},
    attendance: {
        date: {type: Date},
        state: {type: Boolean}
    }
})

const userAttendanceSchema = new mongoose.Schema({
    u_id: {type: String, required: true},
    subjects: [subjectSchema]
})

export const attendanceSchema = mongoose.model("attendance", userAttendanceSchema);