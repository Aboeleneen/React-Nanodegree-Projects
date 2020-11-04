import AsyncStorage from '@react-native-async-storage/async-storage';

const storage_key = 'mobile-flashcard-app'


export const getDecksFromStorage = async ()=>{
  let decks = await AsyncStorage.getItem(storage_key)
  return JSON.parse(decks)
}

export const addDeckToStorage = async (deck)=>{
  await AsyncStorage.mergeItem(storage_key ,JSON.stringify(deck) )
}

export const addCardToDeck = async (title , card)=>{
  let decksData = await AsyncStorage.getItem(storage_key)
  let decks = JSON.parse(decksData)

  decks[title]={
    ...decks[title] ,
    questions : [...decks[title].questions , card]
  }

  await AsyncStorage.setItem(storage_key,JSON.stringify(decks))
}

export const removeDeckFromStorage = async (title)=>{
  let decksData = await AsyncStorage.getItem(storage_key)
  let decks = JSON.parse(decksData)
  decks[title]=undefined
  delete decks[title]
  await AsyncStorage.setIten(storage_key,JSON.stringify(decks))
}
