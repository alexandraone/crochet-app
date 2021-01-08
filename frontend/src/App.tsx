import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import ContactMe from './components/about/ContactMe';
import DefaultLayout from './components/DefaultLayout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
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
            <Portfolio />
          </Route>
          <Route path='/contact-me' exact>
            <ContactMe />
          </Route>
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
