import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FetchAPI() {
  const url = "https://podcast-api.netlify.app/shows";
  const [dataId, setDataId] = useState([]);
  const [sortingOption, setSortingOption] = useState('A-Z'); // Default sorting option

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataId(data);
      });
  }, []);

  const sortSeasons = (option) => {
    setSortingOption(option);
    let sortedData = [...dataId];
    switch (option) {
      case 'A-Z':
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Z-A':
        sortedData.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'Last Updated':
        sortedData.sort((a, b) => b.last_updated.localeCompare(a.last_updated));
        break;
      case 'Recently Updated':
        sortedData.sort((a, b) => a.last_updated.localeCompare(b.last_updated));
        break;
      default:
        break;
    }
    setDataId(sortedData);
  };

  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-md-12">
          <select value={sortingOption} onChange={(e) => sortSeasons(e.target.value)}>
            <option value="A-Z">Title A-Z</option>
            <option value="Z-A">Title Z-A</option>
            <option value="Last Updated">Last Updated</option>
            <option value="Recently Updated">Recently Updated</option>
          </select>
        </div>
      </div>
      <div className="row">
        {dataId.map((show) => (
          <div key={show.id} className="col-md-2 mb-2">
            <div className="card">
              <Link to={`/seasons/${show.id}`}>
                <img src={show.image} className="card-img-top" alt="show cover" />
              </Link>
              <div className="card-body">
                {/* <p className="card-text">{show.description}</p> */}
                <p>Seasons: {show.seasons}</p>
                <p> {show.updated}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
