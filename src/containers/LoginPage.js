import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextField, Button } from '@material-ui/core';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as urls from '../urls';

const styles = {
    self: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 300
    }
};

export class LoginPage extends PureComponent {

    state = {
        submitting: false,
        username: '',
        password: '',
    };

    render() {
        // const { classes } = this.props;
        const { username, password } = this.state;
        return (
            <form>
                {/*<div className={classes.self}>*/}
                <div>
                    <TextField
                        label="Username"
                        name="username"
                        value={username}
                        onChange={this.handleChangeUsername}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChangePassword}
                    />
                    {/*<Button variant="raised" onClick={this.handleSubmit}>Login</Button>*/}
                </div>
            </form>
        );
    }

}

export default LoginPage;