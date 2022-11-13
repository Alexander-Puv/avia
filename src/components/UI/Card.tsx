import React, {FC,useState} from 'react'
import { ICard } from '../../types/Cards'
import s from '../../styles/card.module.css'
import logo from '../../assets/logo.png'
import baggage from '../../assets/baggage.svg'
import bag from '../../assets/bag.svg'

interface CardProps {
    card: ICard,
    areMoreThanOne?: boolean,
    allCards?: ICard[],
}

interface TimeProps {
    date: string,
    city: string,
    time: string,
}

const Time: FC<TimeProps> = ({date, city, time}) => {
    return (
        <div className={s.time}>
            <h2>{time}</h2>
            <span>
                <h3>{city}</h3>
                <p>{date}</p>
            </span>
        </div>
    )
}

const CardThere: FC<CardProps> = ({card, areMoreThanOne, allCards}) => {
    const [currentCard, setCurrentCard] = useState(card);
    
    const changeCard = (thisCard: ICard) => {
        setCurrentCard(thisCard);
    }

    return (
        <div className={s.cardThere}>
            <div className={s.cardLeftSide}>
                <span className={s.sticker}>Невозвратный</span>
                <span className={s.company}>
                    <img src={logo} alt={card.company} />
                    {card.company}
                </span>
            </div>
            <div className={s.cardCenter}>
                <div className={s.flightTime}>
                    <Time time={currentCard.timeFrom} city={currentCard.fromWhere} date={currentCard.dateFrom} />
                    <div className={s.path}>
                        <span className={s.travelRoute}>
                            <div>
                                <p>{currentCard.fromWhere === 'Москва' ? 'SVO' : 'ROV'}</p>
                                <span className={s.round} />
                            </div>
                            <span className={s.travelLine} />
                            <div>
                                <p>{currentCard.toWhere === 'Москва' ? 'SVO' : 'ROV'}</p>
                                <span className={s.round} />
                            </div>
                        </span>
                        <span className={s.travelTime}>Время в пути {currentCard.travelTime}</span>
                    </div>
                    <Time time={currentCard.timeThere} city={currentCard.toWhere} date={currentCard.dateThere} />
                </div>
                {areMoreThanOne && allCards && <div className={s.timeSelection}>
                    {allCards.map(thisCard =>
                        <span
                            className={s.timeBtn + (thisCard.id === currentCard.id ? ' ' + s.selected : '')}
                            key={thisCard.id}
                            onClick={() => changeCard(thisCard)}
                        >
                            <h2>{thisCard.timeFrom} -</h2><span> {currentCard.timeThere}</span>
                        </span>
                    )}
                </div>}
            </div>
            <div className={s.cardRightSide}>
                <div>
                    <img src={bag} alt="bag" />
                    <img src={baggage} alt="baggage" />
                </div>
            </div>
            <span className={s.delimiter}></span>
        </div>
    )
}

const CardBackAndThere: FC<CardProps> = ({card}) => {
    return <div className={s.cardBackAndThere}>
        <CardThere card={card} />
        <span className={s.line}></span>
        <CardThere card={card} />
    </div>
}

const Card: FC<CardProps> = ({card, areMoreThanOne, allCards}) => {
    return (
        <div className={s.card}>
            {card.whichWay === 'Туда' ?
                <CardThere card={card} areMoreThanOne={areMoreThanOne} allCards={allCards} />
            :
                <CardBackAndThere card={card} />
            }
            <h1 className={s.price}>{card.price} ₽</h1>
        </div>
    )
}

export default Card