import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';


function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="logo-container">
                <img src='https://drive.google.com/uc?export=view&id=1uTOYzoz3mdEo7dkV8vtnZz3TeMmTWoFB' alt="Logo" />
            </div>
            <ul>
                <li>
                    <NavLink to="/dashboard/welcome" activeClassName="active">
                        Welcome
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/search-food" activeClassName="active">
                        Search Food
                    </NavLink>
                </li>
                {/* Add other navigation items here */}
                <li>
                    <NavLink to="/dashboard/food-management" activeClassName="active">
                        Food Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/order-history" activeClassName="active">
                        Order Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/all-order-history" activeClassName="active">
                        Order History
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
