import React from "react";
const CreatePost = () => {
  return (
    <div className="card ">
    <h2>Create a post Chef !</h2>
      <input
        className="file-path validate "
        type="text"
        placeholder="Title"
      />
      <input
        className="file-path validate"
        type="text"
        placeholder="Recipe or description"
      />
      <div className="file-field input-field">
        <div className="btn">
          <span>Upload image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
          />
        </div>
      </div>
      <button className="btn waves-effect waves-light">
        {" "}
        Submit Post
      </button>
    </div>
  );
};
export default CreatePost;
