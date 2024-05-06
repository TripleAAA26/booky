import { useMutation } from '@tanstack/react-query'

import { User } from '../../types.ts'

import { addFavoritesAndCart } from '../services/authApi.ts'
import useAuth from './useAuth.ts'



export const useFavoritesAndCart = () => {
    const { login } = useAuth()

    const { mutate: addFavoriteAndCart } = useMutation({
        mutationFn: (user: User) => addFavoritesAndCart({ user }),
        onSuccess: (data) => {
            login(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return { addFavoriteAndCart }
}