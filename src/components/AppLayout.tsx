import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.tsx'
import Footer from './Footer.tsx'
import { Layout } from 'antd'

export default function AppLayout() {
    return (
        <Layout>
            <Navbar />
            <Outlet />
            <Footer />
        </Layout>
    )
}

