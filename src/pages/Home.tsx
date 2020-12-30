import React from 'react';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Feed/Widgets/Widgets';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';

export interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return ( 
        <div className="app">
            <Header />
            <div className="app__body">
                <SideBar />
                <Feed />
                <Widgets />
            </div>
        </div>

     );
}
 
export default Home;