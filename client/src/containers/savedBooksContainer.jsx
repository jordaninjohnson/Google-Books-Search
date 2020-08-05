import React, { Component } from 'react'
import SavedBookCard from '../components/bookCard/savedBookCard'
import API from '../utils/API'

class SavedBooks extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
            API.getSavedBooks()
                .then(response => {
                    // console.log(response);
                    this.setState({
                        savedBooks: response.data
                    })
                });
        }

    render() {
        // console.log(this.state.savedBooks);
        const books = this.state.savedBooks.map(book => {
            return <SavedBookCard
                key={book._id}
                title={book.title}
                author={book.authors}
                description={book.description}
                image={book.image}
                link={book.infoLink}/>;
        });
        return (
            <div>
                <section className="Books row justify-content-center">
                    {books}
                </section>
            </div>
        )
    }
}
export default SavedBooks;