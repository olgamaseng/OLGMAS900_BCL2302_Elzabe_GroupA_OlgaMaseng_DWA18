import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from "./Pages/Home";
import GenrePage from "./Pages/Genre";
import SeasonsPage from "./Pages/Seasons";

export default function App() {
  return (
    <BrowserRouter>
      
      <>
      
      <Link to="/"></Link>
         <Link to="/genre"></Link>
        <Link to="/seasons"></Link>

      </>
      
      <Routes>

           <Route path="/" element={<HomePage/>} />
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/seasons" element={<SeasonsPage />} />
        
      
      </Routes>
    </BrowserRouter>
  )
}

