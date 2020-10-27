import React , {Component} from 'react'
import {View , TextInput, TouchableOpacity ,StyleSheet , Text} from 'react-native'
import {connect} from 'react-redux'
import {addCard} from '../actions'

class AddCard extends Component{
  state = {
    question:'' ,
    answer : '',
  }

  handlePress = ()=>{

    const {deck} = this.props.route.params
    const {question , answer} = this.state
    this.props.dispatch(addCard(deck , {question, answer}))

    this.props.navigation.navigate('Details' , {deckId:this.props.route.params.deckId})
  }

  handleChange = (key , value)=>{
    this.setState(()=>({[key]:value}))
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Question'
          value={this.state.question}
          onChangeText={(text)=>this.handleChange('question' , text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Answer'
          value={this.state.answer}
          onChangeText={(text)=>this.handleChange('answer' , text)}
        />
        <TouchableOpacity style={styles.button} onPress={()=>this.handlePress()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex : 1 ,
    alignItems:'center' ,
    justifyContent: 'center',
  } ,
  input:{
    height:40 ,
    width : 200 ,
    borderWidth : 1 ,
    borderColor : 'grey',
    marginBottom : 20 ,
  } ,
  button :{
    backgroundColor: 'red' ,
    borderRadius: 2,
    width : 65 ,
    padding : 10 ,
  } ,
  buttonText:{
    color : 'white',
  }
})

export default connect()(AddCard)
