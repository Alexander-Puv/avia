export interface ICard {
    id: number,
    whichWay: 'Туда' | 'Туда-обратно',
    timeFrom: string,
    timeThere: string,
    travelTime: string,
    dateFrom: string,
    dateThere: string,
    fromWhere: string,
    toWhere: string,
    company: string,
    price: number,
}