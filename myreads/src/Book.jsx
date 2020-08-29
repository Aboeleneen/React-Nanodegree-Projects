import React , {Component} from 'react' ;


class Book extends Component {

  render(){
    let cover = "https://ravenspacepublishing.org/wp-content/uploads/2019/04/default-book.jpg"
    cover = this.props.book.imageLinks !== undefined ?  this.props.book.imageLinks.thumbnail : cover ;
    return(
      <div className="book">
         <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' +cover + ')' }}></div>
          <div className="book-shelf-changer">

<select defaultValue={this.props.book.shelf} onChange ={(event)=>{this.props.updateBook(this.props.book , event.target.value)}}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading" defaultValue>
                  Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
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
