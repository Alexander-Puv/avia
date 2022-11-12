import { createContext } from "react";

interface IAppContext {
    fromWhere: string,
    setFromWhere: React.Dispatch<React.SetStateAction<string>>,
    toWhere: string,
    setToWhere: React.Dispatch<React.SetStateAction<string>>,
    thereDate: string,
    setThereDate: React.Dispatch<React.SetStateAction<string>>,
    backDate: string,
    setBackDate: React.Dispatch<React.SetStateAction<string>>
    isRightDate: boolean,
    setIsRightDate: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<IAppContext | null>(null)