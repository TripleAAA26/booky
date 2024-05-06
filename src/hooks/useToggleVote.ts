import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toggleVote } from '../services/booksApi.ts'
import { Book } from '../../types.ts'

export default function useToggleVote() {
    const queryClient = useQueryClient()

    const { mutate: voteToggle } = useMutation({
        mutationFn: (book: Book) => toggleVote({ book }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] })
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return { voteToggle }
}