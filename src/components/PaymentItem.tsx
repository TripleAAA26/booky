import { Book } from '../../types.ts'


const PaymentItem = ({ book }: { book: Book }) => {

    return (
        <div className='cart-item'>
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
            </div>
        </div>
    )
}

export default PaymentItem