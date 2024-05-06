import { Layout } from 'antd'
import Hero from '../components/Hero.tsx'
import CarouselSection from '../components/CarouselSection.tsx'
import AddedTrendSection from '../components/AddedTrendSection.tsx'
import FeedbackSection from '../components/FeedbackSection.tsx'
const { Content } = Layout
export default function Home() {
    return (
        <Content>
            <Hero />
            <CarouselSection />
            <AddedTrendSection />
            <FeedbackSection />
        </Content>
    )
}

