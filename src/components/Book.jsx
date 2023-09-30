import React, { Component } from 'react'
import '../css/booklist.css'

export default function Book(props) {
    return (
        <section>
            <img src={props.image} alt={props.alt} />
            <h4>{props.name}</h4>
            <p>{props.author}</p>
        </section>
    )
}