import MindfulMoments from './images/MindfulMoments.png';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${MindfulMoments})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        opacity: 0.9, // Reduce image opacity for better visibility
      }}
    >
     
      <Link to='/home'   style={{
            marginLeft: '20rem',
            marginTop: '28rem',
            padding: '10px 30px',
            fontSize: '20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}>
        
          Home
  
      </Link>
    
    </div>
  );
}
