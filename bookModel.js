const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookModel = new Schema({
    title: {
        type: String,
        trim: true
        // required: "Username is Required"
    },

    authors: {
        type: String,
        trim: true
        // required: "Password is Required",
        // validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    description: {
        type: String,
        unique: true
        // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    image: {
        type: String,
        // default: Date.now
    }
});

const Book = mongoose.model("Book", bookModel);

module.exports = Book;
