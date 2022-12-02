//TODO
import React, { useState, useEffect } from 'react';

import { useLocalStorage } from 'usehooks-ts'


//@ts-ignore
import inputData from '../data/inputData.txt';
import { ModalContext } from './modalContext';


interface Props {
    children: any
}

interface AttendeeData {
    name: string;
    id: string;
}

export const InputContext = React.createContext({
    handleKeyPress: (e: React.KeyboardEvent<HTMLDivElement>) => { },
    currAttendees: [] as AttendeeData[]
});

const InputContextComponent = (props: Props) => {
    const modalContext = React.useContext(ModalContext)
    const [currIdArray, setCurrIdArray] = React.useState<string[]>([])
    const [attendeeData, setAttendeeData] = React.useState<AttendeeData[]>([])
    const [currAttendees, setCurrAttendees] = useLocalStorage<AttendeeData[]>('currAttendees', [])
    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        console.log('pressed key:', e.key)
        const currKey: string = e.key
        if (e.key === 'Enter') { // will close the id
            // setAttendeeIds((prev: string[]) => [...prev, ])

            const incomingId = currIdArray.join('')

            if (incomingId.toLowerCase() === 'reset') {
                setCurrAttendees([])
                modalContext.setCurrMessage(`Successfully Reset`)
                modalContext.setIsWarning(true);
            } else {
                const attendee = getAttendeeById(attendeeData, incomingId)
                if (attendee) {
                    const existingVisitor = getAttendeeById(currAttendees, incomingId)
                    if (existingVisitor) {
                        // remove the visitor
                        removeVisitor(existingVisitor)

                    } else {
                        addVisitor(attendee)
                    }
                    modalContext.setIsWarning(false);
                } else {
                    console.log('Attendee not found')
                    modalContext.setCurrMessage(`Sorry! Invalid Code`)
                    modalContext.setIsWarning(true);
                }

            }
            setCurrIdArray([])
        } else {
            setCurrIdArray((prev: string[]) => [...prev, currKey])
        }
    }

    const removeVisitor = (existingVisitor: AttendeeData) => {
        setCurrAttendees((prev: AttendeeData[]) => prev.filter(item => item.id !== existingVisitor.id))
        console.log('Removed existingVisitor', existingVisitor)
        modalContext.setCurrMessage(`Goodbye, ${existingVisitor.name}!`)

    }
    const addVisitor = (attendee: AttendeeData) => {
        console.log('Attendee found', attendee)
        setCurrAttendees((prev: AttendeeData[]) => [...prev, attendee])
        modalContext.setCurrMessage(`Welcome, ${attendee.name}!`)
    }

    const getAttendeeById = (dataList: AttendeeData[], id: string) => {
        const filteredData = dataList.filter(item => item.id === id)
        if (filteredData.length > 0) {
            return filteredData[0]
        } else {
            return null
        }
    }
    const getAttendeeData = async () => {
        try {
            const attendeeIdsRaw = await fetch(inputData)
            const attendeesIdsText = await attendeeIdsRaw.text();

            const inputLines: string[] = attendeesIdsText.split('\n');
            const resultingData: AttendeeData[] = inputLines.filter(line => line.includes(',')).map(line => {
                const wordArray = line.split(',')
                const name = wordArray[0].trim();
                const id = wordArray[1].trim();
                console.log({ name, id })
                return { name, id }
            })

            console.log({ resultingData })
            setAttendeeData(resultingData)
            return resultingData

        } catch (err) {
            console.error(err)
        }
    }

    React.useEffect(() => {
        getAttendeeData()
    }, [])

    const store = {
        handleKeyPress,
        currAttendees
    };

    return (
        <InputContext.Provider value={store}>{props.children}</InputContext.Provider>
    );
};

export default InputContextComponent;