import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const New = () => {
  const [value, setValue] = useState("");
  return (
    <div className="create">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="menu-item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft{" "}
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <label className="upload-file" htmlFor="image">
            Upload Image
          </label>

          <div className="btns">
            <button className="btn">Save Draft</button>
            <button className="btn">Publish</button>
          </div>
          <input
            style={{ dispay: "none", visibility: "hidden" }}
            type="file"
            name="image"
            id="image"
          />
        </div>
        <div className="menu-item">
          <h1>Categories</h1>
          <div className="post-tag">
            <input type="radio" name="tag" value="tech" id="tech" />
            <label htmlFor="tech">Tech</label>
          </div>

          <div className="post-tag">
            <input type="radio" name="tag" value="iot" id="iot" />
            <label htmlFor="iot">IoT</label>
          </div>

          <div className="post-tag">
            <input type="radio" name="tag" value="ai" id="ai" />
            <label htmlFor="ai">AI</label>
          </div>

          <div className="post-tag">
            <input type="radio" name="tag" value="ml" id="ml" />
            <label htmlFor="ml">Machine Learinig</label>
          </div>

          <div className="post-tag">
            <input
              type="radio"
              name="tag"
              value="smartphones"
              id="smartphones"
            />
            <label htmlFor="smartphones">Smartphones</label>
          </div>

          <div className="post-tag">
            <input type="radio" name="tag" value="gadgets" id="gadgets" />
            <label htmlFor="gadgets">Gadgets</label>
          </div>

          <div className="post-tag">
            <input type="radio" name="tag" value="others" id="others" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
