import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Galery from './components/Galery.jsx';
import ListItems from './components/ListItems.jsx'
import './style.css';
import './App.css';

function App() {
  return(
    <main>
      <Header />
      <Galery />
      <ListItems />
      <Footer />
    </main>
  )
}


export default App