import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const IsUserRedirect= ({user, loggedInPath, children, ...props}) => {
    console.log('entro 1');
    //check if user object exists ...State
    return ( 
        <Route {...props}
          render={() => {
            //what to render if user is in store.. localstorage
            if(user == null){
              return children//render page or component ... user props
            }
            console.log('el user', user);
            if(user === ""){
              console.log('entro 2');
              return (<Redirect 
                to={{
                  pathname: loggedInPath
                }}
              />);
            }

            return null;
          }}
        />
     );
}
export default IsUserRedirect;