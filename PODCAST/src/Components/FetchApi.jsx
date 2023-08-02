import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FetchAPI() {
  const url = "https://podcast-api.netlify.app/shows";
  const [dataId, setDataId] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataId(data);
      });
  }, []);

  return (
    <div className="container">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
