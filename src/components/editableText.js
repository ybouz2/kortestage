import React from "react";
import editableBase from "./editableBase";

class EditableText extends React.Component{
    constructor(props){
      super(props)

      console.log( '1',  this.props.text)
      

    }

    

    onClick = (state, props) => {     
      
      // console.log('edit text click') 
      
      // console.log(this.props);

      const click = this.props.onClick
      click()
      
      

    }  

    render() {     

      console.log('render mij')
      
      return (<React.Fragment>
                <p onClick={this.onClick}>
                  {this.props.text}
                </p>
              <button>Save</button>
            </React.Fragment> )
      //  return <p onClick={this.onClick}>
      //           {this.props.text}
      //         </p>
      
    }
  }
    

export default editableBase(EditableText);
// export default EditableText;
