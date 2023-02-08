import { useQuery} from 'react-query'

const API_BOOKS_URL = "https://example-data.draftbit.com/books?_limit=20"

const BOOKS_API = () => {

    const { isLoading, error, data } = useQuery('books', () =>
        fetch(API_BOOKS_URL).then(res =>
            res.json()
        )
    )

    if (isLoading) console.log('Loading')
    if (error) console.log(error.message)

    return data
}

export default BOOKS_API