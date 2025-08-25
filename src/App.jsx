import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { auth } from "./components/mvpstudio/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import ScrollToTop from './ScrollToTop'
import Services from './Services'
import Login from './components/mvpstudio/Login'
import ProjectDetails from './components/mvpstudio/ProjectDetails';

// Lazy-loaded components
const Talents = lazy(() => import('./Talents'));
const Mvpstudio = lazy(() => import('./components/Mvpstudio'));
const TalentsForm = lazy(() => import('./components/talents/Talentsform'));
const ProjectUploadForm = lazy(() => import('./components/mvpstudio/ProjectUploadForm'));


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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center herobg flex-col gap-5">
      <img src='/logo1.png' className='max-md:hidden scale-50 inline-block'/>
      <p className='text-lg md:text-xl font-semibold'><span className='md:hidden text-indigo-800 font-bold text-xl'>MVP Studio</span>  is loading...</p>
      </div>}>
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
    </Suspense>
    <ScrollToTop/>
    </BrowserRouter> 
    </>
  )
}

export default App
