import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Testimonials from './components/home/Testimonials'
import Frequentlyaskedquestions from './components/home/Frequentlyaskedquestions'
import About from './About'
import Talents from './Talents'
import Contact from './Contact'
import ScrollToTop from './ScrollToTop'
import Mvpstudio from './components/Mvpstudio'
import TalentsForm from './components/talents/Talentsform'
import ProjectDetails from './components/mvpstudio/ProjectDetails'

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/testimonials' element={ <Testimonials/> }/>
      <Route path='/faq' element={ <Frequentlyaskedquestions/> }/>
      <Route path='/about' element={ <About/> }/>
      <Route path='/talents' element={ <Talents/> }/>
      <Route path='/contact' element={ <Contact/> }/>
      <Route path='/mvpstudio' element={ <Mvpstudio/> }/>
      <Route path='/talentsform' element={<TalentsForm/>}/>
      <Route path='/project/:tab/:category/:idx' element={<ProjectDetails/>}/>
    </Routes>
    <ScrollToTop/>
    </BrowserRouter> 
    </>
  )
}

export default App
