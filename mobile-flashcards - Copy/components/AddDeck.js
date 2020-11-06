import React , {Component} from 'react'
import {View , TextInput, TouchableOpacity ,StyleSheet , Text , Alert} from 'react-native'

import {connect} from 'react-redux'
import {addDeck} from '../actions'

import {addDeckToStorage} from '../utils/API'

class AddDeck extends Component{
  state = {
    title : ''
  }
  handlePress = ()=>{
    const {title} = this.state
    const {navigate , goBack} = this.props.navigation
    const { decks ,dispatch } = this.props;

    if(!title){
      Alert.alert(
        "Deck Title Required",
        "Deck title was empty, please provide a deck title.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }

    if (decks && decks[title]) {
      Alert.alert(
        "Deck Already Exists",
        "Another deck with the same title already exists, please provide a different deck title.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }

    const newDeck = {
      [title] : {
        title : title ,
        questions : []
      }
    }
    // update redux
    dispatch(addDeck(newDeck))

    // change navigation
    //navigate("Home")
    navigate('Details' , {deck:title})

    // update localStorage
    addDeckToStorage(newDeck)

    this.setState(()=>({title:''}))
    console.log(decks)
  }

  handleChange = (title)=>{
    this.setState(()=>({title:title}))
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.title}
          placeholder='deck title'
          onChangeText={this.handleChange}
        />
        <TouchableOpacity style={styles.button} onPress={()=> this.handlePress()}>
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

function mapStateToProps({decks}){
  return {
    decks ,
  }
}
export default connect(mapStateToProps)(AddDeck)
