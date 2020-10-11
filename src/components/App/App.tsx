import React from 'react';
import '../../global.css';
import HomeView from '../../views/HomeView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
   
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomeView} exact />
                </Switch>
            </BrowserRouter>
         
        </div>
    );
}

export default App;
