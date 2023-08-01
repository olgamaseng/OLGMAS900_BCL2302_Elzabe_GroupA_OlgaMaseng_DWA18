
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


export default function FetchAPI() { 
    
    const url = "https://podcast-api.netlify.app/shows" 

    const [dataId, setDataId] = useState([]) 

    useEffect(() => {
        fetch(url) 
        .then((response) => response.json())
         .then((data) => {
         const fetching = data.map((show) => { 
            return( 
        
        <div key={show.id} className="show-container">
         
        <Link to={`/genre/${show.id}`}>          
                <img src={show.image} width = "20%"/> 
                
               </Link>  
         <p>{show.id}</p> 
         <p>{show.description}</p> 
         <h1>{show.title}</h1>
          {/* <p>{show.genres}</p>
           <p>{show.updated}</p>  
           <h1>{show.seasons}</h1>  */}
           </div> )
            }); 
           
           setDataId(fetching); }) }, 
           []);
            return <div>{dataId}</div> }

            