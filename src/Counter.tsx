import React from "react";
import { Button } from "./common/Button";

type propsType = {
    count: number
    increaseValue: (newCount:number) => void
    resetValue: (resetCount:number) => void
    maxValue: string
    startValue: string
}


export const Counter:React.FC<propsType> = (props) => {

    const disabledIncTrue = (props.count === parseInt(props.maxValue)) ? true : false
    const disabledResetTrue = (props.count === parseInt(props.startValue)) ? true : false


    const increaseValue = () => {
        props.increaseValue(props.count + 1)
    }

    const resetValue = () => {
        props.resetValue(0)
    }

    return <div className={'App__wrapper'}>
        <div className={(props.count === parseInt(props.maxValue)) ? 'App__screen limited': 'App__screen'}>
            <span>{props.count}</span>
        </div>
        <div className={'App__buttons'}>
            <Button titleButton={'increase'} onClickFunc={increaseValue} isDisabled={disabledIncTrue}/>
            <Button titleButton={'reset'} onClickFunc={resetValue} isDisabled={disabledResetTrue}/>
        </div>
    </div>
}