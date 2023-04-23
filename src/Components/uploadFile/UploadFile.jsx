import React, { useState } from 'react';

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    fetch(`${process.env.REACT_APP_URL}/import-json/upload`, {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(message => console.log(message))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={event => setFile(event.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadFile;
