import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route }   from 'react-router-dom';
import { createStore} from 'react-redux';
import {withStyles, CssBaseline} from '@material-ui/core';
import { LoginPage } from './containers/LoginPage';
import * as urls from 'urls';

import './App.css';


class App extends Component {
  render() {
    return (
        <CssBaseline>
            <BrowserRouter>
                <Route path={urls.LOGIN} exact component={LoginPage}/>
                <Route path={urls.LOGIN} exact component/>
            </BrowserRouter>
        </CssBaseline>
    );
  }
}

export default App;
