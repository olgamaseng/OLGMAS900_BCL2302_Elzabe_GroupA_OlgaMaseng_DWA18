import FetchAPI from '../Components/FetchApi';
import ShowDetails from '../Components/SeasonsAndPreview';
import Navigation from '../Components/Nav'

export default function ShowsPage() {
    return (
      <div>
           <FetchAPI/>
              <ShowDetails/>
              <Navigation />

      </div>
    );
  }

  