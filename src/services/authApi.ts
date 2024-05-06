import { User } from '../../types.ts'

const BASE_URL = 'http://localhost:8000'

export async function getUsers() {
    const res = await fetch(`${BASE_URL}/users`, {
        headers : { 'Content-Type': 'application/json' },
        method: 'GET',
    })
    const data = await res.json()

    return data
}



export async function userRegistration({ user }: { user: User }) {
    const res = await fetch(`${BASE_URL}/users`, {
        headers : { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(user)
    })
    const data = await res.json()

    return data
}

export async function addFavoritesAndCart({ user }: { user: User }) {
    const res = await fetch(`${BASE_URL}/users/${user.id}`, {
        headers : { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(user)
    })

    const data = await res.json()

    return data
}
