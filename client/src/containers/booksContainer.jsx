import React, { Component } from 'react';
import axios from 'axios';

import BookCard from '../components/bookCard/bookCard'

class BooksContainer extends Component {
    state = {
        books: [],
        selectedBook: {}
    }

    componentDidMount() {
        const apiKey = 'AIzaSyB1vwpN0ZKfRGzlF6D13QwhqUsF3WiK2Lw';
        axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=' + apiKey)
            .then(response => {
                console.log(response);
                this.setState({
                    books: response.data.items
                })
            });
    }

    bookSelectedHandler = (book) => {
        console.log(book);
        this.setState({ selectedBook: book });

        let bookObj = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }

        axios.post('/api/add', bookObj)
            .then(res => console.log(res.data));
    }

    render() {
        const books = this.state.books.map(book => {
            return <BookCard
                key={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
                clicked={() => this.bookSelectedHandler(book)} />;
        });

        return (
            <div>
                <section className="Books row justify-content-center">
                    {books}
                </section>
            </div>
        );
    }
}

export default BooksContainer;