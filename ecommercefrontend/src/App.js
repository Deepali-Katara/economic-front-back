import './App.css';
import React  from 'react'
import {BrowserRouter,Route ,Switch} from 'react-router-dom' 
import {Home} from "./components/Home"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Login} from "./components/Login"
import {Signup} from "./components/Signup"
import {Items} from "./components/Items"
import {Excelimport} from "./components/Excelimport"
import Excelexport from "./components/Excelexport"
import Exportpdf from "./components/Exportpdf"
import Screencapture from "./components/Screencapture"

function App() {
  return (
    <BrowserRouter>
  <Header/>
  
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/items" component={Items}/>
      <Route exact path="/excelimport" component={Excelimport} />
      <Route exact path="/excelexport" component={Excelexport} />
      <Route exact path="/exportpdf" component={Exportpdf} />
       <Route exact path="/screencapture" component={Screencapture} />
      <Route component={Error}/>
    </Switch>
  <Footer/>
    {/* </div> */}
      </BrowserRouter>
  );
}

export default App;
