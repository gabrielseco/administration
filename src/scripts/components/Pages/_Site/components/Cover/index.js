import React, { Component, PropTypes } from 'react';
import BackgroundCover from './BackgroundCover';
import HeaderCover from './HeaderCover';
import HeaderTitleCover from './HeaderTitleCover';
import NavCover from './NavCover';
import SectionCover from './SectionCover';
import MouseCoverScroll from './MouseCoverScroll';
import classNames from 'classnames';

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
    const isFront = classNames({
      'front': !this.props.center,
      'cover':true
    });
    return(
      <div className={isFront}>
        <BackgroundCover URL={this.props.backgroundImage}/>
        <HeaderCover>
          <HeaderTitleCover URL="/" title="Gabriel García Seco"/>
          <NavCover items={list_items}/>
        </HeaderCover>
        <SectionCover URL={this.props.headingBackground.route}
                      title={this.props.headingBackground.title}
                      description={this.props.headingBackground.description}
                      center={this.props.center}/>
        <MouseCoverScroll/>
      </div>
  );
 }
}

Cover.PropTypes = {
  headingBackground: PropTypes.object.isRequired,
  center: PropTypes.bool
};
export default Cover;
