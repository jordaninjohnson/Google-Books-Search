import React from "react";
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar'
import BooksContainer from "../containers/booksContainer";

export default function Homepage() {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section>
                <Header />
            </section>
            <section>
                <BooksContainer />
            </section>
        </div>
    );
}