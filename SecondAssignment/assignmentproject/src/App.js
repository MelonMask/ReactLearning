import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './components/Validation/Validation'
import Char from './components/Char/Char'
import { string } from 'prop-types';

function App() {

  const [state, setState] = useState({
    textLength: 0,
    chars: [],
    text: ''
  })

  function onChangeListener(event){
    const value = event.target.value
    let newChars = []
    for (let i in value){
      let char = {
        'id': i,
        'content': value[i]
      }
      newChars.push(char)
    }

    setState({
      textLength: value.length,
      chars : newChars,
      text: value
    })
  }

  function handleClickChar(event, index){
    const charIndex = state.chars.findIndex(char =>{
      return char.id === index
    })

    

    let newChars = [
      ...state.chars.slice(0, charIndex),
      ...state.chars.slice(charIndex+1, state.chars.length+1)
    ]

    let textLength = newChars.length

    let text = newChars.reduce((a, b)=>{
      return a + b.content
    }, '')

    setState({
      textLength: textLength,
      chars : newChars,
      text: text
    })
  }

  let charsRender = (
    state.chars.map((char, index) =>{
      return <Char char={char.content} click={(event) => handleClickChar(event, char.id)} key={char.id}/>
    })
  )

  return (
    <div className="App">
      <input type="text" onChange={onChangeListener} value={state.text}></input>
      <Validation textLength={state.textLength}/>
      {
        charsRender
      }
    </div>
  );
}

export default App;
