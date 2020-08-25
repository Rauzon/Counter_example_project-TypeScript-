import React, {ChangeEvent, useState,FocusEvent} from "react";
import s from './CounterSettings.module.css';
import { Button } from "../common/Button";

type PropsType = {
    onClickBtn: (startValue:string, maxValue:string) => void
}


export const CounterSettings:React.FC<PropsType> = (props) => {

    // temporary layout for values

    const localStartValue = localStorage.getItem('startValue')
    const localMaxValue = localStorage.getItem('maxValue')

    const correctStartValue = (!localStartValue) ? '0' : localStartValue;
    const correctMaxValue = (!localMaxValue) ? '0' : localMaxValue;

    let [startValue, setStartValue] = useState<string>(correctStartValue);
    let [maxValue, setMaxValue] = useState<string>(correctMaxValue);

    localStorage.setItem('minValue', startValue.toString())
    localStorage.setItem('maxValue', maxValue.toString())


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

    //Error for input's fields
    const startValueInt = parseInt(startValue);
    const maxValueInt = parseInt(maxValue);

    const correctValue =(startValueInt < 0 || maxValueInt < 0 || startValueInt > maxValueInt)

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