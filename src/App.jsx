import React from 'react';
import Home from './Components/Home';
import Notes from './Components/Notes';
import Users from './Components/Users';
import { Link, Routes, BrowserRouter as Router, Route } from 'react-router-dom';

// install comments : npm install react-router-dom 
function App() {

  const padding = {
    padding: 5,
  }

  return (
    <Router>
      <div>
        <Link to='/' style={padding}>home</Link>
        <Link to='/notes' style={padding}>notes</Link>
        <Link to='/users' style={padding}>users</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/users' element={ <Users />} />
      </Routes>
    </Router>
  )
}

export default App;