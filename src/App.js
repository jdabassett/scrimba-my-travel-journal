
import './App.css';
import Navbar from './components/Navbar.jsx';
import MainContents from './components/MainContents.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <MainContents />
    </div>
  );
}

