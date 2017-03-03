import { call, put, takeLatest } from 'redux-saga/effects';
var jsonData = require("../resources/data/strategyInformationData.json");

function getDataApi(){
	// return fetch(dataUrl, {
	// 	method: "GET",
	// 	 headers: {
 //      		'Content-Type': 'application/json',
 //    	}
	// })
	// .then(response => 
	// 	console.log(response)
	// 	// response.json()
	// )
 //    .then(json => json)
 //    .catch((error) => { throw error })

	return jsonData;
}

function* getData(action) {
    try {
    	console.log("reached the api call");
        const data = yield call(getDataApi);
        yield put({ type: "RECIEVED_DATA", data });
    } catch (err) {
    	console.log(err.message);
        yield put({ type: "DATA_GETTING_FAILED", message: err.message });
    }
}

export function* watchGetData() {
    yield takeLatest("GET_DATA", getData);
}

export default function* rootSaga() {
    yield [
        watchGetData()
    ]
}
