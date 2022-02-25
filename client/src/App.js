import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { verifyUser } from './services/users';
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import ProductsContainer from './components/ProductsContainer'

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
  }


  return (
    <div className="App">
      <Navbar currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path='/' element={
          <>
            <div className='banner-master-container'>
            <div className='banner-container'>
              <div className='banner-text-container'>
                <h1>The new Pixel 6 phones are here.</h1>
                <p>Powered by Google Tensor, Google’s first custom-built processor, they’re fast and secure. And they adapt to you.</p>
                <button>Learn more</button>
              </div>
              <img src="https://i.imgur.com/oBzbXfa.png" className='banner-image'/>
            </div>
            </div>
            <h2>New on the Google Store.</h2>
          </>} />
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>} />
        <Route path='/register' element={<Register setCurrentUser={setCurrentUser}/>} />
        <Route path='/products/*' element={<ProductsContainer currentUser={currentUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
