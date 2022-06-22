import React from 'react';
import BookList from "./bookList"
import BookForm from "./bookForm"
class App extends React.Component {
    constructor(props) {
        super(props);        
        console.log(props);
        // Create the child instance using react createRef
        this.bookform = React.createRef()        
        this.state = {

            books: [{
                id: 0,                        
                title: "Harry potter",
                auteur: "J.K. Rowling",
                jaar: 2010,
                price: "45"
            },{
                id: 1,
                title: "Vermist",
                auteur: "Joe Cuba",
                jaar: 2003,
                price: "20"
            },{
                id: 2,
                title: "Roadtrip",
                auteur: "Dennis Hopper",
                jaar: 2008,
                price: "15"
            },{
                id: 3,
                title: "Ugly love",
                auteur: "Janis Joplin",
                jaar: 2016,
                price: "18"
            },{
                id: 4,
                title: "Rich dad, poor dad",
                auteur: "Harry Mulish",
                jaar: 2022,
                price: "25"
            }],
        }
    }
    
    selectBook = (e) => {
        
        let selectedBook = this.state.books[e.target.value];    
        // console.log(selectedBook, e.target.value);
        this.bookform.current.editBook(selectedBook)
        console.log(selectedBook);
       
    }

    handleSubmit = (e, obj) => {
        e.preventDefault()
        const submitted = [...this.state.books, obj]
        this.setState({
        books: submitted
        })
    }    

    handleDelete = (bookId) => {
        const newBooks = this.state.books.filter(book => book.id !== bookId);
            this.setState({ books: newBooks });
            console.log("Button Clicked!");
            };

    isChecked = (e) => {
            this.setState({
                checked: e.target.checked
            })
       
    }  
      
    render () {

        return <div className='ui placeholder segment'>
                 <h1>Dit is de App</h1> 
                 <div class="ui divider"></div>
                <div className= 'ui two column very relaxed stackable grid' >
                    <div className='middle aligned column'>
                        <BookList books={this.state.books} onClick={this.isChecked} selectBook={this.selectBook} changeTekst ={this.changeText} handleDelete={this.handleDelete}   /> 
                    </div>
                    <div className="middle aligned column">
                         <BookForm ref={this.bookform} checked={this.state.checked} handleSubmit={this.handleSubmit} selectBook={this.selectBook}   books={this.state.books} />        
                    </div>
                </div>
        </div>
    }
}

export default App;