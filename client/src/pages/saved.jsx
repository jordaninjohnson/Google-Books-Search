import React from "react";
import Navbar from "../components/navbar/navbar"
import Header from "../components/header/header"
import SavedBooks from "../containers/savedBooksContainer"
export default function Saved() {
    return (
        <div>
            <Navbar />
            <Header />
            <SavedBooks/>
        </div>
    );
}