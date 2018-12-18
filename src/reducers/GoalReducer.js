
const GoalReducer = (state = `Set Your Intention For The Day`, action) => {
	if (action.type === 'EDIT_GOAL') {
		return action.payload
	}
	return state;
};

export default GoalReducer;