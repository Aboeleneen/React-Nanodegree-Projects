import react from 'react' ;
import {render} from 'react-dom';

function  parent(){
  return{
    <div>
      <h1> Parent </h1>
      <child />
    </div>
  }
}

function child(){
  return{
    <div>
      <h1> Child </h1>
      <Grandchild />
    </div>
  }
}

function Grandchild({name}){
  return {
    <div>
      <h1>Grandchild</h1>
      <h3> Name : {name} </h3>
    </div>
  }
}
