import React, { useState } from 'react';
import { Navbar, Footer } from './components';
import { login_pages } from './pages';

function App() {
  const [navbar, setNavbar] = useState(false)

  if(navbar === false){
    return(
      <>
      <login />
      <button type="button" onClick={() => setNavbar(!navbar)}>anak lonte</button>
      </>
    )
  }
  return (
    <>
      <Navbar />
      <login_pages />
      <button type="button" onClick={() => setNavbar(!navbar)}>anak lonte</button>
      <Footer />
    </>
  );
}
export default App;
