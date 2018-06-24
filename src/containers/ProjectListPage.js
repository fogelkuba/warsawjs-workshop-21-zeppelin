import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { arrayOfProjects } from '../propTypes';
import * as urls from '../urls';
import * as actions from '../actions';
import * as selectors from '../selectors';
// import Loader from ../components/Loader;
import ProjectListItem from '../components/ProjectListItem';

const styles = {
    self: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
};

class ProjectListPage extends PureComponent {

    static propTypes = {
        classes: PropTypes.shape({}).isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired,
        }).isRequired,
        projects: arrayOfProjects,
        readProjectList: PropTypes.func.isRequired,
    };

    state = {
        loading: true,
    };

    // componentDidMount() {
    //     const { readProjectList } = this.props;
    //     readProjectList().finally(() => {
    //         this.setState({ loading: false });
    //     });
    // }

    render(){
        return(
            <div>
                ProjectListPage
            </div>
        )
    }
}

export default withStyles(styles)(ProjectListPage);