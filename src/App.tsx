import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import DefaultLayout from './components/DefaultLayout';
import Home from './components/Home';
import ImageList from './components/ImageList';
import GlobalStyle from './styles/GlobalStyles';

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <DefaultLayout>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/portfolio' exact>
            <ImageList />
          </Route>
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
