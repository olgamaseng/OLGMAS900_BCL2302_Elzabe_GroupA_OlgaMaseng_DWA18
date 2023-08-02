import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShowDetails() {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    fetch(`https://podcast-api.netlify.app/id/${id}`)
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
    <div  style={{
      backgroundColor: 'purple',
      color: 'white',
      border: 'none',
      borderRadius: '10px',

    }}>
      {loading ? (
        <button>Loading.....</button>
      ) : (
        seasons.length > 0 ? (
          seasons.map((season) => (
            <div key={season.seasons}>
              <img src={season.image} alt="Season cover"  width="80"
            height="50" />
              <h2>{season.title}</h2>
              <h4>{season.description}</h4>

              <h4>Episodes:</h4>
              {season.episodes.map((episode) => (
                <div key={episode.id}>
                  <h3>{episode.title}</h3>
                  <p>{episode.description}</p>
                  <p> <audio controls>
  <source src= {episode.file} type="audio/mpeg"/>
</audio> </p>
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
