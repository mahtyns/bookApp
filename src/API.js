import { useQuery} from 'react-query'

export const API_BOOKS_URL = "https://example-data.draftbit.com/books?_limit=30"

export const BOOKS_API = () => {

    const { isLoading, error, data } = useQuery('books', async () =>
        await fetch(API_BOOKS_URL).then(res =>
            res.json()
        )
    )

    if (isLoading) console.log('Loading')
    if (error) console.log(error.message)

    return data
}

