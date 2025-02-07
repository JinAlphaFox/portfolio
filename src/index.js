import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Navigation from './components/Navigation'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
