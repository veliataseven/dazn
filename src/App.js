import React from 'react';
import Films from './Films';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Film from './Film';
import './index.css';
import Navbar from './Navbar';
import Search from './Search';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Films} />
          <Route path="/search" component={Search} />
          <Route path="/:filmIndex" component={Film} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
