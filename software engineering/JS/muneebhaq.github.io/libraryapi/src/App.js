// import './App.css';
import Form from './function-components/form'
import Api from './class-components/api'
import GoogleBooksSearch from './function-components/searchpage'
import {Switch, Route, Router} from 'react-router-dom'
import Header from './function-components/header'
import HomePage from './class-components/home'
import Footer from './function-components/footer'

function App() {
  return (
    <div className="App">
    <div>  <Header/></div>
<Switch>
  <Route  component={Api} path="/api"></Route>
  <Route  component={GoogleBooksSearch} path="/searchpage"></Route>
  <Route  component={HomePage} path="/"></Route>
</Switch>
<Footer/>
    </div>
  );
}

export default App;
