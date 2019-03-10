import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import About from './about';
import Design from './design';
import Dev from './dev';
import Blog from './blog';
import Contact from './contact';


class NavBar extends Component {
    render(){
        return(
            <HashRouter>
            <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-nav">
                    <h6 className="nav-item nav-link"><NavLink exact to="/">oluwaseun afolayan</NavLink></h6>
                    <h6 className="nav-item nav-link"><NavLink to="/design">design</NavLink></h6>
                    <h6 className="nav-item nav-link"><NavLink to="/dev">dev</NavLink></h6>
                    <h6 className="nav-item nav-link"><NavLink to="/blog">blog</NavLink></h6>
                    <h6 className="nav-item nav-link"><NavLink to="/contact">contact</NavLink></h6>
                </div>
            </nav>
            <div className="content">
                <Route exact path="/" component={About}/>
                <Route path="/design" component={Design}/> 
                <Route path="/dev" component={Dev}/> 
                <Route path="/blog" component={Blog}/> 
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </HashRouter>
        );
    }
}
export default NavBar;