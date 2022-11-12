import { AutoComplete } from 'antd'
import { FC, useContext } from 'react'
import { AppContext } from '../../context/context';
import s from '../../styles/input.module.css'
import { AutoCompleteOptions } from '../../types/AutoCompleteOptions';

interface AutoCompleteProps {
    options: AutoCompleteOptions[];
    where: 'Откуда' | 'Куда';
}

const MainAutoComplete: FC<AutoCompleteProps> = ({options, where}) => {
    const context = useContext(AppContext);
    
    return (
        <div className={s.inputParent}>
            <label>{where}</label>
            <AutoComplete
                className={s.input + ` ${s.autoComplete}`}
                options={options}
                value={where === 'Откуда' ? context?.fromWhere : context?.toWhere}
                onChange={where === 'Откуда' ? context?.setFromWhere : context?.setToWhere}
                placeholder={where === 'Откуда' ? 'Город вылета' : 'Город прилёта'}
                filterOption={(inputValue, option) =>
                    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            />
        </div>
    )
}

export default MainAutoComplete