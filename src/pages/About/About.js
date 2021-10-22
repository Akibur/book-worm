import { Container } from '@mui/material';
import React from 'react';

export default function About() {
    return (
        <Container sx={{ msx: 'auto', textAlign: 'center', my: 20 }}>
            <h1>About Us</h1>

            <p>Book Worm  is an online bookstore with a mission to financially support local, independent bookstores.
                We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. They’re also anchors for our downtowns and communities.
                As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your books and support bookstores at the same time.
            </p>
            <p>
                By design, we give away over 75% of our profit margin to stores, publications, authors and others who make up the thriving, inspirational culture around books!
            </p>
            <p>
                We hope that Book Worm can help strengthen the fragile ecosystem and margins around bookselling and keep local bookstores an integral part of our culture and communities.

            </p>
        </Container >
    );
}
