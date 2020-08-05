import React, { Component } from 'react';
import axios from 'axios';
import BookCard from '../components/bookCard/bookCard'
import API from "../utils/API";
import Search from "../components/search/search"



class BooksContainer extends Component {
    state = {
        books: [],
        selectedBook: {},
        searchedTitle: "",
        arrayLength: null
    }

    componentDidUpdate() {
        if (this.state.arrayLength < 10) {
            API.getBooks(this.state.searchedTitle)
                .then(response => {
                    // console.log(response);
                    this.setState({
                        books: response.data.items,
                        arrayLength: response.data.items.length
                    })
                });
        }
    }


    bookSelectedHandler = (book) => {
        console.log(book);
        this.setState({ selectedBook: book });

        // let bookObj = {
        //     title: book.volumeInfo.title,
        //     authors: book.volumeInfo.authors,
        //     description: book.volumeInfo.description,
        //     image: book.volumeInfo.imageLinks.thumbnail
        // }

        axios.post('/api/add', book)
            .then(res => console.log(res.data));
    }

    handleInputChange = event => {
        this.setState({ searchedTitle: event.target.value });
        console.log(this.state);
    };

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
                <section>
                    <Search handleInputChange={this.handleInputChange} />
                </section>
                <section className="Books row justify-content-center">
                    {books}
                </section>
            </div>
        );
    }
}

export default BooksContainer;