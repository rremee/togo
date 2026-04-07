import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InfoScrolling from "./components/InfoScrolling.jsx";
import {infoScrollingParagraphsFirst} from "./constants/index.jsx";
import HeadingScrollHorizontal from "./components/HeadingScrollHorizontal.jsx";
import BackgroundView from "./components/BackgroundView.jsx";
import LeadSection from "./components/LeadSection.jsx";
import Mountains from "./components/Mountains.jsx";
import IntroGreatRace from "./components/IntroGreatRace.jsx";
import JourneyGreatRace from "./components/JourneyGreatRace.jsx";
import MapJourney from "./components/MapJourney.jsx";
import WaterJourney from "./components/WaterJourney.jsx";
import FinalJourney from "./components/FinalJourney.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <div className='wrapper'>
      <main>
          {/*<Header/>*/}
          {/*<Hero/>*/}
          {/*<InfoScrolling text={infoScrollingParagraphsFirst}/>*/}
          {/*<HeadingScrollHorizontal header='Background'/>*/}
          {/*<BackgroundView/>*/}
          {/*<LeadSection/>*/}
          {/*<Mountains/>*/}
          <section id='great-race' className='theme-light relative z-1'>
              {/*<HeadingScrollHorizontal header='Great Race of Mercy'/>*/}
              <div className="h-dvh"></div>
              {/*<IntroGreatRace/>*/}
              {/*<JourneyGreatRace/>*/}
              {/*<MapJourney/>*/}
              {/*<WaterJourney/>*/}
              <FinalJourney />
              <div className="h-dvh"></div>
          </section>
      </main>
    </div>
  )
}

export default App
