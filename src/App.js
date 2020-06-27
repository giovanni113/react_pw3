import React from 'react'
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

import Logo from './css/images/Logo.png'

export default () =>
    <div className="Nav-Bar">
        <ul>
            <li className="Nav-Bar-Item"> <img src={Logo} alt="" className="Nav-Bar-Img" /> </li>
            <li className="Nav-Bar-Item"> <input type="text" placeholder="Pesquisa" className="Nav-Bar-Input" /> </li>
            <BrowserRouter>
            <NavLink to="/Home" className="Nav-Bar-Item"> <button className="Nav-Bar-Home-Button"> Home </button> </NavLink>
            <NavLink to="/About" className="Nav-Bar-Item"> <button className="Nav-Bar-About-Button"> About </button> </NavLink>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Home" component={Home} />
                <Route path="/About" component={About} />
            </Switch>
            </BrowserRouter>
        </ul>
    </div>