
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './coponentes/nav';
import { Routing } from './coponentes/routing';
import { Provider } from "react-redux"
import { store } from './store/store';

function App() {
  return (
    <div className="App">


      <Provider store={store}>
        <BrowserRouter>
          <Nav></Nav>
          <Routing></Routing>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
