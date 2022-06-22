import React from "react";
import editableBase from "./editableBase";

class EditableTitle extends React.Component{
    constructor(props){
      super(props) 
         
    }
 
    onClick = (state, props) => {
            const click = this.props.onClick
      click()
      
    }

    render() {
      return (
        <h1 onClick={this.onClick}  >
          {this.props.text}
        </h1>
      )
    }
  }
    
export default editableBase(EditableTitle);
