import AylesburyEvening from 'assets/About/AylesburyEvening.jpg'
import AylesburyTrains from 'assets/About/AylesburyTrains.jpg'
import CoasterWickerman from 'assets/About/CoasterWickerman.jpg'

/*
-a----        02/06/2021     17:07         263666 CoasterColosso
                                                  s.jpg
-a----        26/06/2021     12:20         108311 CoasterWickerm
                                                  an.jpg        
-a----        01/07/2018     14:14        1099346 Computer.JPG   
-a----        27/10/2019     15:12        1348358 Gameboy.jpg    
-a----        30/11/2019     21:31        1735990 MusicAmonAmart
                                                  h.jpg
-a----        30/11/2019     21:37        1780283 MusicAmonAmart 
                                                  h2.jpg
-a----        19/07/2021     15:10         108491 MusicMaidenLan 
                                                  dscape.jpg     
-a----        02/08/2018     09:51         668224 MusicMaidenLiv 
                                                  e.JPG
-a----        02/08/2018     09:51         714266 MusicPriestLiv 
                                                  e.JPG
-a----        21/07/2019     16:26        1625653 MusicSabbathBr 
                                                  idge.jpg       
-a----        28/09/2019     11:48         140261 PlanB.jpg      
-a----        13/06/2021     10:56        1857831 RunSelfie.jpg 
-a----        02/09/2019     13:22        2379947 TravelLondon1. 
                                                  jpg
-a----        20/06/2021     15:46         288407 TravelLondonNa 
                                                  ture.jpg       
-a----        23/02/2020     12:20        1717713 TravelRome1.he 
                                                  ic
-a----        22/02/2020     19:14        1482965 TravelRome2.he 
                                                  ic
-a----        26/07/2018     19:31        1917531 TravelViennaBr 
                                                  idge.JPG       
-a----        19/06/2021     14:23        1258738 TrooperBeer.jp
                                                  g
-a----        05/11/2019     11:28        1093582 WebSumbit1.jpg 
-a----        05/11/2019     11:54        2390270 WebsumbitAWS.j 
                                                  pg
-a----        07/11/2019     11:35        1828718 WebSumbitBrave 
                                                .jpg
*/
const SlideShow = () => {
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