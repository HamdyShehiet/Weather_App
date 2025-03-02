import './assets/styles/App.css'
import Home from './components/pages/Home.jsx'
import Download from './components/pages/Download.jsx'
import Contact from './components/pages/Contact.jsx'
import Header from './components/layouts/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/download' element={<Download />}/>
            <Route path='/download' element={<Contact />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
