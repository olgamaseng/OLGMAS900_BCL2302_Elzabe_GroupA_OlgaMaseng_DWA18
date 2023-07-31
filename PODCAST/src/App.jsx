import React from 'react';
import FetchAPI from './Components/FetchApi.jsx';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar.jsx'


function App()  {
  return (
    <div>
       <PrimarySearchAppBar />
       <FetchAPI />
       {/* <SignInSide /> */}
      {/* <NavBar /> */}
      {/* Other components and content */}
    </div>
  );
}

export default App;

