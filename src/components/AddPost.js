import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { ADD_POST } from '../constants'

const AddPost = ({ newPost }) => {

  const [subReddit, setSubReddit] = useState("");
  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const userPost = {};

  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      <h2>Add a Post</h2>
      <form>
        <div className="form-group col-md-6">
          <label>subReddit</label>
          <input
            type="text"
            name="subReddit"
            className="form-control"
            value={subReddit}
            onChange={(e) => setSubReddit(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Poster</label>
          <input
            type="text"
            name="poster"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>URL</label>
          <input
            type="text"
            name="src"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary push-right" onClick={ '' }>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
