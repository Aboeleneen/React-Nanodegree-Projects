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
              <option onClick={(event)=>{this.props.updateBook(this.props.book , event.target.value)}}
                      value="currentlyReading">
                      {this.props.book.shelf==="currentlyReading" && this.props.onShelf ? "✓ Currently Reading" :  "Currently Reading"}
              </option>
              <option onClick={(event)=>{this.props.updateBook(this.props.book , event.target.value)}}
                      value="wantToRead">
                      {this.props.book.shelf==="wantToRead"  && this.props.onShelf ? "✓ Want to Read" : "Want to Read"}
              </option>
              <option onClick={(event)=>{this.props.updateBook(this.props.book , event.target.value)}}
                      value="read">
                      {this.props.book.shelf==="read"  && this.props.onShelf ? "✓ Read" : "Read"}
              </option>
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
