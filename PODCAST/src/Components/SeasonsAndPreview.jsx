import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShowDetails() {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    fetch(`https://podcast-api.netlify.app/id/`)
      .then((response) => response.json())
      .then((data) => {
        setSeasons(data.seasons);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <button>Loading.....</button>
      ) : (
        seasons.length > 0 ? (
          seasons.map((seasons) => (
            <div key={seasons.seasons}>
              <img src={seasons.image} alt="Season cover" />
              <h2>{seasons.title}</h2>
              <h4>{seasons.description}</h4>
              <h4>Episodes:</h4>
              {seasons.episodes.map((episode) => (
                <div key={episode.id}>
                  <h3>{episode.title}</h3>
                  <p>{episode.description}</p>
                  <p>{episode.file}</p>
                  {/* Render other episode details here */}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No data available for this show.</p>
        )
      )}
    </div>
  );
}
