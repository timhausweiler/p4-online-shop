import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { verifyUser } from './services/users';

import Login from './components/Login';

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
      <Routes>
        <Route path='/' element={<div>Welcome!</div>}/>
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
