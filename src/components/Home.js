import React, { Component } from "react";
import ApplicationForm from "./applicationForm";
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getJobsActions } from '../redux/actions/jobsActions';

class Home extends Component {
    componentDidMount() {
     
          this.props.getJobsActions();
      }
  render() {
    return (
        
      <div>
        <ApplicationForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		Jobs: state.jobs
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getJobsActions: (userInfo) => dispatch(getJobsActions(userInfo)),
	
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));