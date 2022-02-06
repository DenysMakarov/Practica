import React from 'react';

const Card = ({currentType, currentNum, classN}) => {
    return (
        <div className={classN}>
            <p>{currentType}</p>
            <p>{currentNum}</p>
        </div>
    );
};

export default Card;