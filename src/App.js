import {BrowserRouter, Switch, Route} from 'react-router-dom';
import contato from './pages/contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

import Header from './components/Header';

import Footer from './components/Footer';

import './styles.css';

const Routes = () => {
  return(
    <BrowserRouter>
    <Header/>

    <Switch>  
      <Route exact={true} path="/" component ={Home} /> 
      <Route path="/contato"        component ={contato} /> 
      <Route path="/sobre"         component ={Sobre} /> 
    </Switch>

    <Footer/>
    
    </BrowserRouter>

  )

}

export default Routes;
