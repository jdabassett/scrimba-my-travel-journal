
import './App.css';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import dataArray from './data.js';


export default function App() {
  let cards = dataArray.map(item =>{
    return (
      <Card
          key={item.id}
          item={item}
      />
    )
  })

  return (
    <div className="app-container">
      <Navbar />
      <section className="cards-container">
        {cards}
      </section>
    </div>
  );
}

