import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/HeaderUpdated';
import Footer from './components/Footer';
import TaglineBar from './components/TaglineBar';
import Projects from './components/Projects';
import WebDevelopment from './components/WebDevelopment';
import GraphicDesign from './components/GraphicDesign';
import Animation from './components/Animation';
import AppDevelopment from './components/AppDevelopment';
import EBook from './components/EBook';
import PPCScreen from './components/PPC';
import BusinessAnalysisScreen from './components/Ba';
import ProjectManagementScreen from './components/PM';
import SMMScreen from './components/DigitalMarketing';
import DigitalMarketingScreen from './components/DigitalMarketing';

function App() {
    return (
        <Router>
            <div className="App">
                <TaglineBar />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/web-development" element={<WebDevelopment />} />
                    <Route path="/graphic-design" element={<GraphicDesign />} />
                    <Route path="/app-development" element={<AppDevelopment />} />
                    <Route path="/animations" element={<Animation />} />
                    <Route path="/ebook" element={<EBook />} />
                    <Route path="/pay-per-click" element={<PPCScreen />} />
                    <Route path="/business-analysis" element={<BusinessAnalysisScreen />} />
                    <Route path="/project-management" element={<ProjectManagementScreen />} />
                    <Route path="/digital-marketing" element={<DigitalMarketingScreen />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
