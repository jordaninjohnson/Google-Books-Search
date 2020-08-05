import React from 'react';
import "./bookCard.css"


const bookCard = (props) => (
    <div className="card w-25" onClick={props.clicked}>
        <div className="card-body">
            <img src={props.image} className="card-img-top image" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Authors: {props.author}</p>
                <p className="card-text">Description: {props.description}</p>
            </div>
        </div>
    </div>
);

export default bookCard;