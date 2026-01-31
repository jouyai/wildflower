import { Hero } from '../components/Hero';
import { Values } from '../components/Values';
import { SeasonalEdit } from '../components/SeasonalEdit';
import { Newsletter } from '../components/Newsletter';

export function Home() {
    return (
        <>
            <Hero />
            <Values />
            <SeasonalEdit />
            <Newsletter />
        </>
    );
}
