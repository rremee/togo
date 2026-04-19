import {useState, useEffect, useLayoutEffect, useRef, useCallback}  from 'react';
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InfoScrolling from "./components/InfoScrolling.jsx";
import {infoScrollingParagraphsFirst, infoScrollingParagraphsThird} from "./constants/index.jsx";
import HeadingScrollHorizontal from "./components/HeadingScrollHorizontal.jsx";
import BackgroundView from "./components/BackgroundView.jsx";
import LeadSection from "./components/LeadSection.jsx";
import {lazy, Suspense} from 'react';
const Mountains = lazy(() => import('./components/Mountains.jsx'));
import IntroGreatRace from "./components/IntroGreatRace.jsx";
import JourneyGreatRace from "./components/JourneyGreatRace.jsx";
import MapJourney from "./components/MapJourney.jsx";
import WaterJourney from "./components/WaterJourney.jsx";
import FinalJourney from "./components/FinalJourney.jsx";
import LegacyOfHero from "./components/LegacyOfHero.jsx";
import Gallery from "./components/Gallery.jsx";
import End from "./components/End.jsx";
import Cursor from "./components/Cursor.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

    const [isStart, setIsStart] = useState(false);
    const overlayRef = useRef(null);

    useEffect(() => {
        new Image().src = '/images/home-img.webp';
    }, []);

    useLayoutEffect(() => {
        document.documentElement.style.scrollbarGutter = 'stable';
        document.documentElement.style.overflow = 'hidden';
    }, []);

    const handleStart = useCallback(() => {
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.7,
            ease: 'power2.inOut',
            onComplete: () => {
                document.documentElement.style.overflow = '';
                setIsStart(true);
            },
        });
    }, []);

    return (
        <>
            <Cursor isStart={isStart}/>
            {!isStart && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
                >
                    <div className="text-center max-w-sm px-4">
                        <h2 className="text-2xl font-bold mb-4">
                            This website includes <span className='text-primary'>music</span>
                        </h2>
                        <p className="mb-8 text-gray opacity-60">
                            For a more immersive experience, it is recommended to enable sound.
                            You can turn it off at any time.
                        </p>
                        <button
                            onClick={handleStart}
                            className="px-7 py-4 bg-light font-bold text-dark rounded-[10px] hover:bg-primary hover:text-light transition-colors duration-400 cursor-pointer"
                        >
                            Start your journey
                        </button>
                    </div>
                </div>
            )}

            <div className='wrapper'>
                <main>
                    <Header isStarted={isStart} />
                    <Hero isStart={isStart} />
                    <InfoScrolling text={infoScrollingParagraphsFirst} />
                    <HeadingScrollHorizontal header='Background' />
                    <BackgroundView />
                    <LeadSection />
                    <Suspense fallback={<div style={{minHeight: '100vh'}} />}>
                        <Mountains />
                    </Suspense>
                    <section id='great-race' className='theme-light relative z-10'>
                        <HeadingScrollHorizontal header='Great Race of Mercy' />
                        <IntroGreatRace />
                        <JourneyGreatRace />
                        <MapJourney />
                        <WaterJourney />
                        <FinalJourney />
                        <img
                            src="/images/ripped.svg"
                            alt="Rip Paper"
                            className='w-full absolute left-0 bottom-0 pointer-events-none z-10 translate-y-[60%]'
                        />
                    </section>
                    <LegacyOfHero />
                    <InfoScrolling text={infoScrollingParagraphsThird} />
                    <Gallery />
                    <End />
                </main>
            </div>
        </>
    );
}

export default App;