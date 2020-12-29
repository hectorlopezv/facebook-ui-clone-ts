import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';

export interface AppProps {
  
}
 
const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
        {/*Header */}
        <Header />
        {/*App Body*/}
          {/*Sidebar*/}
          
          {/*Feed */ }
            {/*Stories*/}
            {/*Mesasge*/}
            {/*Posts*/}
          
          {/*Widgets*/}


    </div>
  );
}
 
export default App;

