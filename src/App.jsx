import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { auth } from "./components/mvpstudio/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Home from './Home'
import About from './About'
import Talents from './Talents'
import Contact from './Contact'
import ScrollToTop from './ScrollToTop'
import Mvpstudio from './components/Mvpstudio'
import TalentsForm from './components/talents/Talentsform'
import ProjectDetails from './components/mvpstudio/ProjectDetails'
import Services from './Services'
import ProjectUploadForm from './components/mvpstudio/ProjectUploadForm'
import Login from './components/mvpstudio/Login'


function App() {

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);
  if (user === undefined) return null; // or loading spinner
  return user ? children : <Navigate to="/login" />;
};

  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/about' element={ <About/> }/>
      <Route path='/talents' element={ <Talents/> }/>
      <Route path='/contact' element={ <Contact/> }/>
      <Route path='/mvpstudio' element={ <Mvpstudio/> }/>
      <Route path='/services' element={ <Services/> }/>
      <Route path='/talentsform' element={<TalentsForm/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/projectupload" element={
  <ProtectedRoute>
    <ProjectUploadForm />
  </ProtectedRoute>
} />
      <Route path='/project/:tab/:category/:idx' element={<ProjectDetails/>}/>
    </Routes>
    <ScrollToTop/>
    </BrowserRouter> 
    </>
  )
}

export default App
