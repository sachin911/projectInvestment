import * as actionTypes from './actionTypes';
import axios from 'axios';


function receiveData(jsonData) {
	return {
		type: actionTypes.RECIEVED_DATA,
		data: jsonData
	}
}

// export function fetchJsonData() {
// 	return function(dispatch) {
// 		return axios({
// 			url:"../resources/data/financeData.json",
// 			timeout: 2000,
// 			method: "get",
// 			responseType: 'json'
// 		})
// 		.then(res => {
// 			dispatch(receiveData(res.data));
// 		})
// 		.catch(res => {
// 			console.log("something went wrong bro!!");
// 		})
// 	}
// }