import React, { Component } from 'react'
import Book from './Book'
import '../css/booklist.css'

export default function BookList() {
    return (
        <div className='book-container'>
            <Book
                image="https://images-na.ssl-images-amazon.com/images/I/713UttE-zRL._AC_UL600_SR600,400_.jpg"
                alt="Enough"
                name="Enough"
                author="Cassidy Hutchison"
                rating={768}
                type="Hardcover"
                price={20.99}
            />
            <Book
                image="https://images-na.ssl-images-amazon.com/images/I/51BJzRX67iL._AC_UL600_SR600,400_.jpg"
                alt="The Shadow Work Journal: A Guide to Integrate and Transcend your Shadows"
                name="The Shadow Work Journal: A Guide to Integrate and Transcend your Shadows"
                author="Keila Shaheen"
                rating={755}
                type="Paperbook"
                price={18.01} />
        </div>
    )
}