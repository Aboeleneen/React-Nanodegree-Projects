import React , {Component} from 'react'
import {View , Text , TouchableOpacity , StyleSheet} from 'react-native'

export default class Deck extends Component{

  handlePress = ()=>{
    this.props.navigation.navigate('Details' , {deck:this.props.deck.title})
  }
  render(){
    const {deck} = this.props
    const title = deck.title
    const questions = deck.questions.length
    return(
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{questions} cards</Text>
        <TouchableOpacity style={styles.button} onPress={()=>this.handlePress()}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    alignItems : 'center' ,
    justifyContent : 'space-between' ,
    borderWidth : 1 ,
    borderColor: 'red',
    borderLeftWidth : 7 ,
    borderLeftColor : 'red' ,
    maxHeight : 80,
    marginTop : 20 ,
  } ,
  button : {
    alignSelf : 'flex-end' ,
    padding : 5 ,
    backgroundColor : 'red' ,
  } ,
  buttonText : {
    color : 'white'
  }
})
