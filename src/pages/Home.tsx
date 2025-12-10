import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

export function Home() {
    return (
        <div className="flex flex-col gap-24 pb-24">
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <CTA />
        </div>
    );
}
