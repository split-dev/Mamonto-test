import axios from 'axios';
import { apiAuth } from '../../core/api';
import { SetUser } from '../reducers/userReducer';


export const login = (username, password, client_id, client_secret, grant_type) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${apiAuth}`, {
				username,
				password,
        client_id,
        client_secret,
        grant_type
			});
			localStorage.setItem('token', response.data.access_token);
			localStorage.setItem('User_id', response.data.user.id);
			localStorage.setItem('authorize', true);
			dispatch(SetUser(response.data)); 
		} catch (e) {
			alert(e);
		}
	};
};
