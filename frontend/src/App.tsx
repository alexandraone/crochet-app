import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import ContactMe from './components/about/ContactMe';
import DefaultLayout from './components/DefaultLayout';
import Home from './components/Home';
import Pattern from './components/PatternDescription';
import Portfolio from './components/Portfolio';
import ScrollToTop from './helpers/ScrollToTop';
import GlobalStyle from './styles/GlobalStyles';

const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path='/pattern/:id' exact>
            <Pattern />
          </Route>
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
