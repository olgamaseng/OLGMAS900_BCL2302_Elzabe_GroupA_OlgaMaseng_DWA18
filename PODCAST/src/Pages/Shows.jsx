import FetchAPI from '../Components/FetchApi';
import ShowDetails from '../Components/SeasonsAndPreview';
import Navigation from '../Components/Nav'
import RandomImageCarousel from '../Components/carousel';
import SearchFilter from '../Components/SearchFilter';

export default function ShowsPage() {
    return (
      <div>
          
              <Navigation />
              <RandomImageCarousel/>
              <FetchAPI/>
              <SearchFilter/>
              <ShowDetails/>
              

      </div>
    );
  }

  