import React from 'react'

function Search(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="bookSearch">Book Search</label>
                    <input onChange={props.handleInputChange} type="title" className="form-control" id="titleSearch" aria-describedby="title" />
                    <small id="titleHelp" className="form-text text-muted">Enter a book title.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Search;