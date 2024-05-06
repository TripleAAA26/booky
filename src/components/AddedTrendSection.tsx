import CardBook from './CardBook.tsx'
import { Carousel } from 'antd'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
import { useGetBooks } from '../hooks/useGetBooks.ts'
import { Book } from '../../types.ts'


export default function AddedTrendSection() {
    const { Books } = useGetBooks()

    const isSmallDesktop = useMediaQuery({ query: '(max-width: 1400px)' })
    const isLandscapeTablet = useMediaQuery({ query: '(max-width: 1100px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 800px)' })

    const numberOfSlides = isTablet && 1 || isLandscapeTablet && 2 || isSmallDesktop && 3 || 4

    //@ts-expect-error just
    const SlickArrowLeft = ({ currentSlide, ...props }) => (
        <button
            {...props}
            className={
                'slick-prev slick-arrow' +
                (currentSlide === 0 ? ' slick-disabled' : '')
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0}
            type="button"
        >
            <FaArrowCircleLeft size={24} style={{ color: '#2d71ae', display: currentSlide === 0 ? 'none' : '' }}/>
        </button>
    )

    //@ts-expect-error just
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                'slick-next slick-arrow' +
                (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1}
            type="button"
        >
            <FaArrowCircleRight size={24} style={{ color: '#2d71ae', display: currentSlide === slideCount - 4 ? 'none' : '' }}/>
        </button>
    )


    return (
        <div className="added-trend-section">
            <div>
                <h2 style={{ marginBottom: '2rem' }}>
                    Sońǵı qosılǵanları
                </h2>
                <div>
                    <Carousel
                        draggable
                        slidesToShow={numberOfSlides}
                        infinite={false}
                        dots={false}
                        arrows
                        prevArrow={<SlickArrowLeft currentSlide />}
                        nextArrow={<SlickArrowRight currentSlide slideCount/>}
                    >
                        {Books?.map((book: Book) =>
                            <div key={book.id}>
                                <div className='card-wrapper'>
                                    <CardBook book={book}  />
                                </div>
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
            <div>
                <h2 style={{ marginBottom: '2rem' }}>
                    Trendtegi kitaplar
                </h2>
                <div>
                    <Carousel
                        draggable
                        slidesToShow={numberOfSlides}
                        infinite={false}
                        dots={false}
                        arrows
                        prevArrow={<SlickArrowLeft currentSlide />}
                        nextArrow={<SlickArrowRight currentSlide slideCount/>}
                    >
                        {Books?.map((book: Book) =>
                            <div key={book.id}>
                                <div className='card-wrapper' >
                                    <CardBook book={book} />
                                </div>
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

