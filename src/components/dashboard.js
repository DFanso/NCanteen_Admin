import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import SearchFood from './searchfood';
import './dashboard.css';


import AllOrderHistory from './allorderhistory';

import OrderHistory from './orderSearch';

import FoodManagement from './foodmanagement';

function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-content">
                <Sidebar />
                <div className="dashboard-main">
                    <Switch>
                        <Route exact path="/dashboard/welcome">
                            <>
                                <h1>Welcome to N- Canteen Admin System</h1>
                                <img
                                    src="https://drive.google.com/uc?export=view&id=1slvbHnVs88jYb2wyxOgUsN97VR-HzxFz"
                                    alt="Food Management System"
                                    className="dashboard-image"
                                />
                            </>
                        </Route>
                        <Route path="/dashboard/search-food" component={SearchFood} />
                        <Route path="/dashboard/food-management" component={FoodManagement} />
                        <Route path="/dashboard/order-history" component={OrderHistory} />
                        <Route path="/dashboard/all-order-history" component={AllOrderHistory} />
                        <Redirect from="/dashboard" to="/dashboard/welcome" />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
