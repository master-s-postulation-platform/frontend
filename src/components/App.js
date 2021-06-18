import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Landing from './landing/Landing';

class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Landing />
        <Footer />
      </>
    )
  }
}

export default App;