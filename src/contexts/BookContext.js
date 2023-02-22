import React, { useState } from "react";

export const BookContext = React.createContext();

export const BookProvider = ({ contents }) => {
    const [usersBooks, setUsersBooks] = useState([]);

    const addBook = (bookSelected) => {
        setUsersBooks([...usersBooks, bookSelected]);
    }

    const removeBook = (bookSelected) => {
        setUsersBooks(usersBooks.filter(book => book.id !== bookSelected.id))
    }

    return (
        <BookContext.Provider value={{ usersBooks, addBook, removeBook }}> 
            {contents}            
        </BookContext.Provider>
    )
}
