import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
