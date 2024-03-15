const mongoose = require("mongoose");
const schema = mongoose.schema;


const userSchema = new schema({
    name: String,
    email: String,
    skills: [
        {
            type: String,

        }
    ],
})