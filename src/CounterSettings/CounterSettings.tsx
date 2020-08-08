import React, {ChangeEvent, useState,FocusEvent} from "react";
import s from './CounterSettings.module.css';
import { Button } from "../common/Button";

type PropsType = {
    onClickBtn: (startValue:string, maxValue:string) => void
}


export const CounterSettings:React.FC<PropsType> = (props) => {

    let [startValue, setStartValue] = useState<string>('0');
    let [maxValue, setMaxValue] = useState<string>('0');


    //change values of input
    const onChangeStartValue = (e:ChangeEvent<HTMLInputElement>):void => {
        let currentValue = e.currentTarget.value;

        if(currentValue){
            setStartValue(currentValue)
        }
    }

    const onChangeMaxValue = (e:ChangeEvent<HTMLInputElement>):void => {
        let currentValue = e.currentTarget.value;

        if(currentValue){
            setMaxValue(currentValue)
        }
    }

    //onClick set max and min value
    const onClickBtn = () => {
        props.onClickBtn(startValue, maxValue)
    }

    const onFocusFunc = (e:FocusEvent<HTMLInputElement>):void => {

    }


    const correctValue = (parseInt(maxValue) < 0 || parseInt(startValue) < 0)

    const errorStyle = (correctValue) ? `${s.content__values_input} ${s.error}` : `${s.content__values_input}`


    return <div className={s.content}>
        <div className={s.content__values}>
            <div className={s.content__values__min}>
                <div className={s.content__values_span}>
                    <span>Start value:</span>
                </div>
                <div className={errorStyle}>
                    <input type={'number'} value={startValue}
                           onChange={onChangeStartValue} onFocus={onFocusFunc}/>
                </div>
            </div>
            <div className={s.content__values__max}>
                <div className={s.content__values_span}>
                    <span>Max value:</span>
                </div>
                <div className={errorStyle}>
                    <input type={'number'}  value={maxValue} onChange={onChangeMaxValue}/>
                </div>
            </div>
        </div>
        <div className={s.app__buttons}>
            <Button  titleButton={'set'} onClickFunc={onClickBtn}/>
        </div>
    </div>
}