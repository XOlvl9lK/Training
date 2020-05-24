import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './Components/App.jsx';
import '../scss/style.scss';

import Home from './Components/home/Home.jsx'
import About from './Components/about/About.jsx'
import Services from './Components/services/Services.jsx'
import Contact from "./Components/contact/Contact.jsx";
import News from "./Components/pages/news/News.jsx";
import Blog from "./Components/pages/blog/Blog.jsx";

render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/services' component={Services} />
                <Route path='/news' component={News} />
                <Route path='/blog' component={Blog} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root'));