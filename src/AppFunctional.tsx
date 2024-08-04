import { useState } from 'react';
import "./App.css";
import { DateCard } from './components/DateCard/DateCard';
import { ButtonColor } from './utils/Types';
import { Button } from '@mui/material';

export const AppFunctional = () => {
    const [lastClicked, setLastClicked] = useState<Date>(new Date());
    const [buttonColor, setButtonColor] = useState<ButtonColor>(ButtonColor.Red);

    const onClick = () => {
        setLastClicked(new Date());
        setButtonColor(getNextButtonColor());
    };


    // assuming that color changing button here is for getting latest time hence left it same way
    const getNextButtonColor = (): ButtonColor => {
        switch (buttonColor) {
            case ButtonColor.Red:
                return ButtonColor.Blue;
            case ButtonColor.Blue:
                return ButtonColor.Green;
            case ButtonColor.Green:
                return ButtonColor.Red;
            default:
                throw new Error('Invalid color');
        }
    };

    const dataToDisplay = [
        {
            timeZone: ' Local time:',
            actualTime: lastClicked !== undefined ? lastClicked.toString() : 'Never'
        },
        {
            timeZone: ' GMT time:',
            actualTime: lastClicked !== undefined ? lastClicked.toISOString() : 'Never'
        },
        {
            timeZone: ' ACT time:',
            actualTime: lastClicked !== undefined ? lastClicked.toLocaleString('en-GB', {
                dateStyle: 'full',
                timeStyle: 'long',
                timeZone: 'Australia/Sydney',
            }) : 'Never'
        },
    ];

    return (
        <>
            <div>
                <Button onClick={onClick} style={{ backgroundColor: buttonColor, color:'white' }}>
                    Click
                </Button>
            </div>
            <div className="TimeContainer">
                {dataToDisplay.map((val, i) => (
                    <DateCard timeZone={val.timeZone} actualTime={val.actualTime} key={`${i}+1`}  />
                ))}
            </div>
        </>
    );
}

