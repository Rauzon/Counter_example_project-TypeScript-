import React from "react";
import { Button } from "./common/Button";

type propsType = {
    count: number
    increaseValue: (newCount:number) => void
    resetValue: (resetCount:number) => void
    minValue:number
    maxValue:number
}


export const Counter:React.FC<propsType> = (props) => {

    const currectValue = (props.minValue < 0 || props.maxValue < 0 || props.maxValue === props.minValue)

    const disabledIncTrue = (props.count === props.maxValue || currectValue) ? true : false
    const disabledResetTrue = (props.count === props.minValue || currectValue) ? true : false



    const increaseValue = () => {
        props.increaseValue(props.count + 1)
    }

    const resetValue = () => {
        props.resetValue(props.minValue)
    }

    return <div className={'App__wrapper'}>
        <div className={(props.count === props.maxValue || currectValue) ? 'App__screen limited': 'App__screen'}>
            {(currectValue) ? <span>incorrect value</span> : <span>{props.count}</span>}
        </div>
        <div className={'App__buttons'}>
            <Button titleButton={'increase'} onClickFunc={increaseValue} isDisabled={disabledIncTrue}/>
            <Button titleButton={'reset'} onClickFunc={resetValue} isDisabled={disabledResetTrue}/>
        </div>
    </div>
}