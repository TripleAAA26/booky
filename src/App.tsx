import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AppLayout from './components/AppLayout.tsx'
import Error from './components/Error.tsx'

import Home from './pages/Home.tsx'
import Books from './pages/Books.tsx'
import FAQ from './pages/FAQ.tsx'
import Donate from './pages/Donate.tsx'
import Book from './pages/Book.tsx'
import Auth from './pages/Auth.tsx'
import Cart from './pages/Cart.tsx'
import Payment from './pages/Payment.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import AudioBook from './pages/AudioBook.tsx'


const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            {
                element: <ProtectedRoute />,
                errorElement: <Error />,
                children: [
                    { path: '/favorites', element: <Books/> },
                    { path: '/cart', element: <Cart /> },
                    { path: '/my-books', element: <Books /> },
                    { path: '/payment', element: <Payment /> },
                    { path: '/audiobook/:audioBookId', element: <AudioBook /> },
                ]
            },
            { path: '/donate', element: <Donate /> },
            { path: '/faq', element: <FAQ /> },
            { path: '/category/jahan-adebiyati', element: <Books /> },
            { path: '/category/ozbek-adebiyati', element: <Books /> },
            { path: '/category/qaraqalpaq-adebiyati', element: <Books /> },
            { path: '/category/qaraqalpaq-folklori', element: <Books /> },
            { path: '/category/qisqa-audiolar', element: <Books /> },
            { path: '/book/:bookId', element: <Book /> },
        ]
    },
    { path: '/register', element: <Auth /> },
    { path: '/login', element: <Auth /> },
])

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </>
    )
}

export default App
