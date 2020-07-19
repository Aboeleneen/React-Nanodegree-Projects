import React , {Component} from 'react' ;


class Book extends Component {

  render(){
    return(
      <div className="book">
         <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + this.props.book.imageLinks.thumbnail + ')' }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option onClick={(event)=>{this.props.updateBook(this.props.book , event.target.value)}} value="currentlyReading">Currently Reading</option>
              <option onClick={(event)=>{this.props.updateBook(this.props.book , event.target.value)}} value="wantToRead">Want to Read</option>
              <option onClick={(event)=>{this.props.updateBook(this.props.book , event.target.value)}} value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
         {/*this.props.book.authors.map((author)=>(
             <div className="book-authors">{author}</div>
         ))*/}
      </div>
    )
  }
}

export default Book ;
