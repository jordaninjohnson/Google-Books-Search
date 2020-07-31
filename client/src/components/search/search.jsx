import React, { Component } from 'react'

class Search extends Component {
    state = {
        title: null
    }
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="bookSearch">Book Search</label>
                        <input type="title" className="form-control" id="titleSearch" aria-describedby="title" />
                        <small id="titleHelp" className="form-text text-muted">Enter a book title.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Search;