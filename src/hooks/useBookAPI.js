import { useState, useEffect } from "react";

const useBookApi = (bookApiURL) => {

    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        fetch(bookApiURL)
        .then(res => res.json())
        .then(resData => setBookData(resData));
        }, [bookApiURL]
    )

    return bookData

}

export default useBookApi