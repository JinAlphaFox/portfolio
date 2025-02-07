import './App.scss'
import Navigation from '../../components/Navigation'
import Banniere from '../../components/Banniere'
import Skills from '../../components/Skills'
import Apropos from '../../components/Apropos'
import Projets from '../../components/Projets'
import Formation from '../../components/Formation'

function App() {
  return (
    <div className="App">
      <header>
        <Banniere />
        <Navigation />
      </header>
      <main>
        <Apropos />
        <Skills />
        <Formation />
        <Projets />
      </main>
      <footer></footer>
    </div>
  )
}

//<img src={logo} className="App-logo" alt="logo" />
export default App
