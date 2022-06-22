import React from 'react';
import Book from './book'

const bookList = (props) => {
    const laadBoeken = props.books.map( books => { 
        return <div>   
              <input type="checkbox" onClick={props.onClick}  onChange={props.selectBook} value={books.id}></input>             
            <Book key={books.id} handleDelete={props.handleDelete} {...books}  />  
            </div>                                                                                            
           }
        )

    return (
        <div >
           <h1>BoekenLijst</h1>           
           <ul>{laadBoeken}</ul>                  
        </div>
    );
   
};

export default bookList;