import axios from 'axios';
import { apiCreateCollection } from '../../core/api';

export const createCollection = (title, description) => {
	return async (dispatch) => {
		try {

      var headers = {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }

			const response = await axios.post(`${apiCreateCollection}`, {
				title,
        description
			}, headers);
			alert('Record created successfully')
		} catch (e) {
			alert(e)
		}
	};
};
