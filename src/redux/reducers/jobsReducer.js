import { GET_JOBS_FAILURE, GET_JOBS_SUCCESS, GET_JOBS } from '../types/jobsTypes';

const initialState = {
	loading: 'block',
	requests: [],
	error: '',
	open: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_JOBS:
			return {
				...state,
				loading: 'block',
				open: false
			};
		case GET_JOBS_SUCCESS:
			return {
				loading: 'none',
				requests: action.payload,
				error: '',
				open: false
			};
		case GET_JOBS_FAILURE:
			return {
				loading: 'none',
				requests: [],
				error: action.payload,
				open: true
			};
		default:
			return state;
	}
};

export default reducer;
