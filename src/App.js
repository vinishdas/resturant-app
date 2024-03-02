
import './App.css';
import NavBar from './NavBar';
import Cards from './Cards';
import { useState } from 'react';


import foodimage from './images/v1qn6rdgridfthdhtfhz.avif';
import foodimage2 from './images/bnmbixown8g34zeepl04.avif';
import foodimage3 from './images/e0yrmomoghrzwippqo0v.avif';
import foodimage4 from './images/f01666ac73626461d7455d9c24005cd4.avif';
import foodimage5 from './images/noezwghfkmx4pq6oyqbx.avif';
import foodimage6 from './images/ph7ctl4wwqkciajeds7q (1).avif';
import foodimage7 from './images/wlmsgntdtaqpb1l9q6pc.avif';
import foodimage8 from './images/bnmbixown8g34zeepl04.avif';
import Apple from './Apple.jsx';



function App() {

  const foods = [
    {
      name: 'ice-cream',
      price: 70,
      image: foodimage,
      category: 'pizza',
    },
    {
      name: 'Dosa',
      price: 80,
      image: foodimage2,
      category: 'sandwich',
    },
    {
      name: 'smoothie',
      price: 100,
      image: foodimage3,
      category: 'sandwich',
    },
    {
      name: 'KFC',
      price: 900,
      image: foodimage4,
      category: 'sandwich',
    },
    {
      name: 'Masala Dosa',
      price: 60,
      image: foodimage5,
      category: 'sandwich',
    },
    {
      name: 'Biryani',
      price: 150,
      image: foodimage6,
      category: 'sandwich',
    },
    {
      name: 'Masala Dose',
      price: 90,
      image: foodimage7,
      category: 'sandwich',
    },
    {
      name: 'Combo',
      price: 700,
      image: foodimage8,
      category: 'sandwich',
    },
    {
      name: 'Sandae',
      price: 300,
      image: foodimage,
      category: 'sandwich',
    },
    {
      name: 'Open Dosa',
      price: 70,
      image: foodimage5,
      category: 'sandwich',
    },
    {
      name: 'Ice-Cream',
      price: 100,
      image: foodimage,
      category: 'sandwich',
    },
    {
      name: 'Ice-Cream',
      price: 120,
      image: foodimage,
      category: 'sandwich',
    },
    {
      name: 'Ice-Cream',
      price: 140,
      image: foodimage,
      category: 'sandwich',
    },
  ]
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignUp = (formData) => {
    // Your sign-up logic goes here
    console.log(formData); // For demonstration, log form data
    setIsSignedIn(true); // Assuming sign-up is successful, set isSignedIn to true
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>

        <div className='content'>

          <div className='CARD_content'>
            <Cards foods={foods} />
          </div>

        </div>


      </div>
      <footer>
        Copyright &copy; {new Date().getFullYear()}
      </footer>


    </>
  );
}

export default App;
