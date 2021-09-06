import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import OurSolutions from './OurSolutions';
import Newsletter from './Newsletter';
import Banner from './Banner';
import Brands from './Brands'
import Header from './Header'
import './App.scss'


function App() {

  const [BookData, setBookData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=500');
      setBookData(response.data.results);
    })();
  }, []);

  return (
    <div className="App">
      <Header placeholder="Buscar" data={BookData} />
      <Banner />
      <Brands />
      <OurSolutions />
      <About />
      <Contact />
      <Newsletter />
      <Footer />

    </div>
  );
};

export default App;
