import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ImageList from './components/ImageList';
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
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/portfolio' exact>
          <ImageList />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
