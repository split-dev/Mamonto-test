const initialState = {
	currentUser: {},
	isAuth: false,
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET-USER':
			return {
				...state,
				currentUser: action.payload,
				isAuth: true,
			};
		case 'LOG-OUT':
			localStorage.removeItem('token');
			localStorage.removeItem('authorize');
			return {
				...state,
				currentUser: {},
				isAuth: false,
			};

		default:
			return state;
	}
}

export const SetUser = (user) => ({ type: 'SET-USER', payload: user });

export const LogOut = () => ({ type: 'LOG-OUT' });
