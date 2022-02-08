import axios from 'axios';
import {baseApi} from '../config'


export const userAdd = (newAnswer) => {
	return function (dispatch) {
		axios.post(baseApi + 'user/add', newAnswer)
		.then(function (response) {
				sessionStorage.userid = response.data._id;
				dispatch({type: "USER_RECEIVED", payload: response.data});
			}
		).catch(function (error) {
			try {
				error.response.data.message = "have error";
			} catch (e) {
			}
			dispatch({type: "USER_ERR", payload: error.response.data});
		})
	}
};