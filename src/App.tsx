import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

export interface AppProps {
  
}
 
const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
        {/*Header */}
        <Header />

        <div className="app__body">
           <SideBar />
        </div>
       
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

