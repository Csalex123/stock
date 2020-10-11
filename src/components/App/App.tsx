import React from 'react';
import '../../global.css';
import HomeView from '../../views/HomeView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundView from '../../views/NotFoundView';
import LoginView from '../../views/LoginView';
import ProfileView from '../../views/ProfileView';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomeView} exact />
                    <Route path="/login" component={LoginView} exact />
                    <Route path="/profile" component={ProfileView} exact />
                    <Route path="/" component={NotFoundView} />
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
