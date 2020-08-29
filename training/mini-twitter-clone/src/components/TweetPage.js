import React , {Component} from 'react'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import {connect} from 'react-redux'

class TweetPage extends Component{
  render(){
    const {id , replies} = this.props
    return(
      <div>
        <Tweet id={id}/>
        <NewTweet id={id}/>
        {replies.length !== 0 && <h3 className='center'>Replies</h3>}
        <ul>
          {replies.map((reply)=>(
            <li key={reply}>
                <Tweet id={reply} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({authedUser , users , tweets} , props){
  const id = props.match.params
  return {
    id ,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort((a,b)=> tweets[a].timestamp - tweets[b].timestamp )
  }
}
export default connect(mapStateToProps)(TweetPage)
