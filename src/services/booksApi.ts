import { Book } from '../../types.ts'

const BASE_URL = 'http://localhost:8000'


export async function getBooks() {
    const res = await fetch(`${BASE_URL}/books`, {
        headers : { 'Content-Type': 'application/json' },
        method: 'GET',
    })
    const data = await res.json()

    return data
}


export async function toggleVote({ book }: { book: Book }) {
    const res = await fetch(`${BASE_URL}/books/${book.id}`, {
        headers : { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(book)
    })

    const data = await res.json()

    return data
}



