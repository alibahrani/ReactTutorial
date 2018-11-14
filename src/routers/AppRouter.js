import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import expenseDashboardPage from '../components/expenseDashboardPage';
import expensedPage from '../components/expensePage'
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/PageNotFound';
import Header from '../components/Header';



const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/"  component={expenseDashboardPage} exact={true}/>
            <Route path="/create" component={expensedPage} />
            <Route path="/edit/:id"  component={EditExpensePage} />
            <Route path="/help"  component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>    
    
    </div>
        
    </BrowserRouter>

);

export default AppRouter;