import React, { Component, PropTypes } from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <footer className="main">
       <section className="widget copyright">
           <p className="main">
              Copyright ©
              <a href="http://www.ggseco.com/">Gabriel García Seco</a>. 2016 • All rights reserved.
          </p>
           </section>
        <ul className="social">
         <li>
            <a href="https://twitter.com/GGarciaSeco10/" target="_blank"
                className="socialbutton twitter">
                <i className="fa fa-twitter"></i>
            </a>
        </li>

        <li>
            <a href="https://www.facebook.com/gabriel.garciaseco" target="_blank"
                  className="socialbutton facebook">
                  <i className="fa fa-facebook"></i>
            </a>
        </li>
        <li>
              <a href="https://es.linkedin.com/in/gabrielgarciaseco" target="_blank"
                  className="socialbutton linkedin">
                  <i className="fa fa-linkedin"></i>
              </a>
          </li>
         <li>
            <a href="https://github.com/gabrielseco" target="_blank" className="socialbutton github">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/matdry" target="_blank" className="socialbutton soundcloud"><i className="fa fa-soundcloud"></i></a></li>
       </ul>
     </footer>
  );
 }
}

export default Footer;
