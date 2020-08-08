import React, {useState} from 'react';
import './App.css';
import { Counter } from './Counter';
import { CounterSettings } from './CounterSettings/CounterSettings';

function App() {
    //Counter component
    const [count, setCount] = useState(0)

    //CounterSettings component
    let [startValue, setStartValue] = useState<string>('0');
    let [maxValue, setMaxValue] = useState<string>('0');

    //Counter component
    const increaseValue = (newCount:number) => {
        setCount(newCount)
    }

    const resetValue = (resetCount:number) => {
        setCount(resetCount)
    }

    //CounterSettings Component

    const onChangeStartValue = (newStartValue:string) => {
        setStartValue(newStartValue);
    }

    const onChangeMaxValue = (newMaxValue:string) => {
        setMaxValue(newMaxValue);
    }

    return (
    <div className="App">
      <CounterSettings startValue={startValue}
                       maxValue={maxValue}
                       onChangeStartValue={onChangeStartValue}
                       onChangeMaxValue={onChangeMaxValue}/>
      <Counter count={count}
               increaseValue = {increaseValue}
               resetValue={resetValue}
               startValue={startValue}
               maxValue={maxValue}/>
    </div>
  );
}

export default App;
