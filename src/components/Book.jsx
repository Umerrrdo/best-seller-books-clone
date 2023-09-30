import React, { Component } from 'react'
import '../css/booklist.css'

export default function Book(props) {
    return (
        <section id='book'>
            <img id='book-img' src={props.image} alt={props.alt} />
            <div id="book-info">
                <a id='book-name' href='#'>{props.name}  </a>
                <p id='author'>{props.author}</p>
                <a className="a-link-normal" title="4.6 out of 5 stars" href="#">
                    <i className="a-icon a-icon-star-small a-star-small-4-5 aok-align-top">
                        <span className="a-icon-alt"></span>
                    </i>
                    <span id="rating-text">{props.rating}</span></a>
                <p id="book-type">{props.type}</p>
                <p id="price">${props.price}</p>
            </div>
        </section>
    )
}