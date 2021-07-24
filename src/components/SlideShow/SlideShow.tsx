import { useState, useRef } from 'react';

// Images
import AylesburyEvening from 'assets/About/AylesburyEvening.jpg'
import AylesburyTrains from 'assets/About/AylesburyTrains.jpg'
import CoasterWickerman from 'assets/About/CoasterWickerman.jpg'
import CoasterColossos from 'assets/About/CoasterColossos.jpg'
import Computer from 'assets/About/Computer.jpg'
import Gameboy from 'assets/About/Gameboy.jpg'
import MusicAmonAmarth from 'assets/About/MusicAmonAmarth.jpg'
import MusicAmonAmarth2 from 'assets/About/MusicAmonAmarth2.jpg'
import MusicMaidenLandscape from 'assets/About/MusicMaidenLandscape.jpg'
import MusicMaidenLive from 'assets/About/MusicMaidenLive.jpg'
import MusicPriestLive from 'assets/About/MusicPriestLive.jpg'
import MusicSabbathBridge from 'assets/About/MusicSabbathBridge.jpg'
import PlanB from 'assets/About/PlanB.jpg'
import RunSelfie from 'assets/About/RunSelfie.jpg'
import TravelLondon1 from 'assets/About/TravelLondon1.jpg'
import TravelLondonNature from 'assets/About/TravelLondonNature.jpg'
import TravelViennaBridge from 'assets/About/TravelViennaBridge.jpg'
import TrooperBeer from 'assets/About/TrooperBeer.jpg'
import WebSumbit1 from 'assets/About/WebSumbit1.jpg'
import WebsumbitAWS from 'assets/About/WebsumbitAWS.jpg'
import WebSumbitBrave from 'assets/About/WebSumbitBrave.jpg'
import TravelRome1 from 'assets/About/TravelRome1.jpg'
import TravelRome2 from 'assets/About/TravelRome2.jpg'

const SlideShow = () => {
  const [index, setindex] = useState(0);
  const timeoutRef = useRef(null);
    const imageObjects = [
        {
            img: AylesburyEvening,
            description: 'My town Aylesbury on a quiet evening'
        },
        {
          img: CoasterWickerman,
          description: 'Wickerman at Alton Towers'
        }
    ];
    

    return (
        <>
          {imageObjects.map(img => {return(
            <div>
              <img width={400} height={400} src={img.img} />
              <p>{img.description}</p>
            </div>)
          })}
        </>
    )
}

export default SlideShow;

/*
    //  EXAMPLE CODE FROM ONLINE
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
*/