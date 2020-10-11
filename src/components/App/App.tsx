import React from 'react';
import '../../global.css';
import HomeView from '../../views/HomeView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundView from '../../views/NotFoundView';

function App() {
   
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomeView} exact />
                    <Route path="/" component={NotFoundView} />
                </Switch>
            </BrowserRouter>
         
        </div>
    );
}

export default App;
