import { useEffect, useState } from 'react'
import { useMatchedCards } from '../hooks/useMatchedCards'
import s from '../styles/info.module.css'
import Card from './UI/Card'

const Info = () => {
    const [areMoreThanOne, setAreMoreThanOne] = useState(false)
    const matchedCards = useMatchedCards();
    console.log(matchedCards);

    useEffect(() => {
        matchedCards.length > 1 && matchedCards[0].whichWay === 'Туда' && setAreMoreThanOne(true)
    }, [matchedCards])

    return (
        <main className={s.main}>
            {matchedCards.length > 0 ?
                !areMoreThanOne ? matchedCards.map(card =>
                    <Card card={card} key={card.id} />
                )
                : <Card card={matchedCards[0]} areMoreThanOne allCards={matchedCards} />
            :
                <h1>
                    Что-то пошло не так<br />
                    Попробуйте указать Москву в качестве пункта отправления и Ростов на Дону в качестве пункта назначения<br />
                    Так же измените даты на 19 ноября
                </h1>
            }
        </main>
    )
}

export default Info