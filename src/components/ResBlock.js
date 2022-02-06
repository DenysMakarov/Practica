import React from 'react';

const ResBlock = ({compWin, playersWin}) => {
    return (
        <div className='result'>
            <p>{compWin}</p>
            <div className='line'></div>
            <p>{playersWin}</p>
        </div>
    );
};

export default ResBlock;