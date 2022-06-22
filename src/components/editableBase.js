import React, { Component } from 'react'

export default (ChildComponent) => {
    class editableBase extends Component {

        constructor(props){
            super(props)
            // console.log( 2, props)
            // this.editText = this.props.text
            console.log(this.props)
            this.state = {                
              type: this.props.type ||'text',
              value: props.text || '',
              edit: false
            }
            console.log(this.state)
            
          }
      
        onClick = (state, props) => {

            this.setState({edit: this.state.edit!==true})
            // console.log('base click')            
          }

        // save = (state, props) => {
        //   this.setState((state, props) => ({edit:false, value: state.value}))

          
        //   }
      
        // onKeyUp = event => {
        //     if(event.key==='Escape') {
        //       this.setState((state, props) => ({edit:false, value: state.value}))
        //     } 
        //   } 
      
        onChange = event => {
            // this.props.text = event.target.value
            this.setState(() => ({value: event.target.value}))
              // this.editText = event.target.value;
              // console.log(event.target.value)

              // console.log(this.editText. event.target.value)
            }
      
        // onFocus = event => {
        //       const value = event.target.value
        //       event.target.value = ''
        //       event.target.value = value
        //       this.setState((state, props) => ({ backup: state.value})) }
      
        // onBlur = () => {
        //     this.setState({edit:false})
        //   }    

        render() { 

            console.log(this.state)
           
            if(this.state.edit===true ){
                return <ChildComponent  
                {...this.props }                     
                onClick = {this.onClick}
                text = {this.state.value}
                >
                <div>
                <input 
                  value={this.state.value}
                  // onFocus= {this.onFocus}
                  onChange = {this.onChange}
                  // onKeyUp = {this.onKeyUp}
                  // onBlur = {this.onBlur}
                  /> 
                {/* <button onClick = {this.onClick }> Save </button> */}
                </div>
                </ChildComponent>
                }
               
            return <ChildComponent  
                    {...this.props }                     
                    onClick = {this.onClick}
                    text = {this.state.value}
            />           
        }
      }
      return editableBase;
};