import React, { PropTypes } from 'react';

export default function BreadCrumb({ data }) {
  const list = data.map((res, i) => {

    if(res.LINK !== undefined){
      return (
        <li key={i}>
          <a href={res.LINK} target="_blank">{res.NAME}
          </a>
        </li>
      );
    }


    return (<li key={i} className="active">{res.NAME}</li>);
  });

  return (
    <ul className="breadcrumb">
      {list}
    </ul>
  );
}

BreadCrumb.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
