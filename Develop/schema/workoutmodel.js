const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [
        {
            type: {
                type: String,
                required: "Please enter a type"
            },
            name: {
                type: String,
                required: "Please enter a name"
            },
            duration: {
                type: Number,
                required: "Please enter a number"
            },
            weight: {
                type: String,
                required: "Please enter a number"
            },
            reps: {
                type: String,
                required: "Please enter a number"
            },
            sets: {
                type: String,
                required: "Please enter a number"
            },
            distance: {
                type: String,
            },

        }
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout; 