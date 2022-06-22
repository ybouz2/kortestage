import React   from 'react';



function Book(props) {   
    
    // const [title, setTitle] = useState(props.title)
//     const newTitle = (e) => {
//         setTitle()
//   }

    return (
        // console.log(this.props)
        <div className='ui divided items'> 
            <div className='class="item'>
                        
                <div className='meta'>     
                    <h2 className="header">{props.title}</h2> 
                    </div>                          
                            <div className='meta' >    
                        <p className= "cinema">{props.auteur}</p>
                            </div>
                        <div className="extra">
                            <p className='ui label'>{props.jaar}</p>
                            <p className='ui label'>{props.price}</p> 
                           
                            <div className='ui red label' onClick={() => props.handleDelete(props.id)}>
                            <i className="trash alternate icon"></i>
                            </div>
                            </div>
                        </div>   
           </div>                      
    );
};

export default Book;