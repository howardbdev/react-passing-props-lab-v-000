import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
      fruit: [],
    }
  }

  render() {
    return (
       <FruitBasket />
    );
  }
}
// const App = () => <FruitBasket />;

export default App;
