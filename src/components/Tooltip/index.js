import React, { Component } from "react";
import ReactDOM from 'react-dom'

import './style.css';
class ToolTip extends React.Component
{
	constructor(props)
  {
  	super(props);
  }
  render()
  {
  	let {state} = this;
    
    return <div id="tooltip" className="on bottom">
            <div className="tooltip-arrow"></div><div className="tooltip-inner">Say "Search, Search for, Find, or Get *"</div>
           </div>;
  }
  componentDidMount()
  {
  	
  }
  componentWillUnmount()
  {
  	
	}
}

ReactDOM.render(<ToolTip />, document.getElementById("app"));
export default ToolTip;