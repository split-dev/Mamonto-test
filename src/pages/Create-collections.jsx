import React, {useState} from 'react';
import Input from '../util/input';
import { useDispatch } from 'react-redux';
import { createCollection } from '../store/actions/create-Collection';

function CreateCollection({logOut}) {

  const [Title, setTitle] = useState('');
	const [Description, setDescription] = useState('');

  const dispatch = useDispatch();

  const createButton = () => {
    dispatch(createCollection(Title, Description))
  }
	return (
		<div className="p-3">
      <strong>Login User id</strong> <p>{localStorage.getItem('User_id')}</p>
      <button type="button" className="btn btn-danger" onClick={ ()=> {
        logOut();
      }}>Log out</button>

      <div className="container mt-4">
        <div className="col-md-6 offset-md-3">
          <h2 className="mb-5">Create Collection</h2>
          <div className="row mb-4">
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Title</label>
            <div className="col-sm-10">
              <Input className="form-control form-control-sm" type="text" placeholder="title collection" SetInput={setTitle}/>
            </div>
          </div>
          <div className="row">
            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Description </label>
            <div className="col-sm-10">
              <Input className="form-control form-control-lg" type="text" placeholder="title collection" SetInput={setDescription}/>
            </div>
          </div>
          <input className="btn btn-primary mt-5" type="submit" value="Create" onClick={createButton}></input>
        </div>
      </div>
		</div>
	);
}

export default CreateCollection;
