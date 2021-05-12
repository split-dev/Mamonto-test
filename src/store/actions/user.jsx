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
			dispatch(SetUser(response.data));
			localStorage.setItem('token', response.data.access_token);
			localStorage.setItem('User_id', response.data.user.id);
      console.log(response.data.access_token);
			localStorage.setItem('authorize', true);
		} catch (e) {
			alert(e);
		}
	};
};
