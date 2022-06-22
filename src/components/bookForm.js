import React from 'react';


class bookForm extends React.Component {

    state = {
        title: '',
        auteur: '',
        jaar: '',
        price: '',
      }

    editBook = (book)  => {
        this.setState( {title:  book.title,
                        auteur: book.auteur,
                        jaar: book.jaar,
                        price: book.price } )
                        
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
          
        })

        console.log(e.target.name);
      }

    
   

   render(){    
       
    // const checkBox = document.getElementById("checkbox")
    // console.log(checkBox)

       return (
           <div>
           {/* < Book name={this.state.title} /> */}
                   
           <form className='ui form' style={{ width: "100%"}} onSubmit={ (e) => this.props.handleSubmit(e, this.state)}>
               <div className='field'>
                   <label>Titel</label>
                   <input onChange={this.handleChange} value={this.props.checked ? this.state.title : "" } type="text" name="title" placeholder="Title van het boek.."></input>
               </div>
               <div className='field'>
                   <label>Auteur</label>
                   <input onChange={this.handleChange} value={this.props.checked ? this.state.auteur : ''} type="text" name="auteur" placeholder="Naam van auteur.."></input>
               </div>
               <div className='field'>
                   <label>Jaar</label>
                   <input onChange={this.handleChange}  value={this.props.checked? this.state.jaar : ''} type="number" name="jaar" placeholder="JJJJ" max="2022"></input>
               </div>
               <div className='field'>
                   <label>Prijs</label>
                   <input onChange={this.handleChange}  value={this.props.checked ? this.state.price : ''} type="number" name="price" placeholder=",-" ></input>
               </div>
               <input className="ui button"type="submit" value="Toevoegen" ></input>               
           </form>              
        </div>
    );
    }
};

export default bookForm;