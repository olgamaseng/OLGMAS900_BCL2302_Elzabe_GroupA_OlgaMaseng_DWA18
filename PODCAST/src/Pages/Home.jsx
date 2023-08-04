import ShowDetails from '../Components/SeasonsAndPreview';
import Navigation from '../Components/Nav';
import RandomImageCarousel from '../Components/carousel';

export default function HomePage() {
    return (
      <div>
        <Navigation />
        <ShowDetails />
        <RandomImageCarousel/>


      </div>
    );
  }