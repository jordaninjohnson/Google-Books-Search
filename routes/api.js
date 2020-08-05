const router = require("express").Router();
const Book = require("../bookModel");

router.get("/add", (req, res) => {
    Book.find({})
        .then(dbBook => {
            // console.log(dbBook);
            res.json(dbBook);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.route('/add').post((req, res) => {
    // console.log(req.body);
    const id = req.body._id
    const title = req.body.volumeInfo.title
    const authors = req.body.volumeInfo.authors[0]
    const description = req.body.volumeInfo.description
    const image = req.body.volumeInfo.imageLinks.thumbnail
    const link = req.body.volumeInfo.infoLink
    const newBook = new Book({
        id,
        title,
        authors,
        description,
        image,
        link
    });

    newBook.save()
        .then(() => res.json(newBook))
        .catch(err => {
            console.log(err);
            res.status(400).send("Bad")
            // res.status(400).json('Error: ' + err)
        }
        )
});

module.exports = router;
