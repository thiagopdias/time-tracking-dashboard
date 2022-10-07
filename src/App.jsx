import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/layout/Footer'

import Daily from './components/pages/Daily'
import Weekly from './components/pages/Weekly'
import Monthly from './components/pages/Monthly'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Daily />}/>

        <Route path="/weekly" element={<Weekly />}/>

        <Route path="/monthly" element={<Monthly />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
