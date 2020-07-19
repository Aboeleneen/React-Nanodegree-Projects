import React , {Component} from 'react' ;
import {Link} from 'react-router-dom';
import Book from './Book' ;
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

    state = {
      query : '' ,
      resultBooks : []
    }

    handleChange = (query)=>{
      this.setState({query:query.trim});
      if(this.state.query.length !== 0){
        BooksAPI.search(this.state.query).then((books)=>{
            if(!books.error){
              this.setState({resultBooks:books});
            }else{
              this.setState({resultBooks:books.items});
            }
        })
      }else{
        this.setState({resultBooks:[]});
      }
    }

    render(){
      return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" value={this.state.query} onChange={(event)=>{this.handleChange(event.target.value)}} placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.resultBooks.map((book)=>(<Book book = {book} />))}
          </ol>
        </div>
      </div>)
    }
}

export default SearchBooks ;
