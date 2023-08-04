import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const genres = {
  1: "Personal Growth",
  2: "True Crime and Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family",
};

const SearchFilter = ({ searchTerm, searchClicked }) => {
  // Rest of your existing code...

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
                  <li className="list-group-item">Genres: {show.genres.map(genreId => genres[genreId]).join(', ')}</li>
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
