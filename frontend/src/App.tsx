


import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {   BrowserRouter,
  
  Route,
  Routes
  } from 'react-router-dom';
function App() {

  return (
    <>
    <Navbar/>
  
      <BrowserRouter>
      <Routes>
        <Route  path="/signup" element={<SignupPage/>}>
          
        </Route>
        <Route path="/login" element={<LoginPage />}>
          
        </Route>
      </Routes>
      </BrowserRouter>
    
   
    
    </>
  )
}

export default App
