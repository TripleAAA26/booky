import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { Drawer, Layout } from 'antd'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaHome } from 'react-icons/fa'
import { MdAudiotrack, MdLogin, MdLogout } from 'react-icons/md'
import { FaBook, FaUserPlus } from 'react-icons/fa6'
import { BiWorld } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import useAuth from '../hooks/useAuth.ts'
import SearchInput from './SearchInput.tsx'
const { Header } = Layout

export default function Navbar() {
    const [ open, setOpen ] = useState(false)
    const { isAuthenticated, logout, loggedUser }   = useAuth()


    return (
        <Header style={{ height: 'fit-content', padding: '0' }}>
            <div className='logo-container' >
                <Link to='/' className='homepage-link'>
                    Booky.uz
                </Link>
                {isAuthenticated
                    ?
                    <div className="navbar-register-login">
                        <Link to="/favorites">
                            <button className="btn-logout">
                                Saylanǵanlar
                            </button>
                        </Link>
                        <Link to="/cart" className='btn-cart-navbar'>
                            <button className='btn-logout'>
                                Sebet
                            </button>
                            {!!loggedUser?.cart.length  &&
                                <button className="btn-cart-navbar-numbers">
                                    {loggedUser?.cart.length}
                                </button>
                            }
                        </Link>
                        <Link to="/my-books" >
                            <button className='btn-logout'>
                                Kitaplarım
                            </button>
                        </Link>
                        <button
                            className='btn-logout'
                            onClick={logout}
                        >
                            Shıǵıw <MdLogout/>
                        </button>
                    </div>
                    :
                    <div className="navbar-register-login">
                        <Link to="/login">
                            <button className="btn-login">
                                Kiriw
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn-register">
                                Dizimnen ótiw
                            </button>
                        </Link>
                    </div>
                }
                <AiOutlineMenu className="mobile-nav-btn" onClick={() => setOpen(true)}/>
            </div>
            <div className="navbar-container">
                <Link to="/category/jahan-adebiyati" className="nav-link">
                    Jáhán ádebiyatı
                </Link>
                <Link to="/category/ozbek-adebiyati" className="nav-link">
                    Ózbek ádebiyatı
                </Link>
                <Link to="/category/qaraqalpaq-adebiyati" className='nav-link'>
                    Qaraqalpaq ádebiyatı
                </Link>
                <Link to='/category/qaraqalpaq-folklori' className='nav-link'>
                    Qaraqalpaq folklorı
                </Link>
                <Link to='/category/qisqa-audiolar' className='nav-link'>
                    Qısqa audiolar
                </Link>
                <div className='search-input-container'>
                    <SearchInput
                        placeholder='Kitaptı izleń'
                        style={{ width: '25rem' }}
                    />
                    <FiSearch className='search-input-icon' size={20} />
                </div>
            </div>

            <Drawer
                closable
                placement='right'
                open={open}
                onClose={() => setOpen(false)}
                size='large'
                style={{ backgroundColor: '#2d71ae' }}
                width='100%'
                closeIcon={<IoMdClose size={30} style={{ color: 'white' }} />}
            >
                <div className='mobile-navbar'>
                    <Link to='/' className='mobile-navbar-link' onClick={() => setOpen(false)}>
                        <FaHome />
                        Bas bet
                    </Link>
                    <Link to='/category/jahan-adebiyati' className='mobile-navbar-link' onClick={() => setOpen(false)}>
                        <BiWorld />
                        Jáhán ádebiyatı
                    </Link>
                    <Link to='/category/ozbek-adebiyati' className='mobile-navbar-link' onClick={() => setOpen(false)}>
                        <FaBook />
                        Ózbek ádebiyatı
                    </Link>
                    <Link to='/category/qaraqalpaq-adebiyati' className='mobile-navbar-link' onClick={() => setOpen(false)}>
                        <FaBook />
                        Qaraqalpaq ádebiyatı
                    </Link>
                    <Link to='/category/qaraqalpaq-folklori' className='mobile-navbar-link' onClick={() => setOpen(false)}>
                        <FaBook />
                        Qaraqalpaq folklorı
                    </Link>
                    <Link to='/category/qisqa-audiolar' className='mobile-navbar-link' onClick={() => setOpen(false)}>
                        <MdAudiotrack />
                        Qısqa audiolar
                    </Link>
                    {isAuthenticated
                        ?
                        <>
                            <Link to='/favorites' className='mobile-navbar-link' onClick={() => setOpen(false)}>
                                Saylanǵanlar
                            </Link>
                            <Link to='/cart' className='mobile-navbar-link' onClick={() => setOpen(false)}>
                                Sebet
                            </Link>
                            <Link to='/my-books' className='mobile-navbar-link' onClick={() => setOpen(false)}>
                                Kitaplarım
                            </Link>
                            <Link
                                onClick={() => {
                                    logout()
                                    setOpen(false)
                                }}
                                to='/' className='mobile-navbar-link'>
                                Shıǵıw <MdLogout />
                            </Link>
                        </>
                        :
                        <>
                            <Link to='/login' className='mobile-navbar-link'>
                                <MdLogin />
                                Kiriw
                            </Link>
                            <Link to='/register' className='mobile-navbar-link'>
                                <FaUserPlus />
                                Dizimnen ótiw
                            </Link>
                        </>
                    }
                </div>
            </Drawer>
        </Header>
    )
}






