import React from 'react';
import Card from "./Card";

const CardField = ({compCurrentType, compCurrentNum, playerCurrentNum, playerCurrentType, name}) => {
    return (
        <div className='cards-field'>
            <h2 className='gamer'>COMP</h2>
            <Card classN='card compCard' currentType={compCurrentType} currentNum={compCurrentNum}/>
            <Card classN='card yourCard' currentType={playerCurrentType} currentNum={playerCurrentNum}/>
            <h2 className='gamer'>{name}</h2>
        </div>
    );
};

export default CardField;