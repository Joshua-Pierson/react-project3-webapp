import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ShoppingList from './components/ShoppingList'
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header />
    <ShoppingList />
    <Contact />
    <Footer />

    </>
   
  );
}

export default App;
