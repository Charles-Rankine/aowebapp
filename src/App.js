import './App.css';
import CardListSearch from './components/CardListSearch'

const App = () => {
  return (
    <div className="App container">
      <div className="row justify-content-center">
        <h1>Amazon Items</h1>
        <CardListSearch/>
      </div>
    </div>
  );
}

export default App;
