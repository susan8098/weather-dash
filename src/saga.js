
import { put, takeLatest, all } from 'redux-saga/effects';

import { API_KEY, TO_LOCATION } from './constants';

function* fetchData() {
	const res = yield fetch(`https://api.wunderground.com/api/${API_KEY}/forecast10day/q/${TO_LOCATION}.json`).then(res => res.json())
	yield put({ type: 'DATA_LOADED', forecastData: res.forecast.simpleforecast.forecastday})

}

function* actionWatcher() {
	yield takeLatest('GET_DATA', fetchData)
}

export default function* rootSaga() {
	yield all([
		actionWatcher(),
	]);
}
