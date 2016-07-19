import React, { Component, PropTypes } from 'react';
import NavItemCover from './NavItemCover';
import SearchIconCover from './SearchIconCover';
import DrawerIconCover from './DrawerIconCover';


class NavCover extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const items = this.props.items.map((item, i) => {
      return <NavItemCover key={i} data={item}/>;
    });
    return(
      <nav className="main light">
       <div className="menu-main-container">
              <ul id="menu-main-1" className="menu">
                {items}
              </ul>
            </div>
        <ul>
         <SearchIconCover display={false}/>
         <DrawerIconCover display={false}/>
        </ul>
    </nav>
  );
 }
}

NavCover.PropTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object)
};
export default NavCover;
