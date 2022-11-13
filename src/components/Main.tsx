import { Button } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'
import s from '../styles/main.module.css'
import { AutoCompleteOptions } from '../types/AutoCompleteOptions'
import MainAutoComplete from './UI/MainAutoComplete'
import MainDatePicker from './UI/MainDatePicker'

const options: AutoCompleteOptions[] = [
    {value: "Москва"},
    {value: "Ростов на Дону"},
]

const Main = () => {
    const [isWrongFilled, setIsWrongFilled] = useState(true)
    const context = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        !isWrong() ? setIsWrongFilled(false) : setIsWrongFilled(true)
    }, [context])

    let isFromRight: boolean;
    let isFromRightTrue: boolean;
    let isToRight: boolean;
    let isToRightTrue: boolean;
    const isWrong = () => {
        for (let i = 0; i < options.length; i++) {
            isFromRight = context?.fromWhere === options[i].value;
            isFromRightTrue = isFromRightTrue ? isFromRightTrue : isFromRight;

            isToRight = context?.toWhere === options[i].value && context?.toWhere !== context?.fromWhere ? true : false;
            isToRightTrue = isToRightTrue ? isToRightTrue : isToRight;
        }
        
        return isFromRightTrue && context?.thereDate && context.toWhere
        //(!context.toWhere ? !context.backDate : (isToRightTrue && context.backDate))
        ? false : true
    }

    const onClick = () => {
        !isWrong() && navigate('/avia/info')
    }

    return (
        <main className={s.main}>
            <section className={s.form}>
                <MainAutoComplete options={options} where='Откуда' />
                <MainAutoComplete options={options} where='Куда' />
                <MainDatePicker when='Туда' />
                <MainDatePicker when='Обратно' />
            </section>
            <section className={s.searchBtn}>
                <Button type='primary' onClick={onClick} disabled={isWrongFilled}>
                    Найти билеты
                </Button>
            </section>
        </main>
    )
}

export default Main