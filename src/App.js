import './App.css';
import KeySection from './components/KeySection'
import Screen from './components/Screen';
import { useState } from 'react';

function App() {
  
  const [result,setResult] = useState('');

  const handleOnClick = (e) => {
    setResult(result + e.target.name);
  }
  const calculate = () => {
    setResult(eval(result));
  }
  const clear = () => {
    setResult('');
  }
  const backspace = () => {
    setResult(result.slice(0,result.length - 1));
  }
  return (
    <div className="App bg-kamWhite h-screen w-full flex justify-center items-center">
      <div className="calculator w-1/5 h-5/6 bg-calculator-body p-4 pb-3 rounded-lg">
        <Screen value={ result }/>
        <KeySection 
          handleOnClick={ handleOnClick } 
          calculate={ calculate } 
          clear={ clear } 
          backspace={ backspace} 
        
        />
      </div>
    </div>
  );
}
export default App;
