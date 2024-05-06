import { useEffect, useState } from 'react'

import { Book } from '../../types.ts'

import useCartStore from '../hooks/useCartStore.ts'
import PaymentItem from '../components/PaymentItem.tsx'


const Payment = () => {
    const { clearStore, booksToBuy } = useCartStore()
    const [ bookState, setBookState] = useState<Book[]>([])
    const [ radioValue, setRadioValue ] = useState<string>('')


    function handlePay() {
        if (!radioValue || bookState.length === 0) return
        console.log('PAY')
    }

    useEffect(() => {
        setBookState(booksToBuy)

        return () => clearStore()
    }, [])

    const totalPrice = bookState?.reduce((acc, item) => {
        return acc + Number(item.price)
    }, 0)

    return (
        <div className='container'>
            <h1>Satıp alıw</h1>
            <div className='cart-container'>
                <div className='cart-list'>
                    {bookState.map(item =>
                        <PaymentItem key={item.id} book={item} />
                    )}
                </div>
                <div className='cart-choose'>
                    <div className='payment-text'>
                        <p>Kitap({bookState.length})</p>
                        <p>{totalPrice} sum</p>
                    </div>
                    <div className='payment-price'>
                        <p>Jámi</p>
                        <p>{totalPrice} sum</p>
                    </div>

                    <div className='radio-group'>
                        <button
                            className={`radio-button ${radioValue === 'uzum' && 'active'}`}
                            onClick={() => setRadioValue('uzum')}
                        >
                            <img className="radio-img" src="../../public/payment-methods/Uzum-bank.svg" alt="uzum"/>
                        </button>
                        <button
                            className={`radio-button ${radioValue === 'click' && 'active'}`}
                            onClick={() => setRadioValue('click')}
                        >
                            <img className="radio-img" src="../../public/payment-methods/Click.svg" alt="click"/>
                        </button>
                        <button
                            className={`radio-button ${radioValue === 'payme' && 'active'}`}
                            onClick={() => setRadioValue('payme')}
                        >
                            <img className="radio-img" src="../../public/payment-methods/Payme.svg" alt="payme"/>
                        </button>
                    </div>

                    <button onClick={handlePay} className='payment-btn'>
                        Tólew
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payment