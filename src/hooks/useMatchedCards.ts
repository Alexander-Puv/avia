import {useContext, useMemo} from 'react'
import { AppContext } from '../context/context';
import { cards } from '../data/cards';
import { ICard } from '../types/Cards';

const filterCards = (neededWay: "Туда" | "Туда-обратно") => {
    const arr: ICard[] = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].whichWay === neededWay) {
            const length = arr.length + 1
            for (let a = 0; a < length; a++) {
                if (!arr[a]) arr[a] = cards[i]
            }
        }
    }
    return arr;
}

export const useMatchedCards = () => {
    const context = useContext(AppContext);
    const filteredCards = filterCards(!context?.backDate ? 'Туда' : 'Туда-обратно');

    const matchedCards = useMemo(() => {
        const arr: ICard[] = [];
        for (let i = 0; i < filteredCards.length; i++) {
            let card = filteredCards[i];
            if (card.dateFrom === context?.thereDate &&
            card.fromWhere === context?.fromWhere &&
            card.toWhere === context?.toWhere &&
            (card.whichWay === 'Туда-обратно' ?
            card.dateThere === context?.backDate : true)) {
                arr.push(card)
                //matchedCards.push(card);
            } else console.log(context?.fromWhere);
        }
        return arr;
    }, [])
    return matchedCards;
}