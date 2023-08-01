import React from 'react'
import FetchAPI from '../Components/FetchApi';
import ShowDetails from '../Components/SeasonsAndPreview';


export default function GenrePage() {
    return (
      <div>
        <FetchAPI />
        <ShowDetails />


      </div>
    );
  }