import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks' ;
import BookShelf from './BookShelf';
import {Link , Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     Books : [] ,
  }

  componentDidMount(){
      BooksAPI.getAll().then((books)=>{
          this.setState(()=>({ Books : books}))
      })

  }

  updateBook = (selectedBook , newShelf)=>{
    const found = this.state.Books.find((book)=>(book.id === selectedBook.id)) !== undefined ;
    console.log(found);
    if(!found) this.addBook(selectedBook);
    BooksAPI.update(selectedBook,newShelf).then(()=>{
        this.setState((prevState)=>({Books: prevState.Books.map((book)=>{
            if(book.id === selectedBook.id){
              book.shelf = newShelf ;
            }
            return book ;
        })}))
    })
  }

  addBook = (book)=>{
    this.setState((prevState)=>({Books : [...prevState.Books , book]}))
  }

  render() {
    const currentBooks = this.state.Books.filter((book)=>(book.shelf === "currentlyReading"));
    const wantBooks = this.state.Books.filter((book)=>(book.shelf === 'wantToRead'));
    const readBooks = this.state.Books.filter((book)=>(book.shelf === 'read'))
    return (
      <div className="app">
          <Route exact path='/search' render={()=>(<SearchBooks addBook = {this.addBook} allBooks={this.state.Books} updateBook = {this.updateBook}/>)}/>
          <Route exact path='/' render={()=>
           (<div className="list-books">
             <div className="list-books-title">
               <h1>MyReads</h1>
             </div>
             <div className="list-books-content">
               <div>
               <BookShelf title ="Currently Reading" books = {currentBooks} updateBook = {this.updateBook}/>
               <BookShelf title = "Want to Read" books ={wantBooks} updateBook = {this.updateBook}/>
               <BookShelf title = "Read" books ={readBooks} updateBook = {this.updateBook} />
               </div>
             </div>
             <div className="open-search">
               <Link to='/search' className="add-button" >Add a book</Link>
             </div>
           </div>
         )} />
      </div>
    )
  }
}

export default BooksApp
