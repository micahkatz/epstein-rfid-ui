//TODO
import React, { useState, useEffect } from 'react';
//@ts-ignore
import inputData from '../data/inputData.txt';


interface Props {
    children: any
}

interface AttendeeData {
    name: string;
    id: string;
}

export const ModalContext = React.createContext({
    currMessage: '',
    isShown: false,
    isWarning: false,
    setCurrMessage: (message: string) => { },
    setIsWarning: (message: boolean) => { }
});



const ModalContextProvider = (props: Props) => {
    const [currMessage, setCurrMessage] = React.useState<string>('')
    const [isShown, setIsShown] = React.useState(false)
    const [isWarning, setIsWarning] = React.useState(false)

    React.useEffect(() => {
        if (currMessage !== '') {
            setIsShown(true)
            const timeoutID = setTimeout(() => {
                setIsShown(false);
            }, 5000);

            return () => {
                // 👇️ clear timeout when component unmounts
                clearTimeout(timeoutID);
            }
        }

    }, [currMessage]);
    React.useEffect(() => {
        if (isShown === false) {
            const timeoutID = setTimeout(() => {
                setCurrMessage('');
                setIsWarning(false)
            }, 500);

            return () => {
                // 👇️ clear timeout when component unmounts
                clearTimeout(timeoutID);
            }
        }

    }, [isShown]);

    const store = {
        currMessage,
        setCurrMessage,
        isShown,
        isWarning,
        setIsWarning
    };

    return (
        <ModalContext.Provider value={store}>{props.children}</ModalContext.Provider>
    );
};

export default ModalContextProvider;