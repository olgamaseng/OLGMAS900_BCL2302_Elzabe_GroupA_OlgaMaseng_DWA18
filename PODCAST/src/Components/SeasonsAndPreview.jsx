import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShowDetails() {
  const params = useParams();
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
 

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${params.id}`)
      .then((response) => response.json())
      .then((data) => setSeasons(data.seasons));
  }, [params.id]);

  const handleSeasonClick = (season) => {
    if (selectedSeason && selectedSeason.season === season.season) {
      // Clicked the same season button again to close
      setSelectedSeason(null);
    } else {
      setSelectedSeason(season);
    }
  };
return (
    <div>
      
      {seasons.length > 0 ? (
        seasons.map((season) => (
          <div key={season.season}>
            <button onClick={() => handleSeasonClick(season)}>
              <p>{season.description}</p>
              <img src={season.image} width="20%" alt={season.title} />
              {season.title}
            </button>
            {selectedSeason && selectedSeason.season === season.season && (
              <div>
                {selectedSeason.episodes.map((episode) => (
                  <div
                    key={episode.id}
                    style={{
                      backgroundColor: "purple",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  >
                    <h3>{episode.title}</h3>
                    <audio controls>
                      <source src={episode.file} />
                    </audio>
                    {/* Render other episode details here */}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <h2>Loading.....</h2>
      )}
    </div>
  );
}