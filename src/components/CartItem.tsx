import { Checkbox, message } from 'antd'
import { FaRegTrashCan } from 'react-icons/fa6'

import { Book, User } from '../../types.ts'

import useAuth from '../hooks/useAuth.ts'
import { useFavoritesAndCart } from '../hooks/useFavoritesAndCart.ts'


interface CartItemProps {
    book: Book
    checked: Book[]
    setChecked: React.Dispatch<React.SetStateAction<Book[]>>
}

const CartItem = ({ book, checked, setChecked }: CartItemProps) => {
    const { loggedUser } = useAuth()
    const { addFavoriteAndCart } = useFavoritesAndCart()
    const [ messageApi, contextHolder ] = message.useMessage()
    //const { booksToBuy , addBooksToBuy, removeBooksToBuy } = useCartStore()

    function handleRemoveFromCart()  {

        addFavoriteAndCart({
            ...loggedUser as User,
            cart : loggedUser?.cart.filter(item => item !== book.id) as string[],
        }, {
            onSuccess: () => {
                messageApi.error('Sebetden óshirildi')
            }
        })
    }

    return (
        <div className='cart-item'>
            {contextHolder}
            <div className='cart-item-checkbox'>
                <Checkbox
                    checked={!!checked.find(item => item.id === book.id)}
                    onChange={(e) =>
                       e.target.checked ?
                           setChecked(prevState => [...prevState, book])
                           :
                           setChecked(prevState => prevState.filter(item => item.id !== book.id))
                    }
                    // checked={!!booksToBuy.find(item => item.id === book.id)}
                    // onChange={(e) =>
                    //     e.target.checked ? addBooksToBuy(book) : removeBooksToBuy(book)
                    // }
                />
            </div>
            <div >
                <img src={book.image_url} alt="book" className='cart-item-img' />
            </div>
            <div className='cart-item-text'>
                <h2>{book.name}</h2>
                <p>{book.author}</p>
                <span>{book.price} sum</span>
            </div>
            <div className='cart-item-price'>
                <h2>{book.price} sum</h2>
                <span>
                    <FaRegTrashCan
                        onClick={handleRemoveFromCart}
                        size={20}
                        className='cart-trash-icon'
                    />
                </span>
            </div>
        </div>
    )
}

export default CartItem