import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';
import initialState from '../resources/data/initialState';

function mainReducer(state=initialState, action=null) {
	switch(action.type) {
		case types.RECIEVED_DATA :
			return [...state, action.data];

		default :
			return state;
	}
}

const rootReducer = combineReducers({
	reducer: mainReducer
});

export default rootReducer;