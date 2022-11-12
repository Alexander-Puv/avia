import { DatePicker } from 'antd';
import moment from 'moment';
import { FC, useContext } from 'react';
import { AppContext } from '../../context/context';
import s from '../../styles/input.module.css';

interface DatePickerProps {
    when: 'Туда' | 'Обратно';
}

const dateFormat = 'DD.MM.YY'

const MainDatePicker: FC<DatePickerProps> = ({when}) => {
    const context = useContext(AppContext);

    const onChange = (e: moment.Moment | null) => {
        const date = moment(e).format(dateFormat);
        when === 'Туда' ? context?.setThereDate(date)
        : context?.setBackDate(date)
    }

    return (
        <div className={s.inputParent}>
            <label>{when}</label>
            <DatePicker
                className={s.input + ` ${s.datePicker}`}
                defaultValue={when === 'Туда' ? moment(context?.thereDate, dateFormat) : (context?.backDate ? moment(context?.backDate, dateFormat) : undefined)}
                format={dateFormat}
                placeholder={'дд.мм.гг'}
                onChange={e => e !== null && onChange(e)}
            />
        </div>
    )
}

export default MainDatePicker