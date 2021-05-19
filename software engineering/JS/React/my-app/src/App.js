import React from 'react';
import Navigation from './Navigation';
import Text from './text';
import PassingProps from './passingProps';
import Guest from './reactComponent';
import Hooks from './useState'
import Counter from './setState'
import Toggle from './eventHandling'
import NameForm from './reactForm'

function App() {
  return (
      <div className="greeting">
        <Navigation/>
        <PassingProps fname="Jacob" lname="Javit" initial="JJ"/>
        <Text/>
        <Guest/>
        <Hooks/>
        <Counter/>
        <Toggle/>
        <NameForm/>
      </div>
      

    
  );
}

export default App;
