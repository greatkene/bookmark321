/* eslint-disable no-unused-vars */
import { BiDownload } from 'react-icons/bi';
import './App.css';
import Navbar from './Navbar/Navbar';
import Features from './Sections/Features';
import Hero from './Sections/Hero';
import Download from './Sections/Download'
import Faq from './Sections/Faq'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Download />
      <Faq/>
    </>     
    )
    }


export default App;
