import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ contents }) => {
  const [userLibrary, setUserLibrary] = useState([]);

  const addBookToLibrary = (bookAdded) => {
      setUserLibrary([...userLibrary, bookAdded])
      console.log(userLibrary)
  }

  return (
    <BookContext.Provider value={{userLibrary, addBookToLibrary}} >
        {contents}
    </BookContext.Provider>
  )

}
