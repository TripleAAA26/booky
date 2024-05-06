import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className="hero-section">
            <div>
                <h1 className='hero-section-header'>
                    «Booky» — qaraqalpaq tilindegi audiokitaplar platformasına xosh kelipsiz!
                </h1>
                <p className='hero-section-text'>
                    Bul platformada qaraqalpaq tilinde basıp shıǵarılǵan jáhán, ózbek hám qaraqalpaq ádebiyatınıń
                    dúrdana shıǵarmaları jáne qaraqalpaq awızeki dóretiwshiliginiń hasıl marjanlarınınıń audio
                    variantların jaratamız. Jáhán, ózbek hám qaraqalpaq kórkem-ádebiy dóretpeleri, sonday-aq
                    qaraqalpaq folklorınıń dúrdana shıǵarmalarınıń elektron variantların islep shıǵamız hám
                    saytqa jaylastıramız.
                </p>
                <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                    <button className='hero-btn'>Baslaw</button>
                    <div>
                        <Link to='https://play.google.com/store/apps/details?id=com.karsoft.bookienew' target='_blank'>
                            <img src="../../public/googleplay.png" alt="google" className="mobile-stores-img"/>
                        </Link>
                        <Link to='https://www.apple.com/app-store' target='_blank'>
                            <img src="../../public/appstore.png" alt="apple" className="mobile-stores-img"/>
                        </Link>
                    </div>
                </div>
            </div>
            <img src="../../public/hero-section-img.jpg" alt="hero" className="hero-section-img"/>
        </div>
    )
}

