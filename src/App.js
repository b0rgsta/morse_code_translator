import './App.css';
import Keyboard from './components/Keyboard';
import Header from './components/Header';
import TypeScreens from './containers/TypeScreens';
import {useState} from 'react';

function App() {

  const [englishText, setEnglishText] = useState('');
  const [morseText, setMorseText] = useState('');


  return (
    <>
      <Header/>
      <TypeScreens englishValue={englishText} morseValue={morseText}/>

      <Keyboard onType={(char, morse) => {
        console.log(char)
        if (char === 'clear') {
          setMorseText('');
          setEnglishText('');
          return
        }
        setEnglishText(englishText + char);
        setMorseText(morseText + ' ' + morse);
      }}/>
    </>
  );
}

export default App;
