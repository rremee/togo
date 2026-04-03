import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InfoScrolling from "./components/InfoScrolling.jsx";
import {infoScrollingParagraphs} from "./constants/index.jsx";
import HeadingScrollHorizontal from "./components/HeadingScrollHorizontal.jsx";
import BackgroundView from "./components/BackgroundView.jsx";
import LeadSection from "./components/LeadSection.jsx";
import Mountains from "./components/Mountains.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <div className='wrapper'>
      <main>
          {/*<Header/>*/}
          {/*<div className='h-dvh'></div>*/}

          <Hero/>
          {/*<InfoScrolling text={infoScrollingParagraphs}/>*/}
          {/*<HeadingScrollHorizontal header='Background'/>*/}
          <BackgroundView/>

          {/*<LeadSection/>*/}
          <div className='h-dvh'></div>
          {/*<Mountains/>*/}
          {/*<section id='great-race' className='theme-light relative z-1'>*/}
          {/*    <HeadingScrollHorizontal header='Great Race of Mercy'/>*/}
          {/*</section>*/}
      </main>
    </div>
  )
}

export default App
