import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from '../../store/bookStore';

const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.collection)
    const booksAreLoading = useSelector(state => state.books.isLoading)
    const [currentFilter, setCurrentFilter] = useState('');

    //Une fois que mon app est init, je peux aller récupérer la liste de tous les livres
    //Quand ?
    //Quand le composant (App) se render la première fois et uniquement la première fois pour ne pas faire plusieurs call d'API
    useEffect(() => {
        dispatch(getBooks());
    }, [])

    if (booksAreLoading) return <span className="f1 font-bold text-green">Fetching books...</span>

    const handleFilter = (event) => {
        dispatch(getBooks(event.target.value));
        setCurrentFilter(event.target.value);
    }

    return (
        <section>

            <header>
                <select value={currentFilter} onChange={handleFilter}>
                    <option value={''}>Tous</option>
                    <option value={'?_sort=Name:ASC'}>Titre alphabetique</option>
                    <option value={'?_sort=created_at:ASC'}>Date de création</option>
                    <option value={'?borrowed=false'} >Livre(s) disponible(s)</option>
                </select>
            </header>

            <ul className="flex flex-col">
                {
                    books && books.length > 0 ? books.map(book => {

                        const date = new Date(book.created_at);

                        return (
                            <li className="" key={book.id}>
                                <div className="p-4">
                                    <span className="font-bold uppercases f4">{book.Name}</span>
                                    <p className="lh-4">{book.Resume}</p>
                                    <span className="text-blue font-bold">{`Date d'ajout : ${date.toLocaleDateString('fr-FR')}`}</span>
                                </div>
                                <hr className="m-0" />
                            </li>
                        )
                    }) : <span>No books</span>
                }
            </ul>
        </section>
    )
}

export default BookList
