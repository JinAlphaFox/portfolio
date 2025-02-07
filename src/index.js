import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home/'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Error from './pages/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
