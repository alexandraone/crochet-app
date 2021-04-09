import ApolloClient from 'apollo-boost';
import React, { FC } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import ContactMe from './components/about/ContactMe';
import DefaultLayout from './components/DefaultLayout';
import Home from './components/Home';
import PatternDescription from './components/PatternDescription';
import Portfolio from './components/patterns/Portfolio';
import ScrollToTop from './helpers/ScrollToTop';
import GlobalStyle from './styles/GlobalStyles';

const client = new ApolloClient({
  //uri: 'http://localhost:8001/graphql',
  uri: 'http://sternax.se/virkning/wp/graphql',
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <Switch>
          <DefaultLayout>
            <Route path='/virkning' exact>
              <Home />
            </Route>
            <Route path='/virkning/about' exact>
              <About />
            </Route>
            <Route path='/virkning/contact-me' exact>
              <ContactMe />
            </Route>
            <Route path='/virkning/pattern/:slug' exact>
              <PatternDescription />
            </Route>
            <Route path='/virkning/portfolio' exact>
              <Portfolio />
            </Route>
          </DefaultLayout>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
