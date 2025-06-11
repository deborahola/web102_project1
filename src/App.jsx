import './App.css';
import Card from './components/Card';
import { movies } from './data';

const App = () => {

  return (

    <div className="app">
      <header>
        <h1>🍿 Movie Night Picks 🍿</h1>
        <p>Your weekly movie recommendations!</p>
      </header>
      <div className="card-grid">
        {movies.map((movie, idx) => (
          <Card key={idx} {...movie} />
        ))}
      </div>
    </div>

  );

}

export default App;
