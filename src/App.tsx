import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Login from 'views/Login'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/' element={<div>Empty Path</div>} />
    </Routes>
  )
}


const App = () => {
  return (
    <Router>
      <Paths />
    </Router>
  )
}

export default App;
