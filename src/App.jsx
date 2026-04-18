import {useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InfoScrolling from "./components/InfoScrolling.jsx";
import {infoScrollingParagraphsFirst, infoScrollingParagraphsThird} from "./constants/index.jsx";
import HeadingScrollHorizontal from "./components/HeadingScrollHorizontal.jsx";
import BackgroundView from "./components/BackgroundView.jsx";
import LeadSection from "./components/LeadSection.jsx";
import Mountains from "./components/Mountains.jsx";
import IntroGreatRace from "./components/IntroGreatRace.jsx";
import JourneyGreatRace from "./components/JourneyGreatRace.jsx";
import MapJourney from "./components/MapJourney.jsx";
import WaterJourney from "./components/WaterJourney.jsx";
import FinalJourney from "./components/FinalJourney.jsx";
import LegacyOfHero from "./components/LegacyOfHero.jsx";
import Gallery from "./components/Gallery.jsx";
import End from "./components/End.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

    const [isStarted, setIsStarted] = useState(false);

    if (!isStarted) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="text-center max-w-sm px-4">
                    <h2 className="text-2xl font-bold mb-4">This website includes <span className='text-primary'>music</span> </h2>
                    <p className="mb-8 text-gray opacity-60">
                        For a more immersive experience, it is recommended to enable sound. You can turn it off at any time.
                    </p>
                    <button
                        onClick={() => setIsStarted(true)}
                        className="px-7 py-4 bg-light font-bold text-dark rounded-[10px] hover:bg-primary hover:text-light transition-colors duration-400 cursor-pointer"
                    >
                        Start your journey
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='wrapper'>
            <main>
                <Header isStarted={isStarted} />
                <Hero/>
                <InfoScrolling text={infoScrollingParagraphsFirst}/>
                <HeadingScrollHorizontal header='Background'/>
                <BackgroundView/>
                <LeadSection/>
                <Mountains/>
                <section id='great-race' className='theme-light relative z-10'>
                    <HeadingScrollHorizontal header='Great Race of Mercy'/>
                    <IntroGreatRace/>
                    <JourneyGreatRace/>
                    <MapJourney/>
                    <WaterJourney/>
                    <FinalJourney />
                    <img
                        src="/images/ripped.svg"
                        alt="Rip Paper"
                        className='w-full absolute left-0 bottom-0 pointer-events-none z-10 translate-y-[60%]'/>
                </section>
                <LegacyOfHero/>
                <InfoScrolling text={infoScrollingParagraphsThird}/>
                <Gallery/>
                <End/>
            </main>
        </div>
    )
}

export default App
