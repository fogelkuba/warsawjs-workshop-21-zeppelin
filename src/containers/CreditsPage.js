import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';

const styles = {
    self: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
};

class CreditsPage extends PureComponent {
    render(){
        return(
            <div>
                CreditsPage
            </div>
        )
    }
}

export default withStyles(styles)(CreditsPage);