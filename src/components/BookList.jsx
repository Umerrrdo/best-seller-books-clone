import React, { Component } from 'react'
import Book from './Book'
import '../css/booklist.css'

export default function BookList() {
    return (
        <>
            <Book
                image="https://images-na.ssl-images-amazon.com/images/I/713UttE-zRL._AC_UL600_SR600,400_.jpg"
                alt="Enough"
                name="Enough"
                author="Cassidy Hutchison"
            />
        </>
    )
}