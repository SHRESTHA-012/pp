import { Route, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, Contact, Projects, About } from './pages';

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <main className={isHome ? 'bg-transparent h-full' : 'bg-[#0d0d0d] h-full min-h-screen'}>
      <Navbar isHome={isHome} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

