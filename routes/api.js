const router = require("express").Router();
const Book = require("../bookModel");

router.get("/", (req, res) => {
    Book.find()
        .then(dbBook => {
            res.json(dbBook);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.route('/add').post((req, res) => {
    console.log(req.body);
    const title = req.body.publisher
    const authors = req.body.subtitle
    const description =req.body.description
    const image = req.body.id
    const newBook = new Book ({
        title,
        authors,
        description,
        image
    });

    newBook.save()
        .then(() => res.json(newBook))
        .catch(err => {
            console.log(err);
            res.status(400).send("Bad")
            // res.status(400).json('Error: ' + err)
        }
            )
    // Book.create(body)
    //     .then(() => {
    //         res.json('user Added');
    //     })
    //     .catch(err => {
    //         res.status(400).json(err);
    //     });
});

module.exports = router;
