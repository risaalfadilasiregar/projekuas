import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import "./Styles.css"
import Home from './components/Home'
import Tabs from './components/Tabs'
import Read from './components/Read'

class App extends Component {
  state = {
    surahs: []
  }
  render () {
    return (
      <Router>
       <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Tabs /> } />
        <Route path="/surah/:surahid" element={ <Read /> } />
        <Route path="*" element={ <Home /> } />
       </Routes>
      </Router>
      )
  }
}
export default App;
