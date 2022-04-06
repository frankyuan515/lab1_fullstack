const mongoose = require("mongoose")

const schema = mongoose.Schema({
    fullName: {
        type: String,
        unique: true
    },
    mailAddress: {
        type: String,
        unique: true
    },

    phoneNumber: {
        type: String,
        unique: true
    },
})

module.exports = mongoose.model("Post", schema)