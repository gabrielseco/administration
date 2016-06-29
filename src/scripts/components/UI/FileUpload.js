import React, { PropTypes } from 'react';
export default function FileUpload({data}) {
  const _onChange = (e) => {
    const file = e.target.files[0];
  };
  return (
    <span className={data.CLASS}>
        <span>Subir imagen</span>
        <input id={data.ID} type="file" name="files[]"
        onChange={_onChange} className="fileupload"/>
      </span>
  );
}
FileUpload.propTypes = {
  data: PropTypes.object.isRequired
};
