import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import GlobalStyle from './styles/GlobalStyles';

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
