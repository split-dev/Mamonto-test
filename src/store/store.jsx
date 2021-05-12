import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const rootReducers = combineReducers({
	user: userReducer,
});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
