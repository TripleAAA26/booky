import { Link } from 'react-router-dom'

import { Layout } from 'antd'
import { RiInstagramFill, RiTelegramFill, RiYoutubeFill } from 'react-icons/ri'
import { FaPhone } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import GooglePlay from '../../public/GooglePlay-white.svg'
import UzumBank from '../../public/payment-methods/Uzum-bank.svg'
import Payme from '../../public/payment-methods/Payme.svg'
import Click from '../../public/payment-methods/Click.svg'

export default function Footer() {
    const { Footer } = Layout

    return (
        <Footer className="footer-section">
            <div className="footer-container">
                <div className='footer-column'>
                    <Link to="/" style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>
                        Booky.uz
                    </Link>
                    <Link
                        to="https://play.google.com/store/apps/details?id=com.karsoft.bookienew"
                        target="_blank"
                    >
                        <img src={GooglePlay} alt="google-play-market"/>
                    </Link>
                </div>

                <div className='footer-column'>
                    <p>Biz benen baylanısıw</p>
                    <Link
                        to="tel:+998933625744"
                        className='number-email'
                    >
                        <FaPhone size={16}/>
                        +998 93 362 57 44
                    </Link>
                    <Link
                        to="mailto:bookieaudiokitaplar@gmail.com"
                        className='number-email'
                    >
                        <MdOutlineEmail size={16}/>
                        bookieaudiokitaplar@gmail.com
                    </Link>
                </div>

                <div className='footer-column'>
                    <p>
                        Sociallıq tarmaqlar
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Link
                            to='https://www.instagram.com/booky_karakalpak'
                            target='_blank'
                            className='footer-social-media'
                        >
                            <RiInstagramFill size={24}/>
                        </Link>
                        <Link
                            to='https://t.me/booky_nks'
                            target='_blank'
                            className='footer-social-media'
                        >
                            <RiTelegramFill size={24}/>
                        </Link>
                        <Link
                            to='https://www.youtube.com/bookyqaraqalpaq'
                            target='_blank'
                            className='footer-social-media'
                        >
                            <RiYoutubeFill size={24}/>
                        </Link>
                    </div>
                </div>

                <div className='footer-column'>
                    Jardem
                    <Link to='/donate' className='footer-social-media'>Joybardı qollap-quwatlaw</Link>
                    <Link to='/faq' className='footer-social-media'>Kóp beriletuǵın sorawlar</Link>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'normal'}}>© 2023 Booky | Karsoft</p>
                </div>

                <div className='footer-column'>
                    Tólem túrleri
                    <Link to='https://uzumbank.uz/uz' target='_blank' className='footer-payments'>
                        <img src={UzumBank} alt='uzumBank' className='payment-icons' />
                    </Link>
                    <Link to='https://payme.uz/home/main' target='_blank' className='footer-payments'>
                        <img src={Payme} alt='payme' className='payment-icons' />
                    </Link>
                    <Link to='https://click.uz/uz' target='_blank' className='footer-payments'>
                        <img src={Click} alt='click' className='payment-icons' />
                    </Link>
                </div>
            </div>

            <p className='footer-copyright'>
                © 2023-2024 "Booky.uz"
                qaraqalpaq tilindegi audiokitaplar platforması.
                Barlıq huqıqlar qorǵalǵan, nusqa alıp kóshiriw qadaǵan etiledi.
            </p>
        </Footer>
    )
}

