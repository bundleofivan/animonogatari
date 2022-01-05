import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import LoginView from 'views/LoginView'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginView />} />
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
