import axios from 'axios';
import { GET_JOBS_FAILURE, GET_JOBS_SUCCESS, GET_JOBS } from '../types/jobsTypes';

export const getJobsActions = () => async (dispatch) => {
	try {
		dispatch(getJobs());
		const token = localStorage.getItem('bn-token');
		const header = {
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': `${token}`
			}
		};
        const res = await axios.get(`http://localhost:4000/api/v1/application/jobs`, header);
        console.log(res)
		dispatch(getJobsSuccess(res));
	} catch (err) {
		if (err.response) {
			const errorMessage = await err.response.data.error;
			dispatch(getJobsFailure(errorMessage));
		} else {
			dispatch(getJobsFailure('Network Error'));
		}
	}
};

export const getJobs = () => {
	return {
		type: GET_JOBS
	};
};

export const getJobsSuccess = (user) => {
	return {
		type: GET_JOBS_SUCCESS,
		payload: user
	};
};
export const getJobsFailure = (error) => {
	return {
		type: GET_JOBS_FAILURE,
		payload: error
	};
};
