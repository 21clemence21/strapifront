import React from 'react';
import Navbar from '../component/navbar';
import BookList from '../component/library/bookList';


const Home = () => {

    return (
        <div>
            <Navbar />
            <BookList />   
        </div>
    )
}

export default Home;