import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'

function App() {
  const [userNameState, setUserName] = useState({
    userName: "TrungTruong"
  })

  function handlerOnChange(event){
    setUserName({
      userName: event.target.value
    })
  }

  return (
    <div className="App">
      <UserInput username={userNameState.userName} changed={handlerOnChange}/>
      <UserOutput username={userNameState.userName}/>
      <UserOutput username={userNameState.userName}/>
      <UserOutput username={userNameState.userName}/>
    </div>
  );
}

export default App;
