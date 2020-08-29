import React from 'react' ;
import {render} from 'react-dom';

class App extends React.Component{
  render(){
    const name = 'Tyler'

    return(
      <Context.Provider value={name}>
      <Parent/>
      </Context.Provider>
    )
  }
}


export default App ;
