export const selectData = state => state.FetchReducer;
export const selectGoal = state => state.GoalReducer;

export default state => ({
	forecast: selectData(state),
	goal: selectGoal(state)
});

