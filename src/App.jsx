import Homepage from "./components/pages/homepage/homepage"
import About from "./components/pages/about/about"
import Contact from "./components/pages/contact/contact"
import Services from "./components/pages/services/services"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  

  return (
   

    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Services />} />
      


        {/* <Route exact path="/cards" element={<Cards />} />
        <Route exact path="/connect" element={<Connect />} />
        <Route exact path="/newcard" element={<Newcard />} /> */}
      </Routes>
    </Router>

  )
}

export default App
