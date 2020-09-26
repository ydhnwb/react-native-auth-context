import React from 'react';
import NavigationContainerStack from './src/routes/Routes';
import { Store } from './src/stores/Store';

const App = () => {
  return (
    <Store>
      <NavigationContainerStack/>
    </Store>
  );
};


export default App;
