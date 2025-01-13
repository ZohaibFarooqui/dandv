import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services'; // Updated to use the new component
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/HeaderUpdated'; // Updated to use the new Header
import Footer from './components/Footer';
import './stylesUpdated.css'; // Importing the updated styles

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
