import React from "react";
import s from './Button.module.css';

type PropsType = {
    titleButton: string | number
    isDisabled?: boolean | undefined
    onClickFunc?: (() => void) | undefined
}

export const Button: React.FC<PropsType> = (props) => {

    const onCkick = () => {
        if(props.onClickFunc){
            props.onClickFunc()
        }
    }

    return <div className={s.app__button}>
        <button disabled={props.isDisabled}
                onClick={onCkick}>
            {props.titleButton}
        </button>
    </div>
}



