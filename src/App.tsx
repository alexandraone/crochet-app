import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import DefaultLayout from './components/DefaultLayout';
import Footer from './components/Footer';
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
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
