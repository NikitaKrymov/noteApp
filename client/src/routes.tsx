import { Router, Route } from 'react-router-dom';
import React from 'react';
import history from './history';
import Notebook from './components/notebookComponents/Notebook';
import Dashboard from './components/dashboard/Dashboard';

export const createRoutes = () => (
    <Router history={history}>
        <Route path="/" exact component = {Dashboard} />
        <Route path="/:id" exact component={Notebook} />
    </Router>
);