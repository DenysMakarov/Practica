import React from 'react';
import StartField from "./StartField";
import PlayField from "./PlayField";
import Result from "./Result";


const Main = ({ page, handleClick, player, goToPlay, goToResult }) => {

    switch (page) {
        case 'start':
            return (
                <StartField handleClick={handleClick} player={player} goToPlay={goToPlay}/>
            );
        case 'play':
            return (
                <PlayField goToResult={goToResult}/>
            );
        case 'result':
            return (
                <Result/>
            );
        default:
            return (
                <StartField/>
            );
    }
}

export default Main