import axios from "axios";

export default {
    // Gets all books
    getBooks: function (title) {
        const apiKey = 'AIzaSyB1vwpN0ZKfRGzlF6D13QwhqUsF3WiK2Lw';
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + title + '&key=' + apiKey, 
        {
            params: {
                _limit: 10
            }
        })
    },
    // Gets the Saved Books
    getSavedBooks: function () {
        return axios.get("/api/add");
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
