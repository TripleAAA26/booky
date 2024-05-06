import { Carousel } from 'antd'
import { Link } from 'react-router-dom'

export default function CarouselSection() {
    return (
        <div className="carousel-section">
            <Carousel autoplay draggable pauseOnHover>
                <div>
                    <Link to='https://www.instagram.com/karsoftuz' target='_blank' className='carousel-item'>
                        <img src="../../public/carousel/carousel-1.jpg" alt="karsoftuz" className='carousel-img'/>
                    </Link>
                </div>
                <div>
                    <Link to='https://www.instagram.com/karsoftuz' target='_blank' className='carousel-item'>
                        <img src="../../public/carousel/carousel-2.jpg" alt="karsoft-school" className='carousel-img'/>
                    </Link>
                </div>
                <div>
                    <div className='carousel-item'>
                        <iframe src="https://www.youtube.com/embed/UT9ndxZPXxY" className='carousel-img'/>
                    </div>
                </div>
                <div>
                    <Link
                        to='https://play.google.com/store/apps/details?id=com.karsoft.tusindirmesozlik'
                        target='_blank'
                        className='carousel-item'
                    >
                        <img src="../../public/carousel/carousel-4.jpg" alt="tusindirmesozlik" className='carousel-img'/>
                    </Link>
                </div>
                <div>
                    <Link to='https://kknews.uz/qq' target='_blank' className='carousel-item' >
                        <img src="../../public/carousel/carousel-5.jpg" alt="kknews" className='carousel-img'/>
                    </Link>
                </div>
                <div>
                    <Link to='https://www.youtube.com/@bookiemusickr' target='_blank' className='carousel-item'>
                        <img src="../../public/carousel/carousel-6.jpg" alt="bookiemusickr" className='carousel-img'/>
                    </Link>
                </div>
            </Carousel>
        </div>
    )
}

