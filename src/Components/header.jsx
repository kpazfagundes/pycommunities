import React, { Component } from "react";
import WOW from "wowjs";

class Skills extends Component {
  
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div className="wow rubberBand" data-wow-offset="50" data-wow-delay="0.5s">
       <h1>Save the date 26/01</h1>
      </div>
    )
   }
}
export default Skills;