import React, { PropTypes } from 'react';
import Cover from './components/Cover';
import {Link} from 'react-router';

export default function NotFound(props) {
  const description = () => {
    return (
      <div>
      La página que has estado buscando no se encuentra.
      Puedes volver al inicio haciendo click <Link to="home">aquí</Link>
      </div>
    );
  }
  const headingBackground = {
    route:'/',
    title: 'Error 404',
    description: description
  }
  return (
    <div>
      <Cover backgroundImage="http://www.ggseco.com/wp-content/uploads/2015/01/hoodvista.jpg"
             headingBackground={headingBackground}/>
    </div>
  );
}
