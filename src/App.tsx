import React, {useState} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Info from './components/Info';
import Main from './components/Main';
import { AppContext } from './context/context';

function App() {
    const [fromWhere, setFromWhere] = useState('');
    const [toWhere, setToWhere] = useState('');
    const [thereDate, setThereDate] = useState('19.11.22');
    const [backDate, setBackDate] = useState('');
    const [isRightDate, setIsRightDate] = useState(false)

    return (
        <AppContext.Provider value={{
            fromWhere, setFromWhere,
            toWhere, setToWhere,
            thereDate, setThereDate,
            backDate, setBackDate,
            isRightDate, setIsRightDate
        }}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/avia' element={<Main />} />
                        <Route path='/avia/info' element={<Info />} />
                        <Route path='*' element={<Navigate to='/avia' replace={true} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </AppContext.Provider>
    );
}

export default App;
