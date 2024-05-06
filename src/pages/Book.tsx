import { useNavigate, useParams } from 'react-router-dom'
import {
    FaBookOpen,
    FaBookReader,
    FaHeart,
    FaRegHeart,
    FaShareAlt,
    FaShoppingCart,
    FaThumbsUp,
    FaUserCircle
} from 'react-icons/fa'
import { IoHeadset } from 'react-icons/io5'
import { MdPayment } from 'react-icons/md'
import { Form, Input, message, Rate } from 'antd'

import { Book as BookType, User, Vote, Comment } from '../../types.ts'

import useFavorite from '../hooks/useFavorite.ts'
import { useGetBooks } from '../hooks/useGetBooks.ts'
import useAuth from '../hooks/useAuth.ts'
import { useFavoritesAndCart } from '../hooks/useFavoritesAndCart.ts'
import { FaBookBookmark } from 'react-icons/fa6'
import useToggleVote from '../hooks/useToggleVote.ts'
import BookCommentItem from '../components/BookCommentItem.tsx'
import useCartStore from '../hooks/useCartStore.ts'

export default function Book() {
    const { bookId } = useParams()
    const navigate = useNavigate()
    const [ messageApi, contextHolder ] = message.useMessage()
    const { loggedUser, isAuthenticated } = useAuth()
    const { Books, isLoading } = useGetBooks()
    const { handleLike } = useFavorite(messageApi)
    const [ form ] = Form.useForm()
    const { addFavoriteAndCart } = useFavoritesAndCart()
    const { voteToggle } = useToggleVote()
    const { addBooksToBuy } = useCartStore()

    if (isLoading) return

    const book = Books?.find((book: BookType) => book.id === bookId)

    const liked = loggedUser?.favorite_books.find(id => id === book.id)

    const inCart = loggedUser?.cart.find(id => id === book.id)

    function handleBuy() {
        addBooksToBuy(book)
        navigate('/payment')
    }

    function handleAddToCart() {
        if (!isAuthenticated) {
            navigate('/login')
            return
        }

        if (inCart) {
            navigate('/cart')
            return
        }

        addFavoriteAndCart({
            ...loggedUser as User,
            cart: [ ...loggedUser?.cart as string[], book.id ],
        }, {
            onSuccess: () => {
                messageApi.success('Sebetke qosıldı')
            }
        })
    }

    function handleVotes(voteType: string) {
        let newVotes

        const userVote = book.votes.find((item: Vote) => item.user_id === loggedUser?.id)

        if (userVote) {
            const filteredVotes = book.votes.filter((item: Vote) => item.user_id !== loggedUser?.id)

            newVotes = userVote.vote === voteType ? filteredVotes
                : [ ...filteredVotes, { user_id: loggedUser?.id, vote: voteType } ]

        } else {
            newVotes = [ ...book.votes, { user_id: loggedUser?.id, vote: voteType } ]
        }


        voteToggle({
            ...book,
            votes: newVotes
        })
    }

    function onFinish({ rating, comment }: { rating: number, comment: string }) {
        if (!rating || !comment) return

        voteToggle({
            ...book,
            comments: [ ...book.comments,
                {
                    user_id: loggedUser?.id,
                    user_name: loggedUser?.username,
                    rating: rating,
                    text: comment,
                }
            ],
        }, {
            onSuccess: () => {
                messageApi.success('pikiriniz jiberildi')
                form.resetFields()
            }
        })
    }

    return (
        <>
            {contextHolder}
            <div className="container">
                <div className="book-details">
                    <div>
                        <img src={book?.image_url} alt="book" className="book-img"/>
                    </div>
                    <div className="book-description">
                        <h1 className="book-header">{book?.name}</h1>
                        <p className="book-author">{book?.author}</p>
                        <div className="book-text">{book?.description}</div>
                        <div>
                            <span className="book-category">
                                {book?.category}
                            </span>
                        </div>
                        <p className="book-price">{book?.price} som</p>
                        <div className="book-buy-share-container">
                            <button
                                onClick={() => navigate(`/audiobook/${book.id}`)}
                                className="buy-share-listen-btns"
                            >
                                <IoHeadset size={16}/>
                                Tıńlap kóriw
                            </button>
                            <button onClick={handleBuy} className="buy-share-listen-btns">
                                <MdPayment size={16}/>
                                Satıp alıw
                            </button>
                            <button
                                onClick={handleAddToCart}
                                className={`btn-cart-book ${inCart ? 'add-cart' : 'link-cart'}`}
                            >
                                <FaShoppingCart size={16}/>
                                {inCart ? 'Sebetke ótiw' : 'Sebetke salıw'}
                            </button>
                            <span onClick={() => handleLike(book)}>
                                {liked
                                    ?
                                    <FaHeart size={30} className="card-icon-heart"/>
                                    :
                                    <FaRegHeart size={30} className="card-icon-heart"/>
                                }
                            </span>
                            <button className="buy-share-listen-btns">
                                <FaShareAlt size={16}/>
                                Úlesiw
                            </button>
                        </div>
                        {isAuthenticated &&
                            <div>
                                <p className="give-votes-header">Dawis berin:</p>
                                <div className="book-buy-share-container">
                                    <button
                                        className="btn-vote"
                                        onClick={() => handleVotes('Esittim')}
                                    >
                                        <FaBookBookmark/>
                                        Esittim &nbsp;
                                        {book?.votes?.filter((item: Vote) => item.vote === 'Esittim').length}
                                    </button>
                                    <button
                                        className="btn-vote"
                                        onClick={() => handleVotes('Esitip atırman')}
                                    >
                                        <FaBookReader/>
                                        Esitip atırman &nbsp;
                                        {book?.votes?.filter((item: Vote) => item.vote === 'Esitip atırman').length}
                                    </button>
                                    <button
                                        className="btn-vote"
                                        onClick={() => handleVotes('Esitejaqpan')}
                                    >
                                        <FaBookOpen/>
                                        Esitejaqpan &nbsp;
                                        {book?.votes?.filter((item: Vote) => item.vote === 'Esitejaqpan').length}
                                    </button>
                                    <button
                                        className="btn-vote"
                                        onClick={() => handleVotes('Usınıs etemen')}
                                    >
                                        <FaThumbsUp/>
                                        Usınıs etemen &nbsp;
                                        {book?.votes?.filter((item: Vote) => item.vote === 'Usınıs etemen').length}
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div>
                    <h2 className="user-feedback-header">
                        Paydalanıwshılar pikiri
                    </h2>
                    <div>
                        {book?.comments?.length > 0 ?
                            <ul className="comment-list">
                                {book?.comments?.map((item: Comment) =>
                                    <BookCommentItem key={item.user_id} comment={item}/>
                                )}
                            </ul>
                            : 'Házirshe hesh kim pikir qaldırmadi'
                        }
                    </div>
                </div>
            </div>

            <div className="book-feedback">
                {!isAuthenticated ?
                    'Pikir qaldırıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı'
                    :
                    <Form
                        form={form}
                        name="bookComment"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <div className="book-feedback-form-rating">
                            <p>Pikir qaldırıw</p>
                            <Form.Item
                                name="rating"
                                rules={[
                                    {
                                        required: true,
                                        message: 'reyting kiritiń',
                                    }
                                ]}
                            >
                                <Rate />
                            </Form.Item>
                        </div>
                        <div className="book-feedback-form-text">
                            <div>
                                <FaUserCircle size={50} style={{ color: '#2d71ae' }}/>
                            </div>
                            <Form.Item
                                name="comment"
                                rules={[
                                    {
                                        required: true,
                                        message: 'pikirinizdı kiritiń',
                                    }
                                ]}
                                style={{ width: '100%' }}
                            >
                                <Input.TextArea rows={4} placeholder="pikiriniz"/>
                            </Form.Item>
                            <Form.Item>
                                <button className="feedback-btn">
                                    Sholıw
                                </button>
                            </Form.Item>
                        </div>
                    </Form>
                }
            </div>
        </>
    )
}

