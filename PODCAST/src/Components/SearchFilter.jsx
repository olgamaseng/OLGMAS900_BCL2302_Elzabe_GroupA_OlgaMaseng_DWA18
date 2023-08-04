import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const SearchFilter = ({ searchTerm, searchClicked }) => {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (searchClicked && searchTerm.trim() !== '') {
      const filteredShows = shows.filter((show) =>
        show.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredShows(filteredShows);
    } else {
      setFilteredShows([]); // Clear the filteredShows array when the search bar is empty or not clicked
    }
  }, [searchClicked, searchTerm, shows]);

  return (
    <div>
      {searchClicked && (
        <div>
          {filteredShows.length > 0 ? (
            filteredShows.map((show) => (
              <div key={show.id} className="card" style={{ width: '18rem', margin: '10px' }}>
              <Link> <img src={show.image} alt={show.title} className="card-img-top" /></Link> 
                <div className="card-body">
                  <h5 className="card-title">{show.title}</h5>
                  <p className="card-text">
                    {show.description.length > 100 ? show.description.slice(0, 100) + '...' : show.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Seasons: {show.seasons}</li>
                  <li className="list-group-item">Last Updated: {show.updated}</li>
                  <li className="list-group-item">Genres: {show.genres}</li>
                </ul>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
