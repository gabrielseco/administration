import React, { PropTypes } from 'react';

export default function BreadCrumb({ data }) {
  const list = data.map((res, i) => {
  let a = null;

    if(res.LINK !== undefined){
      if(res.TARGET !== undefined){
         a = <a href={res.LINK} target={res.TARGET}>{res.NAME}</a>;
      } else {
          a = <a href={res.LINK}>{res.NAME}</a>;
      }

      return (
        <li key={i}>
          {a}
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
