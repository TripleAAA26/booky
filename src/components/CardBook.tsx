import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa'

import { Book, User } from '../../types.ts'

import useAuth from '../hooks/useAuth.ts'
import { useFavoritesAndCart } from '../hooks/useFavoritesAndCart.ts'
import { message } from 'antd'
import useFavorite from '../hooks/useFavorite.ts'

interface CardBookProps {
    book: Book
}

export default function CardBook({ book }:CardBookProps) {
    const { addFavoriteAndCart } = useFavoritesAndCart()
    const { loggedUser, isAuthenticated } = useAuth()
    const navigate = useNavigate()
    const [ messageApi, contextHolder ] = message.useMessage()
    const { handleLike } = useFavorite(messageApi)

    const liked = loggedUser?.favorite_books.find(id => id === book.id)

    function handleAddToCart() {
        if (!isAuthenticated) {
            navigate('/login')
            return
        }

        const inCart = loggedUser?.cart.find(id => id === book.id)
        if (inCart) {
            return
        }

        addFavoriteAndCart({
            ...loggedUser as User,
            cart: [...loggedUser?.cart as string[], book.id],
        }, {
            onSuccess: () => {
                messageApi.success('Sebetke qosıldı')
            }
        })
    }

    return (
        <div className='card-container'>
            {contextHolder}
            <img
                src={book.image_url}
                alt='card'
                className='card-img'
            />
            <div className='card-meta'>
                <div className='card-title'>
                    <p>{book.name}</p>
                    <span onClick={() => handleLike(book)}>
                        { liked
                            ?
                            <FaHeart className='card-icon-heart' />
                            :
                            <FaRegHeart className='card-icon-heart' />
                        }
                    </span>
                </div>
                <div className='card-description'>
                    <div className='card-icon-eye'>
                        <FaEye size={16}/> 123
                    </div>
                    <Link to={`/book/${book.id}`}>
                        <button className='card-btn' >
                            Tıńlaw
                        </button>
                    </Link>
                    <FaShoppingCart
                        onClick={handleAddToCart}
                        size={20}
                        className='card-icon-heart'
                    />
                </div>
            </div>
        </div>
    )
}

