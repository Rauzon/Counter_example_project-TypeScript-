import React, {ChangeEvent} from "react";
import s from './CounterSettings.module.css';
import { Button } from "../common/Button";

type PropsType = {
    startValue: string
    maxValue: string
    onChangeStartValue:(startValue:string) => void
    onChangeMaxValue:(maxValue:string) => void
}


export const CounterSettings:React.FC<PropsType> = (props) => {

    const onChangeStartValue = (e:ChangeEvent<HTMLInputElement>):void => {
        if(e.currentTarget){
            props.onChangeStartValue(e.currentTarget.value)
        }
    }

    const onChangeMaxValue = (e:ChangeEvent<HTMLInputElement>):void => {
        if(e.currentTarget){
            props.onChangeMaxValue(e.currentTarget.value)
        }
    }

    return <div className={s.content}>
        <div className={s.content__values}>
            <div className={s.content__values__min}>
                <div className={s.content__values_span}>
                    <span>Start value:</span>
                </div>
                <div className={s.content__values_input}>
                    <input type={'number'} value={props.startValue} onChange={onChangeStartValue} />
                </div>
            </div>
            <div className={s.content__values__max}>
                <div className={s.content__values_span}>
                    <span>Max value:</span>
                </div>
                <div className={s.content__values_input}>
                    <input type={'number'}  value={props.maxValue} onChange={onChangeMaxValue}/>
                </div>
            </div>
        </div>
        <div className={s.app__buttons}>
            <Button  titleButton={'set'}/>
        </div>
    </div>
}