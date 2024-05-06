import { useNavigate } from 'react-router-dom'

import { Book, User } from '../../types.ts'
import { MessageInstance } from 'antd/es/message/interface'

import { useFavoritesAndCart } from './useFavoritesAndCart.ts'
import useAuth from './useAuth.ts'


const UseFavorite = (messageApi: MessageInstance) => {
    const { addFavoriteAndCart } = useFavoritesAndCart()
    const { loggedUser, isAuthenticated } = useAuth()
    const navigate = useNavigate()


    function handleLike(book: Book) {
        if (!isAuthenticated) {
            navigate('/login')
            return
        }

        const likedBook = loggedUser?.favorite_books.find(id => id === book.id)

        let sortedBookIds
        if (likedBook) {
            sortedBookIds = loggedUser?.favorite_books.filter(id => id !== book.id)
        } else {
            sortedBookIds = [...loggedUser?.favorite_books as string[], book.id]
        }

        const newUser = {
            ...loggedUser as User,
            favorite_books: sortedBookIds as string[],
        }

        addFavoriteAndCart(newUser, {
            onSuccess: () => {
                likedBook ?
                    messageApi.error('Saylanǵanlardan óshirildi' )
                    :
                    messageApi.success('Saylanǵanlarǵa qosıldı')
            }
        })
    }

    return { handleLike }
}

export default UseFavorite