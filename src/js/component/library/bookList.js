import React from 'react';
import fetch from 'isomorphic-fetch';

class BookList extends React.Component{

    constructor(){
        super()
        this.state={
            books: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:1337/books').then((response)=>{
            if(response.status >= 400){
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((books)=> {
            // on rajoute les books fetchés  au state books 
            this.setState({ books : books});
            console.log(books);
        })
    };
    
    render(){
        return(
            <section>
                <ul>

                
                {
                   this.state.books.map(({id, title, description, author, types})=>{
                       console.log(title);
                   <h1>{title}</h1>
                   })
                }
                </ul>
            </section>
        )
    }
}

export default BookList;