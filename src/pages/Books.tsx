import CardBook from '../components/CardBook.tsx'
import { useLocation } from 'react-router-dom'
import { useGetBooks } from '../hooks/useGetBooks.ts'
import { Book } from '../../types.ts'
import useAuth from '../hooks/useAuth.ts'

export default function Books() {
    const { pathname } = useLocation()
    const { Books } = useGetBooks()
    const { loggedUser } = useAuth()

    const categoryName =
        pathname === '/category/jahan-adebiyati' && 'Jáhán ádebiyatı' ||
        pathname === '/category/ozbek-adebiyati' && 'Ózbek ádebiyatı' ||
        pathname === '/category/qaraqalpaq-adebiyati' && 'Qaraqalpaq ádebiyatı' ||
        pathname === '/category/qaraqalpaq-folklori' && 'Qaraqalpaq folklorı' ||
        pathname === '/category/qisqa-audiolar' && 'Qısqa audiolar' ||
        pathname === '/favorites' && 'Saylandılar' ||
        pathname === '/my-books' && 'Meniń kitaplarım'

    let bookList

    if (pathname.startsWith('/category')) {
        bookList = Books?.filter((book: Book) => book.category === categoryName)
    }

    if (pathname === '/favorites') {
        bookList = loggedUser?.favorite_books?.map(id => {
            const favoritebook = Books.filter((book:Book) => id === book.id)
            return favoritebook[0]
        })
    }

    if (pathname === '/my-books') {
        bookList = loggedUser?.my_books?.map(id => {
            const mybook = Books.filter((book: Book)=> id === book.id)
            return mybook[0]
        })
    }

    return (
        <div className="container">
            <h1 className="books-header">
                {categoryName}
            </h1>
            <div className="books-list">
                {bookList?.map((book: Book) =>
                    <CardBook
                        book={book}
                        key={book.id}
                    />
                )}
            </div>
        </div>
    )
}

