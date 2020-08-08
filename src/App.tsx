import React, {useState} from 'react';
import './App.css';
import { Counter } from './Counter';
import { CounterSettings } from './CounterSettings/CounterSettings';

function App() {

    // min and max value
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    //Counter component
    const [count, setCount] = useState<number>(0)

    //Counter component
    const increaseValue = (newCount:number) => {
        setCount(newCount)
    }

    const resetValue = (resetCount:number) => {
        setCount(resetCount)
    }

    //set min and max value
    const onClickBtn = (startValue:string, maxValue:string) => {
        setCount(parseInt(startValue))
        setMinValue(parseInt(startValue))
        setMaxValue(parseInt(maxValue))
    }

    return (
    <div className="App">
      <CounterSettings onClickBtn={onClickBtn}/>
      <Counter count={count}
               increaseValue = {increaseValue}
               resetValue={resetValue}
               minValue={minValue}
               maxValue={maxValue} />
    </div>
  );
}

export default App;
