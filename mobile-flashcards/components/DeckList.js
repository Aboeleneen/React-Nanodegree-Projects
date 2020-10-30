  import React , {Component} from 'react'
import {View, StyleSheet , Text} from 'react-native'
import {connect} from 'react-redux'

import {getDecksFromStorage} from '../utils/API'
import {loadDecks} from '../actions'

import Deck from './Deck'
class DeckList extends Component{
  state = {
    decks : {}
  }

  componentDidMount(){
    const {dispatch} = this.props
    const decks = getDecksFromStorage()
    if(decks !== null)
      dispatch(loadDecks(decks))
  }

  render(){
    const {navigation}  = this.props
    const {decks}= this.props

    //this.setState(()=>({decks:this.props.decks}))
    console.log("done")
    if(!decks) return (
      <View style={styles.container}>
        <Text>there is no decks </Text>
      </View>
    )
    return(
      <View style={styles.container}>
        {Object.keys(decks).map((key)=>(
          <Deck deck={decks[key]} key={key} navigation={navigation}/>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex : 1 ,
    alignItems : 'stretch' ,
    justifyContent : 'flex-start',
    marginLeft : 20 ,
    marginRight : 20 ,
    marginTop : 10 ,
  }
})

function mapStateToProps(state){
  console.log('Mount' , 'DeckList')
  return {
    decks : state,
  }
}
export default connect(mapStateToProps)(DeckList)
