import React, {Component} from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='result-box'>
                <h1>Lose : {this.props.lose}</h1>
                <h1>Wins: {this.props.win}</h1>
                <button className='btn-back' onClick={() => this.props.tryAgain()}>AGAIN</button>
            </div>
        );
    }
}

export default Result;