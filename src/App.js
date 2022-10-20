import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/Home">Home</a>
              <a className="nav-link active" href="/Products">Items</a>
              <a className="nav-link active" href="/Contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
