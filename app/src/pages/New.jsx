import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const New = () => {
  const [value, setValue] = useState('');
  return (
    <div className='create'>
      <div className="content">
        <input type="text" placeholder='Titel' />
        <div className="editorContainer" >
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
        <div className="menu">
          <div className="menu-item">
            <h1>Publish</h1>
            <span><b>Status: </b> Draft</span><br/>
            <span><b>Visibility: </b> Public</span><br/>

            <input style={{dispay: "none"}} type="file" name='image' id='image' />
            <label htmlFor="image">Upload Image</label>
          </div>
          <div className="menu-item">3</div>
        </div>
    </div>
  )
}

export default New