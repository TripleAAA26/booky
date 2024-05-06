import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../services/booksApi.ts'


export function useGetBooks() {
    const { data: Books, isLoading } = useQuery({
        queryKey: ['books'],
        queryFn: () => getBooks(),
    })

    return { Books, isLoading }
}