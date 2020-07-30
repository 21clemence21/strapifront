
import fetch from 'isomorphic-fetch';
import React, { useEffect, useState } from 'react';

class BookList extends React.Component{

    constructor(){
        super()
        this.state={
            books: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:1337/books/`).then((response)=>{
            if(response.status >= 400){
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((books)=> {
            // on rajoute les books fetchés  au state books 
            this.setState({ books : books});
            
        })
    };
    
    render(){
        return(
            
            <section>
                <header>
                    <select value="CurrentFilter"> 
                        <option value={''}>Tous</option>
                        <option value={'?_sort=Name:ASC'}>Titre alphabetique</option>
                        <option value={'?_sort=created_at:ASC'}>Date de création</option>
                    </select>
                </header>
                <ul className="container">
                {                  
                   this.state.books.map((book)=>{
                       return(
                        <div key={book.id} className="container">
                            <div className="row">
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                            </div>
                        </div>
                       )     
                   })
                }
                </ul>
            </section>
        )
    }
}

export default BookList;