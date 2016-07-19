import React, { Component, PropTypes } from 'react';
import BackgroundCover from './BackgroundCover';
import HeaderCover from './HeaderCover';
import HeaderTitleCover from './HeaderTitleCover';
import NavCover from './NavCover';
import SectionCover from './SectionCover';
import MouseCoverScroll from './MouseCoverScroll';


const list_items = [
  {
    TITLE: 'Contacto',
    URL: '/contact'
  }
];

class Cover extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="cover front">
        <BackgroundCover URL="http://www.ggseco.com/wp-content/uploads/2015/01/hoodvista.jpg"/>
        <HeaderCover>
          <HeaderTitleCover URL="/" title="Gabriel García Seco"/>
          <NavCover items={list_items}/>
        </HeaderCover>
        <SectionCover URL="/" title="Gabriel García Seco" description="Desarrollo Web | Music & More"/>
        <MouseCoverScroll/>
      </div>
  );
 }
}

export default Cover;
