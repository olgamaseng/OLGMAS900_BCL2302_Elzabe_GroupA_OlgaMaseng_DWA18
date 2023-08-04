import React, { useState, useEffect } from 'react';

const RandomImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows') // Update the API URL here
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an array of image URLs under the "image" key
        // Adjust the data structure accordingly based on the actual API response
        const imageUrls = data.map((item) => item.image);
        setImages(imageUrls);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="randomImageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={image}
              className="d-block w-100"
              style={{ maxHeight: '300px', objectFit: 'contain' }} // Set the maximum height and image fit style
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#randomImageCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#randomImageCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default RandomImageCarousel;
