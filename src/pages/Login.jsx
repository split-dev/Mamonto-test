import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../util/input';
import { login } from '../store/actions/user';

function Login({toggleAuth}) {
	const [Username, setUsername] = useState('');
	const [PassLog, setPassLog] = useState('');
	const [Client_id, setClient_id] = useState('');
	const [Client_secret, setClient_secret] = useState('');
	const [Grant_type, setGrant_type] = useState('');

	const dispatch = useDispatch();

	const auth = () => {
		toggleAuth();
		dispatch(login(Username, PassLog, Client_id, Client_secret, Grant_type));
	}
	return (
		<div className="p-3">
			<div className="container text-center">
					<h3 className="my-5">Login</h3>
				<div className="col-md-6 offset-md-3">
					<div className="row mb-3">
					<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Username</label>
					<div className="col-sm-10">
						<Input type="text" className="form-control form-control-sm" value={Username} SetInput={setUsername} />
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Password</label>
					<div className="col-sm-10">
						<Input type="password" className="form-control form-control-sm" value={PassLog} SetInput={setPassLog} />
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">client_id</label>
					<div className="col-sm-10">
						<Input type="text" className="form-control form-control-sm" value={Client_id} SetInput={setClient_id} />
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">client_secret</label>
					<div className="col-sm-10">
						<Input type="text" className="form-control form-control-sm" value={Client_secret} SetInput={setClient_secret} />
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">grant_type</label>
					<div className="col-sm-10">
						<Input type="text" className="form-control form-control-sm" value={Grant_type} SetInput={setGrant_type} />
					</div>
				</div>
				
				<input className="btn btn-primary" type="submit" value="Submit" onClick={auth}></input>
				</div>
			</div>
		</div>
	);
}

export default Login;
