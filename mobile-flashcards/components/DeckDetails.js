import React , {Component} from 'react'
import {View , Text , TouchableOpacity, StyleSheet , Alert} from 'react-native'

import {connect} from 'react-redux'
import {deleteDeck} from '../actions'

import {removeDeckFromStorage} from '../utils/API'

class DeckDetails extends Component {

  addCard = (title)=>{
    this.props.navigation.navigate('AddCard' , {deck:title})
  }

  /*deleteDeck = (title)=>{
    const {dispatch , navigation} = this.props
    Alert.alert(
      "Delete Deck",
      `Are you sure you want to delete the deck ${title}?`,
      [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: async () => {
            await dispatch(deleteDeck(title))
            navigation.navigate('Home')
          }
        }
      ],
      { cancelable: true }
    );
    removeDeckFromStorage(title)
  }*/

  startQuiz = (title)=>{
    const {navigation} = this.props
    navigation.navigate('Quiz' , {title:title})
  }

  render(){
    console.log('render' , this.props)
    const {deck} = this.props.route.params
    const deck_ = this.props.state[deck]
    const title = deck_.title
    const questions = deck_.questions.length
    return(
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{questions}</Text>
        <TouchableOpacity style={styles.button} onPress={()=> this.addCard(title)}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>this.startQuiz(title)}>
          <Text style={styles.buttonText}>Starts Quiz</Text>
        </TouchableOpacity>
        {/*<TouchableOpacity style={styles.button} onPress={()=> this.deleteDeck(title)}>
          <Text style={styles.buttonText}>Delete Deck</Text>
        </TouchableOpacity>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center'
  } ,
  button: {
    backgroundColor: 'red' ,
    padding : 10 ,
    marginBottom : 10 ,
  } ,
  buttonText : {
    color : 'white' ,
  }
})

  function mapStateToProps(state){
    return {
      state
    }
}
export default connect(mapStateToProps)(DeckDetails)
