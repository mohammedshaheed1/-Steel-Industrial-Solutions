import React from 'react';
import Home from './pages/Home';
import Descriptions from './pages/Descriptions';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';

const App = () => {
  return (
    <div>
       <Home/>
       <Descriptions/>
       <Services/>
       {/* <ServiceDetails/> */}
       <Contact/>
       <Footer/>
       
    </div>
  );
}

export default App;
