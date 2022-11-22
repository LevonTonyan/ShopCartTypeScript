import React, {useState, useMemo, useCallback}  from 'react';
import './App.css';
import Second from './components/Second';


const  App:React.FC = () =>  {

const [theme, setTheme] =useState<boolean>(true)
const [number, setNumber] = useState<number>(10)


const calculation = useCallback((number:number):void => {
  while(number < 1000){
    console.log(number)
    number++
  }
}, [number])

useMemo(()=> {
  calculation(number)
},[number])


const appStyleBlack: React.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0 , 0.85)',
  height:'100vh',
  color:"white"
};

const appStyleGrey: React.CSSProperties = {
  backgroundColor: 'rgba(237, 231, 225, 0.85)',
  height:'100vh'
};

  return (
    <div style={theme?appStyleBlack:appStyleGrey} className="App">
     
      <button onClick={() => setTheme((p) => !p)}> Change theme</button>
      <button onClick={() => setNumber((p) => p +1)}> Change Number</button>
      <h1>{number}</h1>
      <Second calculation={calculation}/>
    </div>
  );
}

export default App;
