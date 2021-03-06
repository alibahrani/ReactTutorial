import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import expenseDashboardPage from '../components/expenseDashboardPage';

import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/PageNotFound';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';



const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/"  component={expenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id"  component={EditExpensePage} />
            <Route path="/help"  component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>    
    
    </div>
        
    </BrowserRouter>

);

export default AppRouter;