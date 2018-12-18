const INITIAL_STATE = {
	forecastData: [],
	loading: true
}

const FetchReducer = (state = INITIAL_STATE, action) => {
	if (action.type === 'GET_DATA') {
		return { ...state, loading: true } 
	} else if (action.type === 'DATA_LOADED') {
		return { ...state, forecastData: action.forecastData, loading: false }
	}
	return state;
};

export default FetchReducer;