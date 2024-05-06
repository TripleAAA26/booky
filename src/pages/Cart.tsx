import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Book } from '../../types.ts'

import useAuth from '../hooks/useAuth.ts'
import CartItem from '../components/CartItem.tsx'
import { useGetBooks } from '../hooks/useGetBooks.ts'
import useCartStore from '../hooks/useCartStore.ts'


const Cart = () => {
    const navigate = useNavigate()
    const { loggedUser } = useAuth()
    const { Books, isLoading } = useGetBooks()
    const { addAllBooksToBuy } = useCartStore()
    const [ checked, setChecked ] = useState<Book[]>([])

    const cartBooks = loggedUser?.cart.map((bookId) => {
        return Books?.find((book: Book) => book.id === bookId)
    })

    if (isLoading) return

    function handleChooseAll() {
        if (checked.length === 0) {
            setChecked(cartBooks as Book[])
        }

        if (checked.length > 0) {
            addAllBooksToBuy(checked)
            navigate('/payment')
        }
    }


    return (
        <div className="container">
            <h1 className="books-header">
                Sebet
            </h1>
            <div className="cart-container">
                <div className="cart-list">
                    {cartBooks?.length === 0
                        ?
                        <div className='cart-empty'>Hazirshe sebet bos</div>
                        :
                        cartBooks?.map(item =>
                            <CartItem
                                key={item.id}
                                book={item}
                                checked={checked}
                                setChecked={setChecked}
                            />
                        )
                    }
                </div>
                <div className="cart-choose">
                    <p>Dawam ettiriw ushın, satıp almaqshı bolǵan kitaplarıńızdı belgileń</p>
                    <button onClick={handleChooseAll} className="cart-choose-btn">
                        {checked.length > 0 ? 'Satıp alıw' : 'Bárshesin belgilew'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart