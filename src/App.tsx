import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from "./component/nav.tsx";
import Footer from "./component/footer.tsx"
import './App.css';

function App() {
  

  return (
    <>
    <header className=''>
      <Nav />
    </header>
    <main className='mt-40'>
    <Outlet context={{}} />
    </main>
    <footer className='bg-[#C4DAD2]'>
      <Footer />
    </footer>
    
    </>
  )
}

export default App
