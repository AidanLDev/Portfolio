import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slideShow.scss';

// Images
import AylesburyEvening from 'assets/About/AylesburyEvening.jpg';
import AylesburyTrains from 'assets/About/AylesburyTrains.jpg';
import CoasterWickerman from 'assets/About/CoasterWickerman.jpg';
import CoasterColossos from 'assets/About/CoasterColossos.jpg';
import Computer from 'assets/About/Computer.jpg';
import Gameboy from 'assets/About/Gameboy.jpg';
import MusicAmonAmarth from 'assets/About/MusicAmonAmarth.jpg';
import MusicAmonAmarth2 from 'assets/About/MusicAmonAmarth2.jpg';
import MusicMaidenLandscape from 'assets/About/MusicMaidenLandscape.jpg';
import MusicMaidenLive from 'assets/About/MusicMaidenLive.jpg';
import MusicPriestLive from 'assets/About/MusicPriestLive.jpg';
import MusicSabbathBridge from 'assets/About/MusicSabbathBridge.jpg';
import PlanB from 'assets/About/PlanB.jpg';
import RunSelfie from 'assets/About/RunSelfie.jpg';
import TravelLondon1 from 'assets/About/TravelLondon1.jpg';
import TravelLondonNature from 'assets/About/TravelLondonNature.jpg';
import TravelViennaBridge from 'assets/About/TravelViennaBridge.jpg';
import TrooperBeer from 'assets/About/TrooperBeer.jpg';
import WebSumbit1 from 'assets/About/WebSumbit1.jpg';
import WebsumbitAWS from 'assets/About/WebsumbitAWS.jpg';
import WebSumbitBrave from 'assets/About/WebSumbitBrave.jpg';
import TravelRome1 from 'assets/About/TravelRome1.jpg';
import TravelRome2 from 'assets/About/TravelRome2.jpg';
import Plants1 from 'assets/About/Plants1.jpg';
import Plants2 from 'assets/About/Plants2.jpg';
import Plants3 from 'assets/About/Plants3.jpg';

import MyLove from 'assets/About/MyLove.png';

const SlideShow = () => {
  const imageObjects = [
    { img: AylesburyTrains, description: 'My town Aylesbury' },
    {
      img: CoasterWickerman,
      description: 'Sunny day with Big Bob at Alton Towers',
    },
    { img: Computer, description: 'The PC' },
    {
      img: MusicAmonAmarth,
      description: 'Amon Amarth live from London - 2019',
    },
    {
      img: MusicAmonAmarth2,
      description: 'Amon Amarth live from London - 2019',
    },
    { img: MusicMaidenLandscape, description: "Iron Maiden's Senjutsu" },
    {
      img: MusicMaidenLive,
      description: 'Iron Maiden live from Newcastle - 2018',
    },
    {
      img: MyLove,
      description: '❤ The love of my life ❤',
    },
    {
      img: MusicPriestLive,
      description: 'Judas Priest live from Vienna - 2018',
    },
    {
      img: Gameboy,
      description:
        'A classic console, too many hours spent catching Pokemon on here',
    },
    {
      img: MusicSabbathBridge,
      description: 'Sitting with ledgends in their home town of Birmingham',
    },
    { img: PlanB, description: 'Time for plan B' },
    { img: RunSelfie, description: 'Running around' },
    { img: AylesburyEvening, description: 'A quiet evening in Aylesbury' },
    {
      img: CoasterColossos,
      description:
        'Riding the worlds first 10 invertion coaster at Thorpe Park',
    },
    {
      img: TravelLondon1,
      description: 'A great view from the London observatory',
    },
    { img: TravelLondonNature, description: 'British nature in Kent' },
    { img: TravelViennaBridge, description: 'A view of the Danube in Vienna' },
    { img: TrooperBeer, description: 'Great band, great beer' },
    { img: WebSumbit1, description: 'Web Summit 2019 in Lisbon, Portugal' },
    {
      img: WebsumbitAWS,
      description: 'AWS Section at the Web Sumbit in Lisbon',
    },
    {
      img: WebSumbitBrave,
      description:
        'Brendan Eich showing off the Brave browser at the Web Sumbit in Lisbon',
    },
    { img: TravelRome1, description: 'Rome 2020' },
    { img: TravelRome2, description: 'Rome 2020' },
    { img: Plants1, description: 'My lockdown compainions' },
    { img: Plants2, description: 'My lockdown compainions' },
    { img: Plants3, description: 'My lockdown compainions' },
  ];

  const handleDragStart = (e) => e.preventDefault();

  return (
    <div className='slide-container'>
      <AliceCarousel autoPlay autoPlayInterval='3500' mouseTracking>
        {imageObjects.map((img, index) => {
          return (
            <div className='each-slide' key={index} style={{ width: '100%' }}>
              <img
                onDragStart={handleDragStart}
                src={img.img}
                height='500px'
                width='80%'
                alt={img.description}
                style={{ maxWidth: '600px', cursor: 'pointer' }}
              />
              <h3>{img.description}</h3>
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default SlideShow;
