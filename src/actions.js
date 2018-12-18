export const getDataAction = () => ({
	type: 'GET_DATA'
})

export const editGoalAction = (goal) => ({
	type: 'EDIT_GOAL',
	payload: goal
});
